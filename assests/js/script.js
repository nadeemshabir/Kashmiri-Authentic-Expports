function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function scrollToContact(product) {
    document.getElementById('productSelect').value = product;
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Notification Modal Functions
function showNotification(type, title, message) {
    const modal = document.getElementById('notificationModal');
    const icon = document.getElementById('notificationIcon');
    const titleEl = document.getElementById('notificationTitle');
    const messageEl = document.getElementById('notificationMessage');

    // Reset classes
    icon.className = 'notification-icon';
    titleEl.className = '';

    // Set type-specific classes
    if (type === 'success') {
        icon.classList.add('success');
        titleEl.classList.add('success-title');
    } else {
        icon.classList.add('error');
        titleEl.classList.add('error-title');
    }

    // Set content
    titleEl.textContent = title;
    messageEl.textContent = message;

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeNotification() {
    const modal = document.getElementById('notificationModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Close modal on background click
document.getElementById('notificationModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeNotification();
    }
});

// Handle form submission
document.getElementById('inquiryForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        phone: this.querySelector('input[type="tel"]').value,
        productInterest: document.getElementById('productSelect').value,
        message: this.querySelector('textarea').value
    };

    try {
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.innerText;
        button.innerText = 'Sending...';
        button.disabled = true;

        const response = await fetch('https://kashmiri-authentic-exports-production.up.railway.app/api/inquiry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            showNotification(
                'success',
                'Inquiry Sent Successfully!',
                'Thank you for your interest. We will get back to you within 24 hours.'
            );
            this.reset();
        } else {
            showNotification(
                'error',
                'Submission Failed',
                result.message || 'Something went wrong. Please try again.'
            );
        }

        button.innerText = originalText;
        button.disabled = false;

    } catch (error) {
        console.error('Error:', error);

        let errorMessage = 'Failed to send inquiry. Please check your connection.';
        if (error.message.includes('Failed to fetch')) {
            errorMessage = 'Cannot connect to server. Please make sure the backend is running.';
        }

        showNotification(
            'error',
            'Connection Error',
            errorMessage
        );

        const button = this.querySelector('button[type="submit"]');
        button.innerText = 'Send Inquiry';
        button.disabled = false;
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
        }
    });
});