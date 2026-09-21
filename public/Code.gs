/**
 * Sweven Labs — Google Apps Script for Direct Google Sheets Contact Intake
 * 
 * Instructions to Deploy:
 * 1. Create a new Google Sheet at https://sheets.new
 * 2. Add header columns in Row 1:
 *    Timestamp | Name | Email | Company | Phone | Project Type | Budget | Timeline | Message | Preferred Contact
 * 3. Click Extensions > Apps Script in the Google Sheet menu.
 * 4. Paste this complete Code.gs script into the Apps Script editor.
 * 5. Click Deploy > New deployment.
 * 6. Select Type: "Web app".
 * 7. Set Description: "Sweven Labs Contact Form Endpoint".
 * 8. Set Execute as: "Me".
 * 9. Set Who has access: "Anyone" (Critical so the website can post without login).
 * 10. Click Deploy, authorize permissions, and copy the Web App URL.
 * 11. Paste your Web App URL into src/components/contact/Contact.tsx as GOOGLE_SHEETS_WEB_APP_URL!
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    // 1. Get Google Sheet safely (with fallback to explicit Sheet ID)
    var doc = null;
    try {
      doc = SpreadsheetApp.getActiveSpreadsheet();
    } catch (docErr) {}

    if (!doc) {
      // Fallback to explicit Google Sheet ID from URL
      doc = SpreadsheetApp.openById('1uNDbaHtUA8AUiVjowjz3DE2mz0eXFKEs-Q86UZd-u4M');
    }

    var sheet = doc.getActiveSheet();
    if (!sheet) {
      sheet = doc.getSheets()[0];
    }

    // 2. Parse payload (JSON or Form parameters)
    var data = {};

    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = parseQueryString(e.postData.contents);
      }
    }

    if ((!data || Object.keys(data).length === 0) && e && e.parameter) {
      data = e.parameter;
    }

    // 3. Append new inquiry row
    var nextRow = sheet.getLastRow() + 1;
    var row = [
      new Date(),
      data.fullName || data.name || '',
      data.email || '',
      data.company || '',
      data.phone || '',
      data.projectType || '',
      data.budgetRange || data.budget || '',
      data.timeline || '',
      data.message || '',
      data.preferredContact || ''
    ];

    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'success': true, 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'success': false, 'result': 'error', 'error': err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'status': 'Sweven Labs Intake Endpoint Active', 'message': 'Endpoint is live and ready for POST requests.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function parseQueryString(str) {
  var obj = {};
  if (!str) return obj;
  var pairs = str.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    if (pair.length === 2) {
      obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
    }
  }
  return obj;
}
