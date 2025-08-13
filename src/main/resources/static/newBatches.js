function openForm() {
      document.getElementById("formModal").style.display = "block";
    }

    function closeForm() {
      document.getElementById("formModal").style.display = "none";
    }

    window.onclick = function(event) {
      const modal = document.getElementById("formModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
     function submitEnrollForm() {
    var name = document.getElementById("enrollName").value.trim();
    var mobile = document.getElementById("enrollMobile").value.trim();
    var email = document.getElementById("enrollEmail").value.trim();

    if (name === "" || mobile === "" || email === "") {
      alert("Please fill in all fields.");
    } else {
      alert(" Registration successfully!");
      closeEnrollModal();
    }
  }