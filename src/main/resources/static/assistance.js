/*share Modal script*/
 
  function openShareModal() {
    document.getElementById("shareModal").style.display = "block";
  }

  function closeShareModal() {
    document.getElementById("shareModal").style.display = "none";
  }

  function copyLink() {
    const linkInput = document.getElementById("shareUrl");
    linkInput.select();
    linkInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Link copied!");
  }

  function openShare(platform) {
    const url = encodeURIComponent(document.getElementById("shareUrl").value);
    let shareUrl = "#";

    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'instagram':
        alert("Instagram does not support direct web sharing.");
        return;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }

    window.open(shareUrl, "_blank");
  }

  // Close modal if clicking outside it
  window.onclick = function(event) {
    const modal = document.getElementById("shareModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };



 

/* Enroll Modal script*/

  function openEnrollModal(courseTitle) {
    document.getElementById("courseName").textContent = courseTitle;
    document.getElementById("enrollModal").style.display = "block";
  }

  function closeEnrollModal() {
    document.getElementById("enrollModal").style.display = "none";
  }

  function submitEnrollForm() {
    const name = document.getElementById("enrollName").value.trim();
    const mobile = document.getElementById("enrollMobile").value.trim();
    const email = document.getElementById("enrollEmail").value.trim();
    const course = document.getElementById("courseName").textContent;

    if (name === "" || mobile === "" || email === "") {
      alert("Please fill in all fields.");
    } else {
      alert(
        "Enrollment submitted successfully!\n\n" +
        "Course: " + course + "\n" +
        "Name: " + name + "\n" +
        "Mobile: " + mobile + "\n" +
        "Email: " + email
      );
      closeEnrollModal();
    }
  }

  // Close modal if clicking outside
  window.addEventListener("click", function(event) {
    const enrollModal = document.getElementById("enrollModal");
    if (event.target === enrollModal) {
      enrollModal.style.display = "none";
    }
  });

  function showTab(tabId) {
      document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
      document.getElementById(tabId).classList.add('active');
    }

    function showAllCourses() {
      document.querySelector('.extra-courses').style.display = 'flex';
      document.querySelector('.explore-btn').style.display = 'none';
    }

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
      alert("Enrollment submitted successfully!\nName: " + name + "\nMobile: " + mobile + "\nEmail: " + email);
      closeEnrollModal();
    }
  }