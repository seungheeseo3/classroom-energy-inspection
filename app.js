const rooms = ["365", "367", "369"];

const schedule = [
  { room: "369", day: "mon", start: "09:00", end: "10:15", course: "환경양론" },
  { room: "369", day: "mon", start: "10:30", end: "11:45", course: "공학수학1" },
  { room: "369", day: "mon", start: "13:30", end: "14:45", course: "물리화학적수처리" },
  { room: "369", day: "mon", start: "15:00", end: "16:15", course: "환경설계기초" },
  { room: "369", day: "mon", start: "16:30", end: "19:15", course: "환경논문연구" },
  { room: "369", day: "tue", start: "10:30", end: "11:45", course: "ESG규제리스크관리" },
  { room: "369", day: "tue", start: "16:30", end: "21:30", course: "신재생에너지실험및설계(황선진)" },
  { room: "369", day: "wed", start: "10:30", end: "11:45", course: "공학수학1" },
  { room: "369", day: "wed", start: "13:30", end: "14:45", course: "물리화학적수처리" },
  { room: "369", day: "wed", start: "15:00", end: "16:15", course: "환경설계기초" },
  { room: "369", day: "wed", start: "16:30", end: "21:30", course: "탄소중립환경기술" },
  { room: "369", day: "thu", start: "09:00", end: "10:15", course: "환경양론" },
  { room: "369", day: "thu", start: "10:30", end: "11:45", course: "ESG규제리스크관리" },
  { room: "369", day: "thu", start: "15:00", end: "20:00", course: "신재생에너지실험및설계(민부기)" },
  { room: "369", day: "fri", start: "15:00", end: "19:15", course: "표현기법1" },
  { room: "369", day: "sat", start: "09:00", end: "11:45", course: "독립심화학습1(기계공학과)" },
  { room: "367", day: "mon", start: "10:30", end: "11:45", course: "데이터사이언스" },
  { room: "367", day: "mon", start: "12:00", end: "13:15", course: "데이터마이닝" },
  { room: "367", day: "mon", start: "13:30", end: "14:45", course: "머신러닝" },
  { room: "367", day: "tue", start: "10:30", end: "11:45", course: "서비스데이터사이언스" },
  { room: "367", day: "tue", start: "16:30", end: "19:15", course: "사회기반시스템디자인1" },
  { room: "367", day: "wed", start: "10:30", end: "11:45", course: "데이터사이언스" },
  { room: "367", day: "wed", start: "12:00", end: "13:15", course: "데이터마이닝" },
  { room: "367", day: "wed", start: "13:30", end: "14:45", course: "머신러닝" },
  { room: "367", day: "thu", start: "10:30", end: "11:45", course: "서비스데이터사이언스" },
  { room: "367", day: "fri", start: "10:30", end: "13:15", course: "창의심화연구1" },
  { room: "367", day: "fri", start: "15:00", end: "19:15", course: "표현기법1" },
  { room: "367", day: "sat", start: "09:00", end: "11:45", course: "독립심화학습1(기계공학과)" },
  { room: "365", day: "mon", start: "09:00", end: "10:15", course: "핵공학개론1" },
  { room: "365", day: "mon", start: "10:30", end: "11:45", course: "원자로이론1" },
  { room: "365", day: "mon", start: "12:00", end: "13:15", course: "보건물리" },
  { room: "365", day: "mon", start: "13:30", end: "14:45", course: "원자및핵물리" },
  { room: "365", day: "mon", start: "15:00", end: "16:15", course: "핵및방사화학" },
  { room: "365", day: "tue", start: "09:00", end: "10:15", course: "유체역학" },
  { room: "365", day: "tue", start: "10:30", end: "11:45", course: "원자로계통공학" },
  { room: "365", day: "tue", start: "12:45", end: "14:45", course: "노심설계" },
  { room: "365", day: "tue", start: "15:00", end: "16:15", course: "일반물리" },
  { room: "365", day: "tue", start: "16:30", end: "18:15", course: "AI로봇공학세미나" },
  { room: "365", day: "wed", start: "09:00", end: "10:15", course: "핵공학개론1" },
  { room: "365", day: "wed", start: "10:30", end: "11:45", course: "원자로이론1" },
  { room: "365", day: "wed", start: "12:00", end: "13:15", course: "보건물리" },
  { room: "365", day: "wed", start: "13:30", end: "14:45", course: "원자및핵물리" },
  { room: "365", day: "wed", start: "15:00", end: "16:15", course: "핵및방사화학" },
  { room: "365", day: "thu", start: "09:00", end: "10:15", course: "유체역학" },
  { room: "365", day: "thu", start: "10:30", end: "11:45", course: "원자로계통공학" },
  { room: "365", day: "thu", start: "12:45", end: "14:45", course: "노심설계" },
  { room: "365", day: "thu", start: "15:00", end: "16:15", course: "일반물리" },
  { room: "365", day: "fri", start: "09:00", end: "13:00", course: "핵공학기초실험" },
  { room: "365", day: "fri", start: "15:00", end: "19:15", course: "표현기법1" },
];

const labels = {
  timetable: { in_class: "수업중", free: "공강", no_schedule: "시간표 없음" },
  actualActivity: {
    lecture: "강의 진행 중",
    not_lecture: "강의 아님",
    event: "시험/행사/회의",
    unknown: "확인 불가",
  },
  occupancy: {
    empty: "사람 없음",
    one_to_two: "1-2명",
    three_or_more: "3명 이상",
    unknown: "확인 불가",
  },
  exceptionReason: {
    early_end: "조기 종료",
    cancelled: "휴강",
    personal_use: "개인적 이용",
    unknown: "확인 불가",
    none: "",
  },
  devices: {
    off: "꺼짐",
    half_on: "0.5 켜짐",
    on: "켜짐",
    unknown: "판단 어려움",
  },
};

const observers = ["서승희", "김희수", "우혜린", "안채희"];

const csvColumns = [
  "record_id",
  "patrol_id",
  "recorded_at",
  "saved_at",
  "observer",
  "room",
  "timetable_status",
  "timetable_status_label",
  "scheduled_course_name",
  "actual_activity",
  "actual_activity_label",
  "occupancy_status",
  "occupancy_status_label",
  "exception_reason",
  "exception_reason_label",
  "lighting_status",
  "lighting_status_label",
  "lighting_factor",
  "hvac_status",
  "hvac_status_label",
  "computer_status",
  "computer_status_label",
  "smart_board_status",
  "smart_board_status_label",
  "google_sheet_status",
  "note",
];

const state = {
  selectedRoom: null,
  selectedAt: null,
  selectedSchedule: null,
  patrolId: localStorage.getItem("currentPatrolId") || "",
  sheetAvailable: false,
  values: {},
  logs: JSON.parse(localStorage.getItem("inspectionLogs") || "[]"),
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatDateTime(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function formatShortTime(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function dayKey(date) {
  return ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][date.getDay()];
}

function minutesOfDay(timeText) {
  const [hour, minute] = timeText.split(":").map(Number);
  return hour * 60 + minute;
}

function currentSchedule(room, date = new Date()) {
  const nowMinutes = date.getHours() * 60 + date.getMinutes();
  const day = dayKey(date);
  const entries = schedule.filter((item) => item.room === room && item.day === day);
  const matched = entries.find((item) => {
    return nowMinutes >= minutesOfDay(item.start) && nowMinutes < minutesOfDay(item.end);
  });

  if (matched) {
    return { status: "in_class", course: matched.course, entry: matched };
  }
  return { status: entries.length ? "free" : "no_schedule", course: "", entry: null };
}

function createPatrolId() {
  const now = new Date();
  return `patrol-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

function updateClock() {
  $("#clock").textContent = formatShortTime(new Date());
  if (state.selectedRoom) {
    renderScheduleInfo();
  }
}

function renderPatrol() {
  $("#patrolId").textContent = state.patrolId || "아직 시작 전";
}

function renderSheetSettings() {
  const pendingCount = uploadablePatrolIds().length;
  if (!state.sheetAvailable) {
    $("#sheetStatus").textContent = pendingCount
      ? `로컬 저장 · 미전송 순회 ${pendingCount}회`
      : "로컬 저장";
  } else if (pendingCount) {
    $("#sheetStatus").textContent = `자동 저장 연결됨 · 미전송 순회 ${pendingCount}회`;
  } else {
    $("#sheetStatus").textContent = "자동 저장 연결됨";
  }
}

async function checkSheetConnection() {
  try {
    const response = await fetch("/api/health", { method: "GET" });
    state.sheetAvailable = response.ok;
  } catch (error) {
    state.sheetAvailable = false;
  }
  renderSheetSettings();
}

function renderScheduleInfo() {
  const selectedAt = state.selectedAt || new Date();
  $("#recordedAt").textContent = formatDateTime(selectedAt);

  if (!state.selectedRoom) {
    $("#selectedRoom").textContent = "강의실을 선택하세요";
    $("#timetableStatus").textContent = "-";
    $("#courseName").textContent = "-";
    $("#scheduleBadge").textContent = "대기";
    $("#scheduleBadge").className = "badge";
    return;
  }

  state.selectedSchedule = state.selectedSchedule || currentSchedule(state.selectedRoom, selectedAt);
  const status = state.selectedSchedule.status;
  $("#selectedRoom").textContent = `${state.selectedRoom}호`;
  $("#timetableStatus").textContent = labels.timetable[status];
  $("#courseName").textContent = state.selectedSchedule.course || "-";
  $("#scheduleBadge").textContent = labels.timetable[status];
  $("#scheduleBadge").className = `badge ${status === "in_class" ? "in-class" : "free"}`;
  renderExceptionVisibility();
}

function setValue(group, value) {
  state.values[group] = value;
  $$(`[data-group="${group}"] button`).forEach((button) => {
    button.classList.toggle("active", button.dataset.value === value);
  });
  renderExceptionVisibility();
}

function shouldAskException() {
  const timetable = state.selectedSchedule?.status;
  const activity = state.values.actualActivity;
  const occupancy = state.values.occupancy;

  if (!timetable || !activity || !occupancy) return false;
  if (timetable === "in_class" && activity !== "lecture") return true;
  if (timetable !== "in_class" && (activity === "lecture" || occupancy !== "empty")) return true;
  return false;
}

function renderExceptionVisibility() {
  const block = $("#exceptionBlock");
  const visible = shouldAskException();
  block.classList.toggle("visible", visible);
  if (!visible) {
    state.values.exceptionReason = "none";
    $$('[data-group="exceptionReason"] button').forEach((button) => button.classList.remove("active"));
  }
}

function resetInspection(keepRoom = true) {
  const savedObserver = state.values.observer;
  state.values = {};
  if (savedObserver) state.values.observer = savedObserver;
  $$(".segmented button").forEach((button) => {
    if (button.parentElement.dataset.group === "observer") return;
    button.classList.remove("active");
  });
  $("#note").value = "";
  if (!keepRoom) {
    state.selectedRoom = null;
    state.selectedAt = null;
    state.selectedSchedule = null;
    $$(".room-card").forEach((button) => button.classList.remove("active"));
  } else if (state.selectedRoom) {
    state.selectedAt = new Date();
    state.selectedSchedule = currentSchedule(state.selectedRoom, state.selectedAt);
  }
  renderScheduleInfo();
}

function completedRoomsForCurrentPatrol() {
  if (!state.patrolId) return new Set();
  return new Set(state.logs.filter((log) => log.patrol_id === state.patrolId).map((log) => log.room));
}

function latestRecordsForPatrol(patrolId) {
  const byRoom = new Map();
  state.logs.forEach((log) => {
    if (log.patrol_id === patrolId && rooms.includes(log.room) && !byRoom.has(log.room)) {
      byRoom.set(log.room, log);
    }
  });
  return byRoom;
}

function completeRecordsForPatrol(patrolId) {
  const byRoom = latestRecordsForPatrol(patrolId);
  if (byRoom.size !== rooms.length) return [];
  return rooms.map((room) => byRoom.get(room));
}

function uploadablePatrolIds() {
  const patrolIds = [...new Set(state.logs.map((log) => log.patrol_id))];
  return patrolIds.filter((patrolId) => {
    const records = completeRecordsForPatrol(patrolId);
    if (!records.length) return false;
    return records.some((log) =>
      ["pending", "local_only", "not_connected", "waiting"].includes(log.google_sheet_status),
    );
  });
}

function renderRooms() {
  const doneRooms = completedRoomsForCurrentPatrol();
  rooms.forEach((room) => {
    const card = $(`.room-card[data-room="${room}"]`);
    card.classList.toggle("active", state.selectedRoom === room);
    card.classList.toggle("done", doneRooms.has(room));
    $(`#room${room}Status`).textContent = doneRooms.has(room) ? "기록 완료" : "미기록";
  });
}

function missingFields() {
  const required = ["actualActivity", "occupancy", "lighting", "hvac", "computer", "smartBoard"];
  if (shouldAskException()) required.push("exceptionReason");
  return required.filter((key) => !state.values[key] || state.values[key] === "none");
}

async function saveLog(event) {
  event.preventDefault();
  if (!state.patrolId) {
    alert("먼저 새 순회를 시작해 주세요.");
    return;
  }
  if (!observers.includes(state.values.observer)) {
    alert("기록자를 선택해 주세요.");
    return;
  }
  if (!state.selectedRoom) {
    alert("강의실을 선택해 주세요.");
    return;
  }
  const alreadyLogged = state.logs.some(
    (log) => log.patrol_id === state.patrolId && log.room === state.selectedRoom,
  );
  if (alreadyLogged && !confirm(`${state.selectedRoom}호는 현재 순회에서 이미 기록되었습니다. 다시 저장할까요?`)) {
    return;
  }
  const missing = missingFields();
  if (missing.length) {
    alert("필수 항목을 모두 선택해 주세요.");
    return;
  }

  const recordedAt = state.selectedAt || new Date();
  const savedAt = new Date();
  const scheduleInfo = state.selectedSchedule || currentSchedule(state.selectedRoom, recordedAt);
  const record = {
    record_id: crypto.randomUUID(),
    patrol_id: state.patrolId,
    recorded_at: formatDateTime(recordedAt),
    saved_at: formatDateTime(savedAt),
    observer: state.values.observer,
    room: state.selectedRoom,
    timetable_status: scheduleInfo.status,
    timetable_status_label: labels.timetable[scheduleInfo.status],
    scheduled_course_name: scheduleInfo.course,
    actual_activity: state.values.actualActivity,
    actual_activity_label: labels.actualActivity[state.values.actualActivity],
    occupancy_status: state.values.occupancy,
    occupancy_status_label: labels.occupancy[state.values.occupancy],
    exception_reason: shouldAskException() ? state.values.exceptionReason : "none",
    exception_reason_label: shouldAskException()
      ? labels.exceptionReason[state.values.exceptionReason]
      : "",
    lighting_status: state.values.lighting,
    lighting_status_label: labels.devices[state.values.lighting],
    lighting_factor: state.values.lighting === "on" ? 1 : state.values.lighting === "half_on" ? 0.5 : 0,
    hvac_status: state.values.hvac,
    hvac_status_label: labels.devices[state.values.hvac],
    computer_status: state.values.computer,
    computer_status_label: labels.devices[state.values.computer],
    smart_board_status: state.values.smartBoard,
    smart_board_status_label: labels.devices[state.values.smartBoard],
    google_sheet_status: "waiting",
    note: $("#note").value.trim(),
  };

  state.logs.unshift(record);
  localStorage.setItem("inspectionLogs", JSON.stringify(state.logs));
  await uploadPatrolIfComplete(state.patrolId);
  renderLogs();
  renderRooms();
  renderSheetSettings();
  resetInspection(true);
}

async function uploadPatrolIfComplete(patrolId) {
  const records = completeRecordsForPatrol(patrolId);
  if (!records.length) return false;
  if (records.every((record) => record.google_sheet_status === "sent")) return true;

  records.forEach((record) => {
    record.google_sheet_status = state.sheetAvailable ? "pending" : "local_only";
  });
  localStorage.setItem("inspectionLogs", JSON.stringify(state.logs));

  if (!state.sheetAvailable) return false;
  return sendRecordsToSheet(records);
}

async function sendRecordsToSheet(records) {
  if (!state.sheetAvailable) return false;

  try {
    const response = await fetch("/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        records: records.map((record) => ({ ...record, google_sheet_status: "sent" })),
      }),
    });
    if (!response.ok) throw new Error("Google Sheets 저장 실패");
    records.forEach((record) => {
      record.google_sheet_status = "sent";
    });
  } catch (error) {
    records.forEach((record) => {
      record.google_sheet_status = "pending";
    });
    localStorage.setItem("inspectionLogs", JSON.stringify(state.logs));
    return false;
  }

  localStorage.setItem("inspectionLogs", JSON.stringify(state.logs));
  return true;
}

async function syncPendingRecords() {
  await checkSheetConnection();
  if (!state.sheetAvailable) {
    alert("Google Sheets 자동 저장 연결을 확인할 수 없습니다. Vercel 배포 환경변수를 확인해 주세요.");
    return;
  }

  const patrolIds = uploadablePatrolIds();
  if (!patrolIds.length) {
    alert("미전송 완료 순회가 없습니다.");
    return;
  }

  for (const patrolId of patrolIds) {
    await uploadPatrolIfComplete(patrolId);
  }
  renderLogs();
  renderSheetSettings();
  alert("미전송 순회 전송을 시도했습니다.");
}

function renderLogs() {
  const table = $("#logTable");
  if (!state.logs.length) {
    table.innerHTML = '<tr><td class="empty-row" colspan="10">아직 저장된 기록이 없습니다.</td></tr>';
    return;
  }

  table.innerHTML = state.logs
    .slice(0, 12)
    .map(
      (log) => `
        <tr>
          <td>${log.recorded_at.slice(11, 16)}</td>
          <td>${log.room}</td>
          <td>${log.timetable_status_label}${log.scheduled_course_name ? `<br>${log.scheduled_course_name}` : ""}</td>
          <td>${log.actual_activity_label}</td>
          <td>${log.occupancy_status_label}</td>
          <td>${log.lighting_status_label}</td>
          <td>${log.hvac_status_label}</td>
          <td>${log.computer_status_label}</td>
          <td>${log.smart_board_status_label}</td>
          <td>${sheetStatusLabel(log.google_sheet_status)}</td>
        </tr>
      `,
    )
    .join("");
}

function sheetStatusLabel(status) {
  if (status === "sent") return "전송";
  if (status === "pending") return "미전송";
  if (status === "local_only") return "로컬";
  if (status === "waiting") return "순회 대기";
  return "연결 전";
}

function csvEscape(value) {
  const text = value == null ? "" : String(value);
  return `"${text.replaceAll('"', '""')}"`;
}

function buildCsv() {
  const csv = [
    csvColumns.join(","),
    ...state.logs
      .slice()
      .reverse()
      .map((log) => csvColumns.map((column) => csvEscape(log[column])).join(",")),
  ].join("\n");

  return csv;
}

function showCsvOutput(csv) {
  $("#exportPanel").hidden = false;
  $("#csvOutput").value = csv;
  $("#exportPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function exportCsv() {
  if (!state.logs.length) {
    alert("다운로드할 기록이 없습니다.");
    return;
  }

  const csv = buildCsv();
  showCsvOutput(csv);
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.download = `classroom-energy-inspections-${Date.now()}.csv`;
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    link.remove();
    URL.revokeObjectURL(url);
  }, 1000);
}

function bindEvents() {
  $("#startPatrol").addEventListener("click", () => {
    state.patrolId = createPatrolId();
    localStorage.setItem("currentPatrolId", state.patrolId);
    renderPatrol();
    renderRooms();
  });

  $("#exportCsv").addEventListener("click", exportCsv);
  $("#syncPending").addEventListener("click", syncPendingRecords);
  $("#selectCsv").addEventListener("click", () => {
    $("#csvOutput").focus();
    $("#csvOutput").select();
  });
  $("#inspectionForm").addEventListener("submit", saveLog);
  $("#resetForm").addEventListener("click", () => resetInspection(true));
  $("#clearLogs").addEventListener("click", () => {
    const message =
      "저장된 기록을 모두 삭제합니다. CSV 데이터 또는 Google Sheets 전송 여부를 먼저 확인했나요?";
    if (!confirm(message)) return;
    if (!confirm("정말 삭제할까요? 이 브라우저에서는 복구할 수 없습니다.")) return;
    state.logs = [];
    state.patrolId = "";
    localStorage.removeItem("inspectionLogs");
    localStorage.removeItem("currentPatrolId");
    $("#exportPanel").hidden = true;
    $("#csvOutput").value = "";
    renderPatrol();
    renderLogs();
    renderRooms();
    renderSheetSettings();
  });

  $$(".room-card").forEach((button) => {
    button.addEventListener("click", () => {
      const savedObserver = state.values.observer;
      state.selectedRoom = button.dataset.room;
      state.selectedAt = new Date();
      state.selectedSchedule = currentSchedule(state.selectedRoom, state.selectedAt);
      state.values = {};
      if (savedObserver) state.values.observer = savedObserver;
      $$(".segmented button").forEach((item) => {
        if (item.parentElement.dataset.group === "observer") return;
        item.classList.remove("active");
      });
      $("#note").value = "";
      renderScheduleInfo();
      renderRooms();
    });
  });

  $$(".segmented button").forEach((button) => {
    button.addEventListener("click", () => {
      setValue(button.parentElement.dataset.group, button.dataset.value);
    });
  });
}

bindEvents();
renderPatrol();
renderSheetSettings();
checkSheetConnection();
renderRooms();
renderScheduleInfo();
renderLogs();
updateClock();
setInterval(updateClock, 1000);
