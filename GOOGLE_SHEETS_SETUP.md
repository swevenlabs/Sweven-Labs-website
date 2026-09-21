# Sweven Labs — Connecting Google Sheets to Contact Form

The Sweven Labs contact intake form can send incoming work inquiries directly into a **Google Sheet** in real-time using Google Apps Script.

---

## Step-by-Step Guide: Linking Google Sheets

### Step 1: Create your Google Sheet
1. Open [sheets.new](https://sheets.new) in your browser.
2. Name the sheet **Sweven Labs Work Enquiries**.
3. In **Row 1**, enter the following headers:
   `Timestamp` | `Name` | `Email` | `Company` | `Phone` | `Project Type` | `Budget Range` | `Timeline` | `Message` | `Preferred Contact`

---

### Step 2: Open Google Apps Script
1. In your Google Sheet menu, click **Extensions** $\rightarrow$ **Apps Script**.
2. Clear any existing code in `Code.gs`.
3. Copy and paste the script below (also located in `public/Code.gs` in this repository):

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();
    var data = JSON.parse(e.postData.contents);

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
      .createTextOutput(JSON.stringify({ 'success': false, 'error': err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'status': 'Sweven Labs Google Sheets Intake Active' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

### Step 3: Deploy as Web App
1. At the top right of the Apps Script editor, click **Deploy** $\rightarrow$ **New deployment**.
2. Click the gear icon (**Select type**) and select **Web app**.
3. Fill in the deployment details:
   - **Description**: `Sweven Labs Contact Intake`
   - **Execute as**: `Me (your google email)`
   - **Who has access**: `Anyone` *(Crucial: This allows the website form to submit without requiring users to sign in)*
4. Click **Deploy**.
5. Grant permissions when prompted (*Advanced $\rightarrow$ Go to project (unsafe) $\rightarrow$ Allow*).
6. Copy the generated **Web App URL** (looks like `https://script.google.com/macros/s/.../exec`).

---

### Step 4: Add the Web App URL to your Application
Define your URL as `VITE_GOOGLE_APPS_SCRIPT_URL` in `.env`:
```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Whenever a client submits a project inquiry on the website, it will immediately appear as a new row in your Google Sheet!

