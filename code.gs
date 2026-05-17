function doPost(e) {
  try {
    // Make sure to replace this ID with your actual Spreadsheet ID if it changes
    const sheet = SpreadsheetApp.openById("1hHQC0DUurdvCEBdQsyE8CmN65UkqmNypyV7urBJJIae9AHIdR37DRVdz").getSheetByName("Sheet1");

    const data = JSON.parse(e.postData.contents);

    // Mapping relevant fields
    const date = data.date || new Date().toLocaleString();
    const name = data.name || "";
    const phone = data.phone || "";
    const email = data.email || "";
    const message = data.message || "";
    // Using 'service' field since our form sends that
    const service = data.service || data.update || "";

    sheet.appendRow([date, name, phone, email, message, service]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
