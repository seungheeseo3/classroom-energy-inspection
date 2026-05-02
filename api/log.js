const { appendInspections } = require("./_sheets");

const allowed = {
  timetable_status: new Set(["class_scheduled", "no_class"]),
  actual_activity: new Set(["lecture", "not_lecture", "event", "unknown"]),
  occupancy_status: new Set(["empty", "one_to_two", "three_or_more", "unknown"]),
  exception_reason: new Set(["early_end", "cancelled", "personal_use", "unknown", "none"]),
  lighting_status: new Set(["off", "half_on", "on"]),
  device_status: new Set(["off", "on", "unknown"]),
  observer: new Set(["서승희", "김희수", "우혜린", "안채희"]),
};

function validateRecord(record) {
  const required = [
    "record_id",
    "patrol_id",
    "recorded_at",
    "saved_at",
    "observer",
    "room",
    "timetable_status",
    "actual_activity",
    "occupancy_status",
    "exception_reason",
    "lighting_status",
    "hvac_status",
    "computer_status",
    "smart_board_status",
  ];

  for (const key of required) {
    if (typeof record[key] !== "string" || !record[key].trim()) {
      throw new Error(`Invalid or missing field: ${key}`);
    }
  }

  if (!allowed.observer.has(record.observer)) throw new Error("Invalid observer");
  if (!allowed.timetable_status.has(record.timetable_status)) throw new Error("Invalid timetable_status");
  if (!allowed.actual_activity.has(record.actual_activity)) throw new Error("Invalid actual_activity");
  if (!allowed.occupancy_status.has(record.occupancy_status)) throw new Error("Invalid occupancy_status");
  if (!allowed.exception_reason.has(record.exception_reason)) throw new Error("Invalid exception_reason");
  if (!allowed.lighting_status.has(record.lighting_status)) throw new Error("Invalid lighting_status");
  if (!allowed.device_status.has(record.hvac_status)) throw new Error("Invalid hvac_status");
  if (!allowed.device_status.has(record.computer_status)) throw new Error("Invalid computer_status");
  if (!allowed.device_status.has(record.smart_board_status)) throw new Error("Invalid smart_board_status");

  if ((record.note || "").length > 500) throw new Error("note is too long");
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const records = Array.isArray(request.body?.records) ? request.body.records : [request.body || {}];
    if (records.length !== 3) {
      return response.status(400).json({ ok: false, error: "Expected exactly 3 records" });
    }
    const patrolId = records[0].patrol_id;
    if (!records.every((r) => r.patrol_id === patrolId)) {
      return response.status(400).json({ ok: false, error: "patrol_id mismatch" });
    }
    const roomSet = new Set(records.map((r) => r.room));
    if (roomSet.size !== 3 || !["365", "367", "369"].every((r) => roomSet.has(r))) {
      return response.status(400).json({ ok: false, error: "Invalid room set" });
    }
    records.forEach(validateRecord);
    await appendInspections(records);
    return response.status(200).json({ ok: true });
  } catch (error) {
    return response.status(400).json({ ok: false, error: error.message });
  }
};
