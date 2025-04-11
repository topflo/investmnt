// User Growth Chart
const userGrowthCtx = document.getElementById('userGrowthChart').getContext('2d');
const userGrowthChart = new Chart(userGrowthCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'New Users',
            data: [100, 150, 200, 250, 300, 350],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Investment Distribution Chart
const investmentDistributionCtx = document.getElementById('investmentDistributionChart').getContext('2d');
const investmentDistributionChart = new Chart(investmentDistributionCtx, {
    type: 'doughnut',
    data: {
        labels: ['Crypto', 'Stocks', 'Real Estate', 'Gold'],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: [
                '#3498db',
                '#2ecc71',
                '#e74c3c',
                '#f1c40f'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Revenue Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Revenue',
            data: [50000, 60000, 70000, 80000, 90000, 100000],
            backgroundColor: '#2ecc71',
            borderRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Asset Popularity Chart
const assetPopularityCtx = document.getElementById('assetPopularityChart').getContext('2d');
const assetPopularityChart = new Chart(assetPopularityCtx, {
    type: 'bar',
    data: {
        labels: ['Bitcoin', 'Ethereum', 'Gold', 'S&P 500', 'Real Estate'],
        datasets: [{
            label: 'Popularity',
            data: [100, 80, 60, 40, 20],
            backgroundColor: '#3498db',
            borderRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Transaction Management
document.querySelectorAll('.transaction-filters select, .transaction-filters input').forEach(element => {
    element.addEventListener('change', filterTransactions);
});

function filterTransactions() {
    const status = document.querySelector('.transaction-filters select:nth-child(1)').value;
    const type = document.querySelector('.transaction-filters select:nth-child(2)').value;
    const date = document.querySelector('.transaction-filters input').value;
    
    const rows = document.querySelectorAll('.admin-table tbody tr');
    
    rows.forEach(row => {
        const rowStatus = row.querySelector('.status').textContent.toLowerCase();
        const rowType = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
        const rowDate = row.querySelector('td:nth-child(6)').textContent;
        
        const statusMatch = status === 'All Transactions' || rowStatus === status.toLowerCase();
        const typeMatch = type === 'All Types' || rowType === type.toLowerCase();
        const dateMatch = !date || rowDate === date;
        
        row.style.display = statusMatch && typeMatch && dateMatch ? '' : 'none';
    });
}

// User Management
document.querySelectorAll('.btn-icon').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.getAttribute('title');
        const row = this.closest('tr');
        const userId = row.querySelector('td:first-child').textContent;
        
        switch(action) {
            case 'Edit':
                editUser(userId);
                break;
            case 'Suspend':
                suspendUser(userId);
                break;
            case 'Delete':
                deleteUser(userId);
                break;
            case 'Approve':
                approveTransaction(userId);
                break;
            case 'Reject':
                rejectTransaction(userId);
                break;
        }
    });
});

function editUser(userId) {
    // In a real application, this would open an edit modal
    console.log('Editing user:', userId);
}

function suspendUser(userId) {
    // In a real application, this would make an API call
    console.log('Suspending user:', userId);
}

function deleteUser(userId) {
    // In a real application, this would show a confirmation dialog
    console.log('Deleting user:', userId);
}

function approveTransaction(transactionId) {
    // In a real application, this would make an API call
    console.log('Approving transaction:', transactionId);
}

function rejectTransaction(transactionId) {
    // In a real application, this would show a confirmation dialog
    console.log('Rejecting transaction:', transactionId);
}

// Settings Management
document.querySelectorAll('.settings-form input, .settings-form select').forEach(element => {
    element.addEventListener('change', function() {
        const setting = this.closest('.form-group').querySelector('label').textContent;
        const value = this.value;
        
        // In a real application, this would save the setting
        console.log('Saving setting:', setting, value);
    });
});

// Market Data Management
document.querySelectorAll('.schedule-settings select').forEach(select => {
    select.addEventListener('change', function() {
        const asset = this.closest('.form-group').querySelector('label').textContent;
        const interval = this.value;
        
        // In a real application, this would update the update interval
        console.log('Updating', asset, 'interval to', interval);
    });
});

// Security Status
function updateSecurityStatus() {
    // In a real application, this would check various security metrics
    const securityStatus = {
        '2FA': true,
        'SSL': true,
        'Failed Logins': 3
    };
    
    document.querySelectorAll('.status-item').forEach(item => {
        const status = item.querySelector('span:last-child').textContent;
        const indicator = item.querySelector('.status-indicator');
        
        if (status.includes('2FA') || status.includes('SSL')) {
            indicator.className = 'status-indicator active';
        } else if (status.includes('Failed Logins')) {
            indicator.className = 'status-indicator warning';
        }
    });
}

updateSecurityStatus();
setInterval(updateSecurityStatus, 60000); // Update every minute 