// Simulate login functionality
document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if(email && password) {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert('Please enter both email and password');
    }
});

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});

// Navigation between sections
document.querySelectorAll('.sidebar-menu li').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all menu items
        document.querySelectorAll('.sidebar-menu li').forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        this.classList.add('active');
        
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        // Show the selected section
        document.getElementById(this.getAttribute('data-section')).classList.add('active');
    });
});

// Search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    if(departure && destination && date && time) {
        document.getElementById('searchResults').style.display = 'block';
    } else {
        alert('Please fill in all fields');
    }
});

// Book buttons functionality
document.querySelectorAll('.book-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Trip booked successfully!');
        
        // Switch to upcoming trips tab
        document.querySelectorAll('.sidebar-menu li').forEach(i => i.classList.remove('active'));
        document.querySelector('[data-section="upcomingTrips"]').classList.add('active');
        
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        document.getElementById('upcomingTrips').classList.add('active');
    });
});

// Cancel buttons functionality
document.querySelectorAll('.cancel-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if(confirm('Are you sure you want to cancel this trip?')) {
            this.closest('.trip-card').remove();
            alert('Trip cancelled successfully');
        }
    });
});

// Function to set background image for login
function setLoginBackground(imageUrl) {
    document.querySelector('.login-container').style.backgroundImage = `url(${imageUrl})`;
}

// Set a default background image
setLoginBackground('/api/placeholder/1200/800');

// Demo function to allow changing the background image
function changeBackground() {
    const url = prompt('Enter image URL for background:');
    if(url) {
        setLoginBackground(url);
    }
}

// Add a console message for users to know how to change background
console.log('To change the login background image, run the function: changeBackground()');
