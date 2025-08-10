// World Clock App - Enhanced Version
class WorldClock {
    constructor() {
        this.currentTimezone = 'Europe/London';
        this.popularLocations = [
            { name: 'New York', timezone: 'America/New_York', id: 'ny-time' },
            { name: 'London', timezone: 'Europe/London', id: 'london-time' },
            { name: 'Tokyo', timezone: 'Asia/Tokyo', id: 'tokyo-time' },
            { name: 'Paris', timezone: 'Europe/Paris', id: 'paris-time' },
            { name: 'Mumbai', timezone: 'Asia/Kolkata', id: 'mumbai-time' }
        ];
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.updatePopularLocations();
        this.startClock();
        this.setActiveLocation('Europe/London');
    }

    bindEvents() {
        // Get time button
        const getTimeBtn = document.getElementById('getTimeBtn');
        getTimeBtn.addEventListener('click', () => this.handleLocationSearch());

        // Enter key in input
        const locationInput = document.getElementById('location');
        locationInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleLocationSearch();
            }
        });

        // Popular location clicks
        document.querySelectorAll('.location-item').forEach(item => {
            item.addEventListener('click', () => {
                const timezone = item.dataset.timezone;
                this.setActiveLocation(timezone);
            });
        });
    }

    async handleLocationSearch() {
        const input = document.getElementById('location');
        const location = input.value.trim();
        
        if (!location) {
            this.showError('Please enter a location');
            return;
        }

        this.showLoading(true);
        
        try {
            const timezone = await this.searchTimezone(location);
            if (timezone) {
                this.setActiveLocation(timezone);
                input.value = '';
            } else {
                this.showError('Location not found. Try a different city or country.');
            }
        } catch (error) {
            this.showError('Error searching for location. Please try again.');
        } finally {
            this.showLoading(false);
        }
    }

    async searchTimezone(location) {
        try {
            // Common city to timezone mapping
            const cityMap = {
                'new york': 'America/New_York',
                'london': 'Europe/London',
                'tokyo': 'Asia/Tokyo',
                'paris': 'Europe/Paris',
                'mumbai': 'Asia/Kolkata',
                'bombay': 'Asia/Kolkata',
                'delhi': 'Asia/Kolkata',
                'moscow': 'Europe/Moscow',
                'beijing': 'Asia/Shanghai',
                'shanghai': 'Asia/Shanghai',
                'sydney': 'Australia/Sydney',
                'melbourne': 'Australia/Melbourne',
                'toronto': 'America/Toronto',
                'vancouver': 'America/Vancouver',
                'chicago': 'America/Chicago',
                'los angeles': 'America/Los_Angeles',
                'san francisco': 'America/Los_Angeles',
                'berlin': 'Europe/Berlin',
                'madrid': 'Europe/Madrid',
                'rome': 'Europe/Rome',
                'amsterdam': 'Europe/Amsterdam',
                'dubai': 'Asia/Dubai',
                'singapore': 'Asia/Singapore',
                'seoul': 'Asia/Seoul',
                'bangkok': 'Asia/Bangkok',
                'jakarta': 'Asia/Jakarta',
                'manila': 'Asia/Manila',
                'cairo': 'Africa/Cairo',
                'lagos': 'Africa/Lagos',
                'johannesburg': 'Africa/Johannesburg',
                'mexico city': 'America/Mexico_City',
                'sao paulo': 'America/Sao_Paulo',
                'buenos aires': 'America/Argentina/Buenos_Aires',
                'santiago': 'America/Santiago',
                'lima': 'America/Lima',
                'bogota': 'America/Bogota',
                'caracas': 'America/Caracas',
                'havana': 'America/Havana',
                'kingston': 'America/Jamaica',
                'port of spain': 'America/Port_of_Spain',
                'georgetown': 'America/Guyana',
                'paramaribo': 'America/Paramaribo',
                'cayenne': 'America/Cayenne',
                'fortaleza': 'America/Fortaleza',
                'recife': 'America/Recife',
                'salvador': 'America/Bahia',
                'brasilia': 'America/Sao_Paulo',
                'curitiba': 'America/Sao_Paulo',
                'porto alegre': 'America/Sao_Paulo',
                'montevideo': 'America/Montevideo',
                'asuncion': 'America/Asuncion',
                'la paz': 'America/La_Paz',
                'quito': 'America/Guayaquil',
                'guayaquil': 'America/Guayaquil',
                'medellin': 'America/Bogota',
                'cali': 'America/Bogota',
                'barranquilla': 'America/Bogota'
            };

            const searchTerm = location.toLowerCase().trim();
            
            // Check if the location exists in our mapping
            if (cityMap[searchTerm]) {
                return cityMap[searchTerm];
            }

            // Try to find partial matches
            for (const [city, timezone] of Object.entries(cityMap)) {
                if (city.includes(searchTerm) || searchTerm.includes(city)) {
                    return timezone;
                }
            }

            // If no match found, return null
            return null;
            
        } catch (error) {
            console.error('Error searching timezone:', error);
            return null;
        }
    }

    setActiveLocation(timezone) {
        this.currentTimezone = timezone;
        
        // Update active state in sidebar
        document.querySelectorAll('.location-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.timezone === timezone) {
                item.classList.add('active');
            }
        });

        // Update location name display
        const locationName = this.getLocationDisplayName(timezone);
        document.getElementById('locationName').textContent = locationName;
        
        // Update clock immediately
        this.updateClock();
    }

    getLocationDisplayName(timezone) {
        const locationMap = {
            'America/New_York': 'New York',
            'Europe/London': 'London',
            'Asia/Tokyo': 'Tokyo',
            'Europe/Paris': 'Paris',
            'Asia/Kolkata': 'Mumbai',
            'America/Los_Angeles': 'Los Angeles',
            'America/Chicago': 'Chicago',
            'America/Toronto': 'Toronto',
            'America/Vancouver': 'Vancouver',
            'Europe/Berlin': 'Berlin',
            'Europe/Madrid': 'Madrid',
            'Europe/Rome': 'Rome',
            'Europe/Amsterdam': 'Amsterdam',
            'Europe/Moscow': 'Moscow',
            'Asia/Shanghai': 'Shanghai',
            'Asia/Dubai': 'Dubai',
            'Asia/Singapore': 'Singapore',
            'Asia/Seoul': 'Seoul',
            'Asia/Bangkok': 'Bangkok',
            'Australia/Sydney': 'Sydney',
            'Australia/Melbourne': 'Melbourne',
            'America/Mexico_City': 'Mexico City',
            'America/Sao_Paulo': 'São Paulo',
            'America/Argentina/Buenos_Aires': 'Buenos Aires',
            'Africa/Cairo': 'Cairo',
            'Africa/Lagos': 'Lagos',
            'Africa/Johannesburg': 'Johannesburg'
        };
        
        return locationMap[timezone] || timezone.replace('_', ' ');
    }

    updateClock() {
        const now = new Date();
        
        // Get time in target timezone using a more reliable method
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: this.currentTimezone,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
        });
        
        const timeString = formatter.format(now);
        const timeParts = timeString.split(':');
        
        const hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);
        const seconds = parseInt(timeParts[2]);
        const milliseconds = now.getMilliseconds();

        // Calculate hand angles
        const secondAngle = (seconds * 6) + (milliseconds * 0.006);
        const minuteAngle = (minutes * 6) + (seconds * 0.1);
        const hourAngle = (hours % 12) * 30 + (minutes * 0.5);

        // Update clock hands with smooth animation
        const hourHand = document.getElementById('hourHand');
        const minuteHand = document.getElementById('minuteHand');
        const secondHand = document.getElementById('secondHand');

        hourHand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
        secondHand.style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;

        // Update digital time
        const digitalTime = document.getElementById('digitalTime');
        digitalTime.textContent = timeString;

        // Update date
        const dateDisplay = document.getElementById('dateDisplay');
        const dateString = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: this.currentTimezone
        });
        dateDisplay.textContent = dateString;
    }

    updatePopularLocations() {
        this.popularLocations.forEach(location => {
            this.updateLocationTime(location);
        });
    }

    async updateLocationTime(location) {
        try {
            const now = new Date();
            
            const timeFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: location.timezone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            
            const timeString = timeFormatter.format(now);

            const timeElement = document.getElementById(location.id);
            if (timeElement) {
                timeElement.textContent = timeString;
            }
        } catch (error) {
            console.error(`Error updating time for ${location.name}:`, error);
        }
    }

    startClock() {
        // Update main clock every 100ms for smooth second hand movement
        setInterval(() => {
            this.updateClock();
        }, 100);

        // Update popular locations every second
        setInterval(() => {
            this.updatePopularLocations();
        }, 1000);
    }

    showLoading(show) {
        const container = document.querySelector('.container');
        if (show) {
            container.classList.add('loading');
        } else {
            container.classList.remove('loading');
        }
    }

    showError(message) {
        // Create error notification
        const notification = document.createElement('div');
        notification.className = 'error-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff6b6b;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WorldClock();
});
