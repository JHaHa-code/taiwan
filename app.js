// Taiwan Travel App
class TaiwanTravelApp {
    constructor() {
        this.currentDay = 1;
        this.exchangeRate = 42.5; // 1 TWD = 42.5 KRW
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.renderSchedule();
        this.bindEvents();
    }

    bindEvents() {
        // Day navigation
        document.querySelectorAll('.day-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const day = parseInt(e.target.dataset.day);
                this.switchDay(day);
            });
        });

        // Floating action buttons
        document.getElementById('currencyBtn').addEventListener('click', () => {
            this.openModal('currencyModal');
        });

        document.getElementById('weatherBtn').addEventListener('click', () => {
            this.openModal('weatherModal');
        });

        // Modal close buttons
        document.getElementById('closeCurrency').addEventListener('click', () => {
            this.closeModal('currencyModal');
        });

        document.getElementById('closeWeather').addEventListener('click', () => {
            this.closeModal('weatherModal');
        });

        // Currency converter
        const twdInput = document.getElementById('twdInput');
        const krwInput = document.getElementById('krwInput');

        twdInput.addEventListener('input', (e) => {
            const twd = parseFloat(e.target.value) || 0;
            krwInput.value = Math.round(twd * this.exchangeRate);
        });

        krwInput.addEventListener('input', (e) => {
            const krw = parseFloat(e.target.value) || 0;
            twdInput.value = (krw / this.exchangeRate).toFixed(2);
        });

        // Modal backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id);
                }
            });
        });

        // Touch/swipe support for day navigation
        this.setupSwipeNavigation();
    }

    switchDay(day) {
        if (day === this.currentDay) return;

        // Remove active class from current day
        document.querySelector(`[data-day="${this.currentDay}"]`).classList.remove('active');
        document.getElementById(`day-${this.currentDay}`).classList.remove('active');

        // Add active class to new day
        document.querySelector(`[data-day="${day}"]`).classList.add('active');
        document.getElementById(`day-${day}`).classList.add('active');

        this.currentDay = day;
        this.renderSchedule();
    }

    renderSchedule() {
        const container = document.querySelector(`#day-${this.currentDay} .schedule-list`);
        const data = travelData[`Day${this.currentDay}`];

        container.innerHTML = data.map((item, index) => {
            const categoryClass = this.getCategoryClass(item.category);
            const timeInfo = this.getTimeInfo(item);
            const moveInfo = this.getMoveInfo(item);
            const memo = item.memo ? `<div class="memo">${item.memo}</div>` : '';
            const mapBtn = item.map ? this.createMapButton(item.map) : '';

            return `
                <div class="schedule-card" style="animation-delay: ${index * 0.1}s">
                    <div class="card-header">
                        <h3 class="place-name">${item.place}</h3>
                        <span class="category-badge ${categoryClass}">${item.category}</span>
                    </div>
                    ${timeInfo}
                    ${memo}
                    ${moveInfo}
                    ${mapBtn}
                </div>
            `;
        }).join('');

        // Add intersection observer for animations
        this.observeCards();
    }

    getCategoryClass(category) {
        const categoryMap = {
            '음식점': 'food',
            '디저트': 'food',
            '야시장': 'night-market',
            '교통': 'transport',
            '숙소': 'accommodation',
            '관광명소': 'tourist',
            '쇼핑': 'shopping',
            '출국': 'transport',
            '입국': 'transport',
            '비행': 'transport',
            '사찰': 'tourist'
        };
        return categoryMap[category] || '';
    }

    getTimeInfo(item) {
        let timeHtml = '';
        
        if (item.arrive && item.arrive !== '-') {
            timeHtml += `
                <div class="time-item">
                    <i class="fas fa-sign-in-alt"></i>
                    <span>도착: ${item.arrive}</span>
                </div>
            `;
        }

        if (item.stay && item.stay !== '-') {
            timeHtml += `
                <div class="time-item">
                    <i class="fas fa-clock"></i>
                    <span>체류: ${item.stay}</span>
                </div>
            `;
        }

        if (item.depart && item.depart !== '-') {
            timeHtml += `
                <div class="time-item">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>출발: ${item.depart}</span>
                </div>
            `;
        }

        return timeHtml ? `<div class="time-info">${timeHtml}</div>` : '';
    }

    getMoveInfo(item) {
        if (!item.move) return '';
        
        return `
            <div class="move-info">
                <i class="fas fa-route"></i>
                <span>이동: ${item.move}</span>
            </div>
        `;
    }

    createMapButton(mapQuery) {
        const encodedQuery = encodeURIComponent(mapQuery);
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
        
        return `
            <a href="${googleMapsUrl}" target="_blank" class="map-btn">
                <i class="fas fa-map-marker-alt"></i>
                지도에서 보기
            </a>
        `;
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    setupSwipeNavigation() {
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        this.handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0 && this.currentDay < 4) {
                    // Swipe left - next day
                    this.switchDay(this.currentDay + 1);
                } else if (diff < 0 && this.currentDay > 1) {
                    // Swipe right - previous day
                    this.switchDay(this.currentDay - 1);
                }
            }
        };
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, options);
    }

    observeCards() {
        if (!this.observer) return;
        
        // Disconnect previous observers
        this.observer.disconnect();

        const cards = document.querySelectorAll('.schedule-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(card);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TaiwanTravelApp();
});

// Handle visibility change for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when tab becomes visible
        document.body.style.animationPlayState = 'running';
    }
});

// Service Worker registration for offline support
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}