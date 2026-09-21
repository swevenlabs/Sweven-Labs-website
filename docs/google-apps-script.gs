/**
 * ==============================================================================
 * SWEVEN LABS — GOOGLE APPS SCRIPT FORM HANDLER
 * ==============================================================================
 * This script processes incoming project inquiry submissions from the Sweven Labs
 * website contact form and appends them securely to your Google Sheet.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a Google Sheet named "Sweven Labs Inquiries"
 * 2. Set Row 1 headers in exact order:
 *    A1: Timestamp | B1: Name | C1: Email | D1: Phone | E1: Company | 
 *    F1: Project Type | G1: Budget | H1: Timeline | I1: Preferred Contact | J1: Message
 * 3. Open Extensions -> Apps Script
 * 4. Paste this code completely, replacing any default content
 * 5. Click "Deploy" -> "New deployment"
 * 6. Select Type: "Web app"
 * 7. Description: "Sweven Labs Contact Form API v1"
 * 8. Execute as: "Me (your google account)"
 * 9. Who has access: "Anyone"
 * 10. Click "Deploy", copy the Web App URL, and save it in your Vercel or local
 *     environment variable as VITE_GOOGLE_APPS_SCRIPT_URL
 * ==============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for concurrent requests
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();

    // Parse incoming payload
    var data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    // Basic Honeypot Spam Check
    if (data.honeypot && data.honeypot.trim() !== "") {
      // Silently reject spam bot submissions
      return createJsonResponse({
        success: true,
        message: "Submission received"
      });
    }

    // Required Field Validation
    if (!data.fullName || !data.email || !data.message) {
      return createJsonResponse({
        success: false,
        error: "Missing required fields: fullName, email, and message are required."
      });
    }

    // Email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return createJsonResponse({
        success: false,
        error: "Invalid email address format."
      });
    }

    // Server Timestamp (do not trust client clock)
    var timestamp = new Date();
    var formattedDate = Utilities.formatDate(timestamp, doc.getSpreadsheetTimeZone(), "yyyy-MM-dd HH:mm:ss");

    // Extract fields
    var fullName = sanitizeInput(data.fullName);
    var email = sanitizeInput(data.email);
    var phone = sanitizeInput(data.phone || "N/A");
    var company = sanitizeInput(data.company || "N/A");
    var projectType = sanitizeInput(data.projectType || "Unspecified");
    var budgetRange = sanitizeInput(data.budgetRange || "Unspecified");
    var timeline = sanitizeInput(data.timeline || "Flexible");
    var preferredContact = sanitizeInput(data.preferredContact || "Email");
    var message = sanitizeInput(data.message);

    // Append Row to Spreadsheet
    sheet.appendRow([
      formattedDate,
      fullName,
      email,
      phone,
      company,
      projectType,
      budgetRange,
      timeline,
      preferredContact,
      message
    ]);

    return createJsonResponse({
      success: true,
      message: "Thank you! Your vision has been received by Sweven Labs."
    });

  } catch (error) {
    return createJsonResponse({
      success: false,
      error: "Server processing error: " + error.toString()
    });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  // Simple health check endpoint for testing Web App deployment
  return createJsonResponse({
    status: "active",
    service: "Sweven Labs Contact Form Endpoint",
    time: new Date().toISOString()
  });
}

function sanitizeInput(str) {
  if (typeof str !== "string") return str;
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

function createJsonResponse(responseObject) {
  return ContentService
    .createTextOutput(JSON.stringify(responseObject))
    .setMimeType(ContentService.MimeType.JSON);
}
