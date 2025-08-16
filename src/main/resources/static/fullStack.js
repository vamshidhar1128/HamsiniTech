/*All courses*/

const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const originalCards = Array.from(track.children);
const visibleCards = 4;

// Clone last 4 and prepend to start
originalCards.slice(-visibleCards).forEach(card => {
  const clone = card.cloneNode(true);
  track.insertBefore(clone, track.firstChild);
});

// Clone first 4 and append to end
originalCards.slice(0, visibleCards).forEach(card => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});

// All cards after cloning
const allCards = track.querySelectorAll(".course-card");
const cardWidth = allCards[0].offsetWidth + 20;

let currentIndex = visibleCards; // Start at real first slide

function updatePosition() {
  track.style.transition = "transform 0.4s ease-in-out";
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Initial shift
updatePosition();

// Right Arrow Click
nextBtn.addEventListener("click", () => {
  if (currentIndex >= allCards.length - visibleCards) return;
  currentIndex++;
  updatePosition();
});

// Left Arrow Click
prevBtn.addEventListener("click", () => {
  if (currentIndex <= 0) return;
  currentIndex--;
  updatePosition();
});

// Loop logic
track.addEventListener("transitionend", () => {
  // Jump to real first if passed fake last
  if (currentIndex === allCards.length - visibleCards) {
    track.style.transition = "none";
    currentIndex = visibleCards;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
  // Jump to real last if passed fake first
  if (currentIndex === 0) {
    track.style.transition = "none";
    currentIndex = allCards.length - visibleCards * 2;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});
    

        // WhatsApp Functions
        function openWhatsApp() {
            const phoneNumber = "+91 949455742";
            const message = "Hello Hamsini Tech, I'm interested in your courses. Can you please provide more information?";
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        // Modal Functions
        function openEnrollModal(courseTitle) {
            document.getElementById('courseName').value = courseTitle;
            document.getElementById('enrollModal').style.display = 'flex';
        }

        function closeEnrollModal() {
            document.getElementById('enrollModal').style.display = 'none';
        }

        function openShareModal() {
            document.getElementById('shareModal').style.display = 'flex';
        }

        function closeShareModal() {
            document.getElementById('shareModal').style.display = 'none';
        }

    function submitEnrollForm() {
    const name = document.getElementById('enrollName').value.trim();
    const mobile = document.getElementById('enrollMobile').value.trim();
    const email = document.getElementById('enrollEmail').value.trim();
    const course = document.getElementById('courseName').value;

    if (!name || !mobile || !email) {
        alert('Please fill in all required fields.');
        return;
    }

    // ✅ Send data to Spring Boot backend (same server)
    const data = {
        fullName: name,
        mobile: mobile,
        email: email,
        course: course,
        batch: batch
    };

    fetch("/api/enroll", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(response => {
        console.log("Server Response:", response);
    })
    .catch(error => {
        console.error("Error sending to backend:", error);
    });

    // ✅ Your existing WhatsApp message logic
    const whatsappMessage = `New Enrollment Request:\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nCourse: ${course}`;
    const whatsappUrl = `https://wa.me/919494557422?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    alert(`Thank you for your interest!\n\nWe've received your application for ${course}. Our counselor will contact you shortly at ${mobile}.`);
    closeEnrollModal();

    // Reset form
    document.getElementById('enrollName').value = '';
    document.getElementById('enrollMobile').value = '';
    document.getElementById('enrollEmail').value = '';
  }

        function copyLink() {
            const linkInput = document.getElementById('shareUrl');
            linkInput.select();
            linkInput.setSelectionRange(0, 99999);
            document.execCommand('copy');

            // Show copied notification
            const originalText = linkInput.nextElementSibling.textContent;
            linkInput.nextElementSibling.innerHTML = '<i class="fas fa-check"></i> Copied!';

            setTimeout(() => {
                linkInput.nextElementSibling.textContent = originalText;
            }, 2000);
        }

        function openShare(platform) {
            const url = encodeURIComponent(document.getElementById('shareUrl').value);
            let shareUrl = '';
            let windowSize = 'width=600,height=400';

            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/profile.php?id=61578204434186/`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=Check out this course from Hamsini Tech Solutions`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'whatsapp':
                    const whatsappMessage = `Check out this course from Hamsini Tech Solutions: ${url}`;
                    shareUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
                    windowSize = '';
                    break;
                case 'instagram':
                    // Instagram doesn't have direct sharing, so we'll open their profile
                    shareUrl = 'https://www.instagram.com/hamsinitech2025/';
                    windowSize = '';
                    break;
            }

            window.open(shareUrl, '_blank', windowSize);
        }

        // Close modals when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === document.getElementById('enrollModal')) {
                closeEnrollModal();
            }
            if (event.target === document.getElementById('shareModal')) {
                closeShareModal();
            }
        });

        // Search functionality
        document.querySelector('.search-box input')?.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const courseCards = document.querySelectorAll('.course-card');

            courseCards.forEach(card => {
                const title = card.querySelector('.course-title').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });