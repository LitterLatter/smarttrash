// ================= CONFIG =================
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyCbhiJIZC0-mZYOAYGwA6mEmkIiE4U5FseCrhnpApIOEFwX_QZHkwKv5vFQ8KNH3I/exec";
// ==========================================


// ===== SUBMIT FORM =====
document.getElementById("reportForm").addEventListener("submit", function(e) {

  e.preventDefault();

  const issueType = document.getElementById("issueType").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;
  const fileInput = document.getElementById("photo");

  const formData = new FormData();

  formData.append("issueType", issueType);
  formData.append("location", location);
  formData.append("description", description);


  function sendData() {

    fetch(SCRIPT_URL, {
      method: "POST",
      body: formData
    })

    .then(response => response.json())

    .then(data => {

      if (data.status === "success") {

        alert("✅ Report berjaya dihantar!");

        document.getElementById("reportForm").reset();

      } else {

        alert("❌ Error: " + data.message);

      }

    })

    .catch(error => {

      console.error(error);

      alert("❌ Error menghantar report");

    });

  }


  // ===== CHECK GAMBAR =====
  if (fileInput.files.length > 0) {

    const reader = new FileReader();

    reader.onload = function(event) {

      formData.append("photo", event.target.result);

      sendData();

    };

    reader.readAsDataURL(fileInput.files[0]);

  }

  else {

    sendData();

  }

});
