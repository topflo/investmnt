// Portfolio Performance Chart
const portfolioCtx = document.getElementById('portfolioChart').getContext('2d');
const portfolioChart = new Chart(portfolioCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Portfolio Value',
            data: [20000, 22000, 21000, 23000, 24000, 25000],
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            borderWidth: 1,
            borderRadius: 5,
            barPercentage: 0.6
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
                    display: true,
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

// Asset Allocation Chart
const assetCtx = document.getElementById('assetAllocationChart').getContext('2d');
const assetChart = new Chart(assetCtx, {
    type: 'doughnut',
    data: {
        labels: ['Crypto', 'Stocks', 'Real Estate', 'Gold'],
        datasets: [{
            data: [36.4, 28.4, 20.4, 14.8],
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

// Market Data Updates
function updateMarketData() {
    // In a real application, this would fetch data from an API
    const marketData = {
        btc: {
            price: 65432.10,
            change: 3.45
        },
        gold: {
            price: 2145.67,
            change: 0.78
        },
        sp500: {
            price: 4567.89,
            change: -0.45
        },
        realEstate: {
            price: 1234.56,
            change: 1.23
        }
    };

    // Update market cards
    document.querySelectorAll('.market-card').forEach(card => {
        const asset = card.querySelector('h3').textContent.split(' ')[0].toLowerCase();
        const data = marketData[asset];
        
        if (data) {
            card.querySelector('.price').textContent = `$${data.price.toLocaleString()}`;
            const changeElement = card.querySelector('.change');
            changeElement.textContent = `${data.change > 0 ? '+' : ''}${data.change}%`;
            changeElement.className = `change ${data.change >= 0 ? 'positive' : 'negative'}`;
            changeElement.innerHTML += ` <i class="fas fa-arrow-${data.change >= 0 ? 'up' : 'down'}"></i>`;
        }
    });
}

// Update market data every 30 seconds
updateMarketData();
setInterval(updateMarketData, 30000);

// Transaction Filtering
document.getElementById('transactionType').addEventListener('change', filterTransactions);
document.getElementById('transactionDate').addEventListener('change', filterTransactions);

function filterTransactions() {
    const type = document.getElementById('transactionType').value;
    const date = document.getElementById('transactionDate').value;
    const rows = document.querySelectorAll('.transaction-table tbody tr');

    rows.forEach(row => {
        const rowType = row.querySelector('.transaction-type').textContent.toLowerCase();
        const rowDate = row.querySelector('td:first-child').textContent;

        const typeMatch = type === 'all' || rowType === type;
        const dateMatch = !date || rowDate === date;

        row.style.display = typeMatch && dateMatch ? '' : 'none';
    });
}

// Notifications
function addNotification(title, message, type = 'info') {
    const alertsContainer = document.querySelector('.alerts-container');
    const icon = {
        info: 'info-circle',
        warning: 'exclamation-triangle',
        alert: 'bell'
    }[type];

    const alertItem = document.createElement('div');
    alertItem.className = 'alert-item';
    alertItem.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <div class="alert-content">
            <h4>${title}</h4>
            <p>${message}</p>
            <span class="alert-time">Just now</span>
        </div>
    `;

    alertsContainer.insertBefore(alertItem, alertsContainer.firstChild);
}

// Example: Add a new notification
// addNotification('Market Update', 'Bitcoin has reached a new all-time high!', 'alert'); 