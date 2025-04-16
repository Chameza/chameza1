document.addEventListener("DOMContentLoaded", function () {
    // Elements
    const popupForm = document.getElementById("popupForm");
    const closeBtn = document.getElementById("closeFormBtn");
    const cancelPopupBtn = document.getElementById("cancelPopupBtn"); // Optional button
    const inquiryForm = document.getElementById("inquiryForm");
    const formContent = document.getElementById("formContent");
    const thankYouMessage = document.getElementById("thankYouMessage");

    // Show popup automatically after 10 seconds
    setTimeout(function () {
        if (popupForm) {
            popupForm.style.display = "block";
        }
    }, 10000); // 10 seconds

    // Close popup on close button click
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            popupForm.style.display = "none";
        });
    }

    // Close popup if user clicks outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target === popupForm) {
            popupForm.style.display = "none";
        }
    });

    // Optional cancel button inside popup
    if (cancelPopupBtn) {
        cancelPopupBtn.addEventListener("click", function () {
            popupForm.style.display = "none";
        });
    }

    // Form submission
    if (inquiryForm) {
        inquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(inquiryForm);

            fetch("submit_form.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                // Hide form, show thank-you message
                if (formContent) formContent.style.display = "none";
                if (thankYouMessage) thankYouMessage.style.display = "block";
            })
            .catch(error => {
                console.error("Error submitting form:", error);
            });
        });
    }
});
