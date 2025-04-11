// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = 'none';
    }
});

// Add animation to investment cards
const investmentCards = document.querySelectorAll('.investment-card');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

investmentCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// Loan Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('loanPopup');
    const closeBtn = document.getElementById('closePopup');
    
    // Show popup when page loads
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 1000);
    
    // Close popup when close button is clicked
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
    
    // Close popup when clicking outside the content
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.style.display === 'flex') {
            popup.style.display = 'none';
        }
    });
});

// Profile Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Profile Menu Navigation
    const menuItems = document.querySelectorAll('.profile-menu li');
    const sections = document.querySelectorAll('.profile-section');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items and sections
            menuItems.forEach(i => i.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked menu item
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.querySelector('a').getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // Profile Picture Upload
    const editPictureBtn = document.querySelector('.edit-picture');
    if (editPictureBtn) {
        editPictureBtn.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.click();
            
            input.addEventListener('change', function() {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        document.querySelector('.profile-picture img').src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        });
    }
    
    // Form Submission
    const profileForm = document.querySelector('.profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, this would send the form data to the server
            alert('Profile updated successfully!');
        });
    }
    
    // Document Upload
    const uploadDocBtn = document.querySelector('.documents-list + .btn-primary');
    if (uploadDocBtn) {
        uploadDocBtn.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.pdf,.doc,.docx';
            input.click();
            
            input.addEventListener('change', function() {
                const file = this.files[0];
                if (file) {
                    // In a real application, this would upload the file to the server
                    alert('Document uploaded successfully!');
                }
            });
        });
    }
}); 

// Example function to fetch real-time prices
async function fetchPrices() {
    // Replace with your API endpoint
    const response = await fetch('YOUR_API_ENDPOINT');
    const data = await response.json();

    // Update the prices in the HTML
    document.getElementById('btc-price').innerText = `BTC: $${data.btc.price} ▲ ${data.btc.change}%`;
    document.getElementById('eth-price').innerText = `ETH: $${data.eth.price} ▲ ${data.eth.change}%`;
    document.getElementById('gold-price').innerText = `Gold: $${data.gold.price} ▼ ${data.gold.change}%`;
    document.getElementById('aapl-price').innerText = `AAPL: $${data.aapl.price} ▲ ${data.aapl.change}%`;
    document.getElementById('rei-price').innerText = `Real Estate Index: $${data.rei.price} ▲ ${data.rei.change}%`;
}

// Call the function to fetch prices
fetchPrices();