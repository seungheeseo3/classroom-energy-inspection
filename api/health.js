const { verifySheetConnection } = require("./_sheets");

module.exports = async function handler(request, response) {
  try {
    await verifySheetConnection();
    return response.status(200).json({ ok: true });
  } catch (error) {
    return response.status(503).json({ ok: false, error: error.message });
  }
};
