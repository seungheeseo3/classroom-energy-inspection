const { google } = require("googleapis");

const columns = [
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

function requiredEnv() {
  const missing = [
    "GOOGLE_SERVICE_ACCOUNT_EMAIL",
    "GOOGLE_PRIVATE_KEY",
    "GOOGLE_SHEET_ID",
  ].filter((key) => !process.env[key]);

  if (missing.length) {
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }
}

function privateKey() {
  return process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
}

function sheetName() {
  return process.env.GOOGLE_SHEET_TAB || "inspection_logs";
}

async function sheetsClient() {
  requiredEnv();
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

async function ensureHeader(sheets) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const range = `${sheetName()}!A1:Z1`;
  const current = await sheets.spreadsheets.values.get({ spreadsheetId, range }).catch(async (error) => {
    if (error.code !== 400) throw error;
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: sheetName() } } }],
      },
    });
    return { data: { values: [] } };
  });

  if (!current.data.values || !current.data.values[0] || !current.data.values[0].length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: { values: [columns] },
    });
    return;
  }

  const header = current.data.values[0];
  const headerMatches = columns.every((column, index) => header[index] === column);
  if (!headerMatches) {
    throw new Error(`Sheet header mismatch in tab "${sheetName()}"`);
  }
}

async function verifySheetConnection() {
  const sheets = await sheetsClient();
  await ensureHeader(sheets);
}

async function appendInspections(records) {
  const sheets = await sheetsClient();
  await ensureHeader(sheets);

  const rows = records.map((record) => columns.map((column) => record[column] ?? ""));
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${sheetName()}!A:Z`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: rows },
  });
}

module.exports = { appendInspections, verifySheetConnection };
