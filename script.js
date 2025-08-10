// World Clock App - Enhanced Version
class WorldClock {
    constructor() {
        this.currentTimezone = 'Europe/London';
        this.is24HourFormat = true;
        this.isDarkMode = true;
        
        // Enhanced location data with flags and coordinates
        this.allLocations = [
            { name: 'New York', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🗽', lat: 40.7128, lng: -74.0060 },
            { name: 'London', timezone: 'Europe/London', flag: '🇬🇧', country: 'UK', countryEmoji: '🏰', lat: 51.5074, lng: -0.1278 },
            { name: 'Tokyo', timezone: 'Asia/Tokyo', flag: '🇯🇵', country: 'Japan', countryEmoji: '🗼', lat: 35.6762, lng: 139.6503 },
            { name: 'Paris', timezone: 'Europe/Paris', flag: '🇫🇷', country: 'France', countryEmoji: '🗼', lat: 48.8566, lng: 2.3522 },
            { name: 'Mumbai', timezone: 'Asia/Kolkata', flag: '🇮🇳', country: 'India', countryEmoji: '🕉️', lat: 19.0760, lng: 72.8777 },
        { name: 'Dehradun', timezone: 'Asia/Kolkata', flag: '🇮🇳', country: 'India', countryEmoji: '🕉️', lat: 30.3165, lng: 78.0322 },
            { name: 'Sydney', timezone: 'Australia/Sydney', flag: '🇦🇺', country: 'Australia', countryEmoji: '🦘', lat: -33.8688, lng: 151.2093 },
        { name: 'Melbourne', timezone: 'Australia/Melbourne', flag: '🇦🇺', country: 'Australia', countryEmoji: '🦘', lat: -37.8136, lng: 144.9631 },
        { name: 'Auckland', timezone: 'Pacific/Auckland', flag: '🇳🇿', country: 'New Zealand', countryEmoji: '🥝', lat: -36.8485, lng: 174.7633 },
        { name: 'Wellington', timezone: 'Pacific/Auckland', flag: '🇳🇿', country: 'New Zealand', countryEmoji: '🥝', lat: -41.2866, lng: 174.7756 },
            { name: 'Berlin', timezone: 'Europe/Berlin', flag: '🇩🇪', country: 'Germany', countryEmoji: '🍺', lat: 52.5200, lng: 13.4050 },
            { name: 'Dubai', timezone: 'Asia/Dubai', flag: '🇦🇪', country: 'UAE', countryEmoji: '🏗️', lat: 25.2048, lng: 55.2708 },
            { name: 'Singapore', timezone: 'Asia/Singapore', flag: '🇸🇬', country: 'Singapore', countryEmoji: '🦁', lat: 1.3521, lng: 103.8198 },
            { name: 'Toronto', timezone: 'America/Toronto', flag: '🇨🇦', country: 'Canada', countryEmoji: '🍁', lat: 43.6532, lng: -79.3832 },
            { name: 'Los Angeles', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🎬', lat: 34.0522, lng: -118.2437 },
            { name: 'Chicago', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 41.8781, lng: -87.6298 },
            { name: 'Moscow', timezone: 'Europe/Moscow', flag: '🇷🇺', country: 'Russia', countryEmoji: '🏛️', lat: 55.7558, lng: 37.6176 },
            { name: 'Beijing', timezone: 'Asia/Shanghai', flag: '🇨🇳', country: 'China', countryEmoji: '🐉', lat: 39.9042, lng: 116.4074 },
            { name: 'Seoul', timezone: 'Asia/Seoul', flag: '🇰🇷', country: 'South Korea', countryEmoji: '🍜', lat: 37.5665, lng: 126.9780 },
            { name: 'Bangkok', timezone: 'Asia/Bangkok', flag: '🇹🇭', country: 'Thailand', countryEmoji: '🐘', lat: 13.7563, lng: 100.5018 },
            { name: 'Cairo', timezone: 'Africa/Cairo', flag: '🇪🇬', country: 'Egypt', countryEmoji: '🏺', lat: 30.0444, lng: 31.2357 },
            { name: 'Mexico City', timezone: 'America/Mexico_City', flag: '🇲🇽', country: 'Mexico', countryEmoji: '🌮', lat: 19.4326, lng: -99.1332 },
            { name: 'São Paulo', timezone: 'America/Sao_Paulo', flag: '🇧🇷', country: 'Brazil', countryEmoji: '⚽', lat: -23.5505, lng: -46.6333 },
        { name: 'Rio de Janeiro', timezone: 'America/Sao_Paulo', flag: '🇧🇷', country: 'Brazil', countryEmoji: '⚽', lat: -22.9068, lng: -43.1729 },
        { name: 'Brasilia', timezone: 'America/Sao_Paulo', flag: '🇧🇷', country: 'Brazil', countryEmoji: '⚽', lat: -15.7942, lng: -47.8822 },
        { name: 'Santiago', timezone: 'America/Santiago', flag: '🇨🇱', country: 'Chile', countryEmoji: '🍷', lat: -33.4489, lng: -70.6693 },
        { name: 'Lima', timezone: 'America/Lima', flag: '🇵🇪', country: 'Peru', countryEmoji: '🦙', lat: -12.0464, lng: -77.0428 },
        { name: 'Bogota', timezone: 'America/Bogota', flag: '🇨🇴', country: 'Colombia', countryEmoji: '☕', lat: 4.7110, lng: -74.0721 },
        { name: 'Caracas', timezone: 'America/Caracas', flag: '🇻🇪', country: 'Venezuela', countryEmoji: '🛢️', lat: 10.4806, lng: -66.9036 },
        { name: 'Quito', timezone: 'America/Guayaquil', flag: '🇪🇨', country: 'Ecuador', countryEmoji: '🌺', lat: -0.2299, lng: -78.5249 },
        { name: 'Montevideo', timezone: 'America/Montevideo', flag: '🇺🇾', country: 'Uruguay', countryEmoji: '🥩', lat: -34.9011, lng: -56.1645 },
        { name: 'Asuncion', timezone: 'America/Asuncion', flag: '🇵🇾', country: 'Paraguay', countryEmoji: '🍵', lat: -25.2637, lng: -57.5759 },
        { name: 'La Paz', timezone: 'America/La_Paz', flag: '🇧🇴', country: 'Bolivia', countryEmoji: '🏔️', lat: -16.4897, lng: -68.1193 },
        { name: 'Havana', timezone: 'America/Havana', flag: '🇨🇺', country: 'Cuba', countryEmoji: '🚬', lat: 23.1136, lng: -82.3666 },
        { name: 'Kingston', timezone: 'America/Jamaica', flag: '🇯🇲', country: 'Jamaica', countryEmoji: '🎵', lat: 17.9711, lng: -76.7926 },
        { name: 'Port-au-Prince', timezone: 'America/Port-au-Prince', flag: '🇭🇹', country: 'Haiti', countryEmoji: '🎨', lat: 18.5944, lng: -72.3074 },
        { name: 'Santo Domingo', timezone: 'America/Santo_Domingo', flag: '🇩🇴', country: 'Dominican Republic', countryEmoji: '🏝️', lat: 18.4861, lng: -69.9312 },
        { name: 'San Juan', timezone: 'America/Puerto_Rico', flag: '🇵🇷', country: 'Puerto Rico', countryEmoji: '🏝️', lat: 18.4655, lng: -66.1057 },
            { name: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', flag: '🇦🇷', country: 'Argentina', countryEmoji: '🥩', lat: -34.6118, lng: -58.3960 },
            { name: 'Madrid', timezone: 'Europe/Madrid', flag: '🇪🇸', country: 'Spain', countryEmoji: '🐂', lat: 40.4168, lng: -3.7038 },
            { name: 'Rome', timezone: 'Europe/Rome', flag: '🇮🇹', country: 'Italy', countryEmoji: '🍕', lat: 41.9028, lng: 12.4964 },
            { name: 'Amsterdam', timezone: 'Europe/Amsterdam', flag: '🇳🇱', country: 'Netherlands', countryEmoji: '🌷', lat: 52.3676, lng: 4.9041 },
        { name: 'Dublin', timezone: 'Europe/Dublin', flag: '🇮🇪', country: 'Ireland', countryEmoji: '🍀', lat: 53.3498, lng: -6.2603 },
        { name: 'Brussels', timezone: 'Europe/Brussels', flag: '🇧🇪', country: 'Belgium', countryEmoji: '🍫', lat: 50.8503, lng: 4.3517 },
        { name: 'Zurich', timezone: 'Europe/Zurich', flag: '🇨🇭', country: 'Switzerland', countryEmoji: '🧀', lat: 47.3769, lng: 8.5417 },
        { name: 'Lisbon', timezone: 'Europe/Lisbon', flag: '🇵🇹', country: 'Portugal', countryEmoji: '🐟', lat: 38.7223, lng: -9.1393 },
        { name: 'Reykjavik', timezone: 'Atlantic/Reykjavik', flag: '🇮🇸', country: 'Iceland', countryEmoji: '🌋', lat: 64.1466, lng: -21.9426 },
        { name: 'Luxembourg City', timezone: 'Europe/Luxembourg', flag: '🇱🇺', country: 'Luxembourg', countryEmoji: '🏦', lat: 49.6116, lng: 6.1319 },
        { name: 'Valletta', timezone: 'Europe/Malta', flag: '🇲🇹', country: 'Malta', countryEmoji: '⚓', lat: 35.8989, lng: 14.5146 },
        { name: 'Nicosia', timezone: 'Asia/Nicosia', flag: '🇨🇾', country: 'Cyprus', countryEmoji: '🏺', lat: 35.1856, lng: 33.3823 },
        { name: 'Zagreb', timezone: 'Europe/Zagreb', flag: '🇭🇷', country: 'Croatia', countryEmoji: '🏖️', lat: 45.8150, lng: 15.9819 },
        { name: 'Ljubljana', timezone: 'Europe/Ljubljana', flag: '🇸🇮', country: 'Slovenia', countryEmoji: '🏔️', lat: 46.0569, lng: 14.5058 },
        { name: 'Bratislava', timezone: 'Europe/Bratislava', flag: '🇸🇰', country: 'Slovakia', countryEmoji: '🏰', lat: 48.1486, lng: 17.1077 },
        { name: 'Sofia', timezone: 'Europe/Sofia', flag: '🇧🇬', country: 'Bulgaria', countryEmoji: '🌹', lat: 42.6977, lng: 23.3219 },
        { name: 'Bucharest', timezone: 'Europe/Bucharest', flag: '🇷🇴', country: 'Romania', countryEmoji: '🏰', lat: 44.4268, lng: 26.1025 },
        { name: 'Chisinau', timezone: 'Europe/Chisinau', flag: '🇲🇩', country: 'Moldova', countryEmoji: '🍇', lat: 47.0105, lng: 28.8638 },
        { name: 'Kyiv', timezone: 'Europe/Kiev', flag: '🇺🇦', country: 'Ukraine', countryEmoji: '🌻', lat: 50.4501, lng: 30.5234 },
        { name: 'Minsk', timezone: 'Europe/Minsk', flag: '🇧🇾', country: 'Belarus', countryEmoji: '🌲', lat: 53.9045, lng: 27.5615 },
        { name: 'Vilnius', timezone: 'Europe/Vilnius', flag: '🇱🇹', country: 'Lithuania', countryEmoji: '🏰', lat: 54.6872, lng: 25.2797 },
        { name: 'Riga', timezone: 'Europe/Riga', flag: '🇱🇻', country: 'Latvia', countryEmoji: '🌲', lat: 56.9496, lng: 24.1052 },
        { name: 'Tallinn', timezone: 'Europe/Tallinn', flag: '🇪🇪', country: 'Estonia', countryEmoji: '🏰', lat: 59.4370, lng: 24.7536 },
        { name: 'Tirana', timezone: 'Europe/Tirane', flag: '🇦🇱', country: 'Albania', countryEmoji: '🏔️', lat: 41.3275, lng: 19.8187 },
        { name: 'Skopje', timezone: 'Europe/Skopje', flag: '🇲🇰', country: 'North Macedonia', countryEmoji: '🏔️', lat: 42.0027, lng: 21.4262 },
        { name: 'Pristina', timezone: 'Europe/Belgrade', flag: '🇽🇰', country: 'Kosovo', countryEmoji: '🏔️', lat: 42.6629, lng: 21.1655 },
        { name: 'Podgorica', timezone: 'Europe/Podgorica', flag: '🇲🇪', country: 'Montenegro', countryEmoji: '🏔️', lat: 42.4304, lng: 19.2594 },
        { name: 'Sarajevo', timezone: 'Europe/Sarajevo', flag: '🇧🇦', country: 'Bosnia and Herzegovina', countryEmoji: '🏔️', lat: 43.8564, lng: 18.4131 },
        { name: 'Belgrade', timezone: 'Europe/Belgrade', flag: '🇷🇸', country: 'Serbia', countryEmoji: '🍇', lat: 44.7866, lng: 20.4489 },
            { name: 'Stockholm', timezone: 'Europe/Stockholm', flag: '🇸🇪', country: 'Sweden', countryEmoji: '🦊', lat: 59.3293, lng: 18.0686 },
            { name: 'Oslo', timezone: 'Europe/Oslo', flag: '🇳🇴', country: 'Norway', countryEmoji: '🐻', lat: 59.9139, lng: 10.7522 },
            { name: 'Copenhagen', timezone: 'Europe/Copenhagen', flag: '🇩🇰', country: 'Denmark', countryEmoji: '🧜‍♀️', lat: 55.6761, lng: 12.5683 },
            { name: 'Helsinki', timezone: 'Europe/Helsinki', flag: '🇫🇮', country: 'Finland', countryEmoji: '🦊', lat: 60.1699, lng: 24.9384 },
            { name: 'Warsaw', timezone: 'Europe/Warsaw', flag: '🇵🇱', country: 'Poland', countryEmoji: '🦅', lat: 52.2297, lng: 21.0122 },
            { name: 'Prague', timezone: 'Europe/Prague', flag: '🇨🇿', country: 'Czech Republic', countryEmoji: '🍺', lat: 50.0755, lng: 14.4378 },
            { name: 'Vienna', timezone: 'Europe/Vienna', flag: '🇦🇹', country: 'Austria', countryEmoji: '🎵', lat: 48.2082, lng: 16.3738 },
            { name: 'Budapest', timezone: 'Europe/Budapest', flag: '🇭🇺', country: 'Hungary', countryEmoji: '🌶️', lat: 47.4979, lng: 19.0402 },
            { name: 'Athens', timezone: 'Europe/Athens', flag: '🇬🇷', country: 'Greece', countryEmoji: '🏺', lat: 37.9838, lng: 23.7275 },
            { name: 'Istanbul', timezone: 'Europe/Istanbul', flag: '🇹🇷', country: 'Turkey', countryEmoji: '🕌', lat: 41.0082, lng: 28.9784 },
            { name: 'Tel Aviv', timezone: 'Asia/Jerusalem', flag: '🇮🇱', country: 'Israel', countryEmoji: '🕎', lat: 32.0853, lng: 34.7818 },
            { name: 'Riyadh', timezone: 'Asia/Riyadh', flag: '🇸🇦', country: 'Saudi Arabia', countryEmoji: '🕌', lat: 24.7136, lng: 46.6753 },
            { name: 'Doha', timezone: 'Asia/Qatar', flag: '🇶🇦', country: 'Qatar', countryEmoji: '🕌', lat: 25.2854, lng: 51.5310 },
            { name: 'Kuwait City', timezone: 'Asia/Kuwait', flag: '🇰🇼', country: 'Kuwait', countryEmoji: '🛢️', lat: 29.3759, lng: 47.9774 },
            { name: 'Manila', timezone: 'Asia/Manila', flag: '🇵🇭', country: 'Philippines', countryEmoji: '🥥', lat: 14.5995, lng: 120.9842 },
            { name: 'Jakarta', timezone: 'Asia/Jakarta', flag: '🇮🇩', country: 'Indonesia', countryEmoji: '🌺', lat: -6.2088, lng: 106.8456 },
            { name: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', flag: '🇲🇾', country: 'Malaysia', countryEmoji: '🏗️', lat: 3.1390, lng: 101.6869 },
            { name: 'Ho Chi Minh City', timezone: 'Asia/Ho_Chi_Minh', flag: '🇻🇳', country: 'Vietnam', countryEmoji: '🍜', lat: 10.8231, lng: 106.6297 },
            { name: 'Hanoi', timezone: 'Asia/Ho_Chi_Minh', flag: '🇻🇳', country: 'Vietnam', countryEmoji: '🍜', lat: 21.0285, lng: 105.8542 },
            { name: 'Phnom Penh', timezone: 'Asia/Phnom_Penh', flag: '🇰🇭', country: 'Cambodia', countryEmoji: '🏛️', lat: 11.5564, lng: 104.9282 },
            { name: 'Vientiane', timezone: 'Asia/Vientiane', flag: '🇱🇦', country: 'Laos', countryEmoji: '🏛️', lat: 17.9757, lng: 102.6331 },
            { name: 'Yangon', timezone: 'Asia/Yangon', flag: '🇲🇲', country: 'Myanmar', countryEmoji: '🏛️', lat: 16.8661, lng: 96.1951 },
            { name: 'Dhaka', timezone: 'Asia/Dhaka', flag: '🇧🇩', country: 'Bangladesh', countryEmoji: '🌾', lat: 23.8103, lng: 90.4125 },
            { name: 'Colombo', timezone: 'Asia/Colombo', flag: '🇱🇰', country: 'Sri Lanka', countryEmoji: '☕', lat: 6.9271, lng: 79.8612 },
            { name: 'Kathmandu', timezone: 'Asia/Kathmandu', flag: '🇳🇵', country: 'Nepal', countryEmoji: '🏔️', lat: 27.7172, lng: 85.3240 },
            { name: 'Thimphu', timezone: 'Asia/Thimphu', flag: '🇧🇹', country: 'Bhutan', countryEmoji: '🏔️', lat: 27.4716, lng: 89.6386 },
            { name: 'Ulaanbaatar', timezone: 'Asia/Ulaanbaatar', flag: '🇲🇳', country: 'Mongolia', countryEmoji: '🐎', lat: 47.8864, lng: 106.9057 },
            { name: 'Almaty', timezone: 'Asia/Almaty', flag: '🇰🇿', country: 'Kazakhstan', countryEmoji: '🐎', lat: 43.2220, lng: 76.8512 },
            { name: 'Tashkent', timezone: 'Asia/Tashkent', flag: '🇺🇿', country: 'Uzbekistan', countryEmoji: '🏺', lat: 41.2995, lng: 69.2401 },
            { name: 'Bishkek', timezone: 'Asia/Bishkek', flag: '🇰🇬', country: 'Kyrgyzstan', countryEmoji: '🏔️', lat: 42.8746, lng: 74.5698 },
            { name: 'Dushanbe', timezone: 'Asia/Dushanbe', flag: '🇹🇯', country: 'Tajikistan', countryEmoji: '🏔️', lat: 38.5358, lng: 68.7791 },
            { name: 'Ashgabat', timezone: 'Asia/Ashgabat', flag: '🇹🇲', country: 'Turkmenistan', countryEmoji: '🐪', lat: 37.9601, lng: 58.3261 },
            { name: 'Baku', timezone: 'Asia/Baku', flag: '🇦🇿', country: 'Azerbaijan', countryEmoji: '🛢️', lat: 40.4093, lng: 49.8671 },
            { name: 'Tbilisi', timezone: 'Asia/Tbilisi', flag: '🇬🇪', country: 'Georgia', countryEmoji: '🍷', lat: 41.7151, lng: 44.8271 },
            { name: 'Yerevan', timezone: 'Asia/Yerevan', flag: '🇦🇲', country: 'Armenia', countryEmoji: '🏔️', lat: 40.1872, lng: 44.5152 },
            { name: 'Tehran', timezone: 'Asia/Tehran', flag: '🇮🇷', country: 'Iran', countryEmoji: '🕌', lat: 35.6892, lng: 51.3890 },
            { name: 'Baghdad', timezone: 'Asia/Baghdad', flag: '🇮🇶', country: 'Iraq', countryEmoji: '🏺', lat: 33.3152, lng: 44.3661 },
            { name: 'Damascus', timezone: 'Asia/Damascus', flag: '🇸🇾', country: 'Syria', countryEmoji: '🏺', lat: 33.5138, lng: 36.2765 },
            { name: 'Beirut', timezone: 'Asia/Beirut', flag: '🇱🇧', country: 'Lebanon', countryEmoji: '🌲', lat: 33.8935, lng: 35.5016 },
            { name: 'Amman', timezone: 'Asia/Amman', flag: '🇯🇴', country: 'Jordan', countryEmoji: '🏺', lat: 31.9454, lng: 35.9284 },
            { name: 'Sanaa', timezone: 'Asia/Aden', flag: '🇾🇪', country: 'Yemen', countryEmoji: '🏺', lat: 15.3694, lng: 44.1910 },
            { name: 'Muscat', timezone: 'Asia/Muscat', flag: '🇴🇲', country: 'Oman', countryEmoji: '🕌', lat: 23.5880, lng: 58.3829 },
            { name: 'Abu Dhabi', timezone: 'Asia/Dubai', flag: '🇦🇪', country: 'UAE', countryEmoji: '🏗️', lat: 24.4539, lng: 54.3773 },
            { name: 'Lagos', timezone: 'Africa/Lagos', flag: '🇳🇬', country: 'Nigeria', countryEmoji: '🦁', lat: 6.5244, lng: 3.3792 },
            { name: 'Nairobi', timezone: 'Africa/Nairobi', flag: '🇰🇪', country: 'Kenya', countryEmoji: '🐘', lat: -1.2921, lng: 36.8219 },
            { name: 'Addis Ababa', timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', country: 'Ethiopia', countryEmoji: '🌾', lat: 9.0320, lng: 38.7636 },
            { name: 'Dar es Salaam', timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', country: 'Tanzania', countryEmoji: '🌴', lat: -6.8235, lng: 39.2695 },
            { name: 'Kampala', timezone: 'Africa/Kampala', flag: '🇺🇬', country: 'Uganda', countryEmoji: '🐘', lat: 0.3476, lng: 32.5825 },
            { name: 'Khartoum', timezone: 'Africa/Khartoum', flag: '🇸🇩', country: 'Sudan', countryEmoji: '🌵', lat: 15.5007, lng: 32.5599 },
            { name: 'Algiers', timezone: 'Africa/Algiers', flag: '🇩🇿', country: 'Algeria', countryEmoji: '🌵', lat: 36.7538, lng: 3.0588 },
            { name: 'Casablanca', timezone: 'Africa/Casablanca', flag: '🇲🇦', country: 'Morocco', countryEmoji: '🌵', lat: 33.5731, lng: -7.5898 },
            { name: 'Tunis', timezone: 'Africa/Tunis', flag: '🇹🇳', country: 'Tunisia', countryEmoji: '🌵', lat: 36.8065, lng: 10.1815 },
            { name: 'Tripoli', timezone: 'Africa/Tripoli', flag: '🇱🇾', country: 'Libya', countryEmoji: '🌵', lat: 32.8872, lng: 13.1913 },
            { name: 'Johannesburg', timezone: 'Africa/Johannesburg', flag: '🇿🇦', country: 'South Africa', countryEmoji: '🐘', lat: -26.2041, lng: 28.0473 },
            { name: 'Cape Town', timezone: 'Africa/Johannesburg', flag: '🇿🇦', country: 'South Africa', countryEmoji: '🌊', lat: -33.9249, lng: 18.4241 },
            { name: 'Windhoek', timezone: 'Africa/Windhoek', flag: '🇳🇦', country: 'Namibia', countryEmoji: '🐘', lat: -22.5609, lng: 17.0658 },
            { name: 'Gaborone', timezone: 'Africa/Gaborone', flag: '🇧🇼', country: 'Botswana', countryEmoji: '🐘', lat: -24.6282, lng: 25.9231 },
            { name: 'Harare', timezone: 'Africa/Harare', flag: '🇿🇼', country: 'Zimbabwe', countryEmoji: '🌾', lat: -17.8252, lng: 31.0335 },
            { name: 'Lusaka', timezone: 'Africa/Lusaka', flag: '🇿🇲', country: 'Zambia', countryEmoji: '🐘', lat: -15.3875, lng: 28.3228 },
            { name: 'Maputo', timezone: 'Africa/Maputo', flag: '🇲🇿', country: 'Mozambique', countryEmoji: '🌴', lat: -25.9692, lng: 32.5732 },
            { name: 'Antananarivo', timezone: 'Indian/Antananarivo', flag: '🇲🇬', country: 'Madagascar', countryEmoji: '🌴', lat: -18.8792, lng: 47.5079 },
            { name: 'Port Louis', timezone: 'Indian/Mauritius', flag: '🇲🇺', country: 'Mauritius', countryEmoji: '🌴', lat: -20.1609, lng: 57.5012 },
            { name: 'Victoria', timezone: 'Indian/Mahe', flag: '🇸🇨', country: 'Seychelles', countryEmoji: '🌴', lat: -4.6203, lng: 55.4513 },
        { name: 'Dakar', timezone: 'Africa/Dakar', flag: '🇸🇳', country: 'Senegal', countryEmoji: '🌴', lat: 14.7167, lng: -17.4677 },
        { name: 'Bamako', timezone: 'Africa/Bamako', flag: '🇲��', country: 'Mali', countryEmoji: '🌴', lat: 12.6392, lng: -8.0029 },
        { name: 'Ouagadougou', timezone: 'Africa/Ouagadougou', flag: '🇧🇫', country: 'Burkina Faso', countryEmoji: '🌴', lat: 12.3714, lng: -1.5197 },
        { name: 'Niamey', timezone: 'Africa/Niamey', flag: '🇳🇪', country: 'Niger', countryEmoji: '🌴', lat: 13.5136, lng: 2.1098 },
        { name: 'Nouakchott', timezone: 'Africa/Nouakchott', flag: '🇲🇷', country: 'Mauritania', countryEmoji: '🌴', lat: 18.0799, lng: -15.9653 },
        { name: 'Banjul', timezone: 'Africa/Banjul', flag: '🇬🇲', country: 'Gambia', countryEmoji: '🌴', lat: 13.4432, lng: -16.5919 },
        { name: 'Bissau', timezone: 'Africa/Bissau', flag: '🇬🇼', country: 'Guinea-Bissau', countryEmoji: '🌴', lat: 11.8636, lng: -15.5846 },
        { name: 'Conakry', timezone: 'Africa/Conakry', flag: '🇬🇳', country: 'Guinea', countryEmoji: '🌴', lat: 9.5370, lng: -13.6785 },
        { name: 'Freetown', timezone: 'Africa/Freetown', flag: '🇸🇱', country: 'Sierra Leone', countryEmoji: '🌴', lat: 8.4657, lng: -13.2317 },
        { name: 'Monrovia', timezone: 'Africa/Monrovia', flag: '🇱🇷', country: 'Liberia', countryEmoji: '🌴', lat: 6.3004, lng: -10.7969 },
        { name: 'Abidjan', timezone: 'Africa/Abidjan', flag: '🇨🇮', country: 'Ivory Coast', countryEmoji: '🌴', lat: 5.3600, lng: -4.0083 },
        { name: 'Accra', timezone: 'Africa/Accra', flag: '🇬🇭', country: 'Ghana', countryEmoji: '🌴', lat: 5.5600, lng: -0.2057 },
        { name: 'Lome', timezone: 'Africa/Lome', flag: '🇹��', country: 'Togo', countryEmoji: '🌴', lat: 6.1375, lng: 1.2123 },
        { name: 'Porto Novo', timezone: 'Africa/Porto-Novo', flag: '🇧🇯', country: 'Benin', countryEmoji: '🌴', lat: 6.4969, lng: 2.6043 },
        { name: 'Yaounde', timezone: 'Africa/Douala', flag: '🇨🇲', country: 'Cameroon', countryEmoji: '🌴', lat: 3.8480, lng: 11.5021 },
        { name: 'Libreville', timezone: 'Africa/Libreville', flag: '🇬🇦', country: 'Gabon', countryEmoji: '🌴', lat: 0.4162, lng: 9.4673 },
        { name: 'Brazzaville', timezone: 'Africa/Brazzaville', flag: '🇨🇬', country: 'Republic of Congo', countryEmoji: '🌴', lat: -4.2634, lng: 15.2429 },
        { name: 'Kinshasa', timezone: 'Africa/Kinshasa', flag: '🇨🇩', country: 'DR Congo', countryEmoji: '🌴', lat: -4.4419, lng: 15.2663 },
        { name: 'Bujumbura', timezone: 'Africa/Bujumbura', flag: '🇧🇮', country: 'Burundi', countryEmoji: '🌴', lat: -3.3731, lng: 29.9189 },
        { name: 'Kigali', timezone: 'Africa/Kigali', flag: '🇷🇼', country: 'Rwanda', countryEmoji: '🌴', lat: -1.9441, lng: 30.0619 },
        { name: 'Kampala', timezone: 'Africa/Kampala', flag: '🇺🇬', country: 'Uganda', countryEmoji: '🐘', lat: 0.3476, lng: 32.5825 },
            { name: 'Vancouver', timezone: 'America/Vancouver', flag: '🇨🇦', country: 'Canada', countryEmoji: '🍁', lat: 49.2827, lng: -123.1207 },
            { name: 'Montreal', timezone: 'America/Montreal', flag: '🇨🇦', country: 'Canada', countryEmoji: '🍁', lat: 45.5017, lng: -73.5673 },
            { name: 'Calgary', timezone: 'America/Edmonton', flag: '🇨🇦', country: 'Canada', countryEmoji: '🍁', lat: 51.0447, lng: -114.0719 },
            { name: 'Edmonton', timezone: 'America/Edmonton', flag: '🇨🇦', country: 'Canada', countryEmoji: '🍁', lat: 53.5461, lng: -113.4938 },
            { name: 'Winnipeg', timezone: 'America/Winnipeg', flag: '🇨��', country: 'Canada', countryEmoji: '🍁', lat: 49.8951, lng: -97.1384 },
            { name: 'Halifax', timezone: 'America/Halifax', flag: '🇨🇦', country: 'Canada', countryEmoji: '🍁', lat: 44.6488, lng: -63.5752 },
            { name: 'St. John\'s', timezone: 'America/St_Johns', flag: '🇨🇦', country: 'Canada', countryEmoji: '🍁', lat: 47.5615, lng: -52.7126 },
            { name: 'San Francisco', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🎬', lat: 37.7749, lng: -122.4194 },
            { name: 'Seattle', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 47.6062, lng: -122.3321 },
            { name: 'Portland', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 45.5152, lng: -122.6784 },
            { name: 'Denver', timezone: 'America/Denver', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 39.7392, lng: -104.9903 },
            { name: 'Phoenix', timezone: 'America/Phoenix', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 33.4484, lng: -112.0740 },
            { name: 'Las Vegas', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 36.1699, lng: -115.1398 },
            { name: 'Salt Lake City', timezone: 'America/Denver', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 40.7608, lng: -111.8910 },
            { name: 'Houston', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 29.7604, lng: -95.3698 },
            { name: 'Dallas', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 32.7767, lng: -96.7970 },
            { name: 'Austin', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 30.2672, lng: -97.7431 },
            { name: 'San Antonio', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 29.4241, lng: -98.4936 },
            { name: 'Miami', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 25.7617, lng: -80.1918 },
            { name: 'Orlando', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 28.5383, lng: -81.3792 },
            { name: 'Tampa', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 27.9506, lng: -82.4572 },
            { name: 'Atlanta', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.7490, lng: -84.3880 },
            { name: 'Nashville', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 36.1627, lng: -86.7816 },
            { name: 'New Orleans', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 29.9511, lng: -90.0715 },
            { name: 'Kansas City', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 39.0997, lng: -94.5786 },
            { name: 'Minneapolis', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 44.9778, lng: -93.2650 },
            { name: 'Detroit', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 42.3314, lng: -83.0458 },
            { name: 'Cleveland', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 41.4993, lng: -81.6944 },
            { name: 'Pittsburgh', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 40.4406, lng: -79.9959 },
            { name: 'Philadelphia', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 39.9526, lng: -75.1652 },
            { name: 'Boston', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 42.3601, lng: -71.0589 },
            { name: 'Buffalo', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 42.8864, lng: -78.8784 },
            { name: 'Washington DC', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 38.9072, lng: -77.0369 },
            { name: 'Baltimore', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 39.2904, lng: -76.6122 },
            { name: 'Richmond', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 37.5407, lng: -77.4360 },
            { name: 'Charlotte', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 35.2271, lng: -80.8431 },
            { name: 'Raleigh', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 35.7796, lng: -78.6382 },
            { name: 'Jacksonville', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 30.3322, lng: -81.6557 },
            { name: 'Memphis', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 35.1495, lng: -90.0490 },
            { name: 'Louisville', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 38.2527, lng: -85.7585 },
            { name: 'Cincinnati', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 39.1031, lng: -84.5120 },
            { name: 'Columbus', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 39.9612, lng: -82.9988 },
            { name: 'Indianapolis', timezone: 'America/New_York', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 39.7684, lng: -86.1581 },
            { name: 'Milwaukee', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 43.0389, lng: -87.9065 },
            { name: 'St. Louis', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 38.6270, lng: -90.1994 },
            { name: 'Oklahoma City', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 35.4676, lng: -97.5164 },
            { name: 'Tulsa', timezone: 'America/Chicago', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 36.1540, lng: -95.9928 },
            { name: 'Albuquerque', timezone: 'America/Denver', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 35.0844, lng: -106.6504 },
            { name: 'El Paso', timezone: 'America/Denver', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 31.7619, lng: -106.4850 },
            { name: 'Tucson', timezone: 'America/Phoenix', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 32.2226, lng: -110.9747 },
            { name: 'Fresno', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 36.7378, lng: -119.7871 },
            { name: 'Sacramento', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 38.5816, lng: -121.4944 },
            { name: 'Oakland', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 37.8044, lng: -122.2711 },
            { name: 'San Jose', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌪️', lat: 37.3382, lng: -121.8863 },
            { name: 'San Diego', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 32.7157, lng: -117.1611 },
            { name: 'Long Beach', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.7701, lng: -118.1937 },
            { name: 'Anaheim', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.8366, lng: -117.9143 },
            { name: 'Bakersfield', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 35.3733, lng: -119.0187 },
            { name: 'Stockton', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 37.9577, lng: -121.2908 },
            { name: 'Riverside', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.9533, lng: -117.3962 },
            { name: 'Irvine', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.6846, lng: -117.8265 },
            { name: 'Fremont', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 37.5485, lng: -121.9886 },
            { name: 'Modesto', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 37.6391, lng: -120.9969 },
            { name: 'Oxnard', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.1975, lng: -119.1771 },
            { name: 'Fontana', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.0922, lng: -117.4350 },
            { name: 'Moreno Valley', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.9425, lng: -117.2297 },
            { name: 'Huntington Beach', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.6603, lng: -117.9992 },
            { name: 'Glendale', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.1425, lng: -118.2551 },
            { name: 'Santa Clarita', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.3917, lng: -118.5426 },
            { name: 'Garden Grove', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.7739, lng: -117.9414 },
            { name: 'Oceanside', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.1959, lng: -117.3795 },
            { name: 'Rancho Cucamonga', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.1064, lng: -117.5931 },
            { name: 'Ontario', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.0633, lng: -117.6509 },
            { name: 'Lancaster', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.6868, lng: -118.1542 },
            { name: 'Palmdale', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.5794, lng: -118.1165 },
            { name: 'Corona', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.8753, lng: -117.5664 },
            { name: 'Salinas', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 36.6777, lng: -121.6555 },
            { name: 'Pomona', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.0551, lng: -117.7499 },
            { name: 'Santa Rosa', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 38.4404, lng: -122.7141 },
            { name: 'Irvine', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.6846, lng: -117.8265 },
            { name: 'Fremont', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 37.5485, lng: -121.9886 },
            { name: 'Modesto', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 37.6391, lng: -120.9969 },
            { name: 'Oxnard', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.1975, lng: -119.1771 },
            { name: 'Fontana', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.0922, lng: -117.4350 },
            { name: 'Moreno Valley', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.9425, lng: -117.2297 },
            { name: 'Huntington Beach', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.6603, lng: -117.9992 },
            { name: 'Glendale', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.1425, lng: -118.2551 },
            { name: 'Santa Clarita', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.3917, lng: -118.5426 },
            { name: 'Garden Grove', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.7739, lng: -117.9414 },
            { name: 'Oceanside', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.1959, lng: -117.3795 },
            { name: 'Rancho Cucamonga', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.1064, lng: -117.5931 },
            { name: 'Ontario', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.0633, lng: -117.6509 },
            { name: 'Lancaster', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.6868, lng: -118.1542 },
            { name: 'Palmdale', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.5794, lng: -118.1165 },
            { name: 'Corona', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 33.8753, lng: -117.5664 },
            { name: 'Salinas', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 36.6777, lng: -121.6555 },
            { name: 'Pomona', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 34.0551, lng: -117.7499 },
            { name: 'Santa Rosa', timezone: 'America/Los_Angeles', flag: '🇺🇸', country: 'USA', countryEmoji: '🌊', lat: 38.4404, lng: -122.7141 }
        ];
        
        this.popularLocations = this.allLocations.slice(0, 5);
        
        // Favorites and comparison
        this.favorites = [];
        this.comparisonLocations = [];
        
        // Alarm properties
        this.alarms = [];
        this.alarmCheckInterval = null;
        this.audioContext = null;
        this.notificationPermission = false;
        
        // Stopwatch properties
        this.stopwatchRunning = false;
        this.stopwatchTime = 0;
        this.stopwatchInterval = null;
        this.lapTimes = [];
        
        // Search functionality
        this.searchResults = [];
        this.searchTimeout = null;
        
        this.init();
    }

    async requestNotificationPermission() {
        if ('Notification' in window) {
            if (Notification.permission === 'default') {
                const permission = await Notification.requestPermission();
                this.notificationPermission = permission === 'granted';
                
                if (this.notificationPermission) {
                    this.showNotification('🔔 Browser notifications enabled!');
                } else {
                    this.showNotification('⚠️ Browser notifications blocked. Enable them in browser settings for better alarm experience.');
                }
            } else {
                this.notificationPermission = Notification.permission === 'granted';
                
                if (!this.notificationPermission) {
                    this.showNotification('⚠️ Browser notifications blocked. Enable them in browser settings for better alarm experience.');
                }
            }
        } else {
            this.showNotification('⚠️ Browser notifications not supported. Alarms will still work with visual and audio alerts.');
        }
    }

    initializeAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (error) {
            console.warn('Audio context not supported:', error);
        }
    }

    init() {
        this.loadSettings();
        this.bindEvents();
        this.renderPopularLocations();
        this.renderFavorites();
        this.renderComparisonGrid();
        this.populateCalculatorDropdowns();
        this.startClock();
        this.setActiveLocation('Europe/London');
        this.requestNotificationPermission();
        this.initializeAudioContext();
        this.startAlarmCheck();
        this.loadAlarms();
        this.applyTheme();
        
        // Add some default comparison locations if none exist
        if (this.comparisonLocations.length === 0) {
            this.addToComparison('America/New_York');
            this.addToComparison('Europe/London');
            this.addToComparison('Asia/Tokyo');
        }
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

        // Mobile sidebar toggle functionality
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.querySelector('.sidebar');
        
        if (sidebarToggle && sidebar) {
            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('show');
            });
            
            // Close sidebar when clicking outside
            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                    sidebar.classList.remove('show');
                }
            });
            
            // Close sidebar on window resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    sidebar.classList.remove('show');
                }
            });
        }

        // Tab switching
        document.querySelectorAll('.nav-tab').forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => this.toggleTheme());

        // Time format toggle
        const timeFormatToggle = document.getElementById('timeFormatToggle');
        timeFormatToggle.addEventListener('change', () => this.toggleTimeFormat());

        // Search functionality
        const locationSearch = document.getElementById('locationSearch');
        locationSearch.addEventListener('input', (e) => this.handleSearch(e.target.value));
        locationSearch.addEventListener('focus', () => this.showSearchResults());
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-section')) {
                this.hideSearchResults();
            }
        });

        // Alarm functionality
        const setAlarmBtn = document.getElementById('setAlarmBtn');
        setAlarmBtn.addEventListener('click', () => this.setAlarm());

        // Stopwatch functionality
        const startStopwatchBtn = document.getElementById('startStopwatchBtn');
        const pauseStopwatchBtn = document.getElementById('pauseStopwatchBtn');
        const resetStopwatchBtn = document.getElementById('resetStopwatchBtn');

        startStopwatchBtn.addEventListener('click', () => this.startStopwatch());
        pauseStopwatchBtn.addEventListener('click', () => this.pauseStopwatch());
        resetStopwatchBtn.addEventListener('click', () => this.resetStopwatch());

        // Comparison functionality
        const addComparisonBtn = document.getElementById('addComparisonBtn');
        const clearComparisonBtn = document.getElementById('clearComparisonBtn');
        
        addComparisonBtn.addEventListener('click', () => this.addComparisonLocation());
        clearComparisonBtn.addEventListener('click', () => this.clearComparison());

        // Calculator functionality
        const calcFromTimezone = document.getElementById('calcFromTimezone');
        const calcToTimezone = document.getElementById('calcToTimezone');
        
        calcFromTimezone.addEventListener('change', () => this.calculateTimeDifference());
        calcToTimezone.addEventListener('change', () => this.calculateTimeDifference());

        // Map functionality
        const showAllTimesBtn = document.getElementById('showAllTimesBtn');
        const hideAllTimesBtn = document.getElementById('hideAllTimesBtn');
        
        showAllTimesBtn.addEventListener('click', () => this.showAllMapTimes());
        hideAllTimesBtn.addEventListener('click', () => this.hideAllMapTimes());
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
            // Common city to timezone mapping - Comprehensive version with all cities
            const cityMap = {
                // Major Cities from allLocations
                'new york': 'America/New_York',
                'london': 'Europe/London',
                'tokyo': 'Asia/Tokyo',
                'paris': 'Europe/Paris',
                'mumbai': 'Asia/Kolkata',
            'dehradun': 'Asia/Kolkata',
                'bombay': 'Asia/Kolkata',
                'delhi': 'Asia/Kolkata',
                'sydney': 'Australia/Sydney',
            'melbourne': 'Australia/Melbourne',
            'auckland': 'Pacific/Auckland',
            'wellington': 'Pacific/Auckland',
            'dublin': 'Europe/Dublin',
            'brussels': 'Europe/Brussels',
            'zurich': 'Europe/Zurich',
            'lisbon': 'Europe/Lisbon',
            'reykjavik': 'Atlantic/Reykjavik',
            'luxembourg': 'Europe/Luxembourg',
            'valletta': 'Europe/Malta',
            'nicosia': 'Asia/Nicosia',
            'zagreb': 'Europe/Zagreb',
            'ljubljana': 'Europe/Ljubljana',
            'bratislava': 'Europe/Bratislava',
            'sofia': 'Europe/Sofia',
            'bucharest': 'Europe/Bucharest',
            'chisinau': 'Europe/Chisinau',
            'kyiv': 'Europe/Kiev',
            'minsk': 'Europe/Minsk',
            'vilnius': 'Europe/Vilnius',
            'riga': 'Europe/Riga',
            'tallinn': 'Europe/Tallinn',
            'tirana': 'Europe/Tirane',
            'skopje': 'Europe/Skopje',
            'pristina': 'Europe/Belgrade',
            'podgorica': 'Europe/Podgorica',
            'sarajevo': 'Europe/Sarajevo',
            'belgrade': 'Europe/Belgrade',
            'rio de janeiro': 'America/Sao_Paulo',
            'brasilia': 'America/Sao_Paulo',
            'santiago': 'America/Santiago',
            'lima': 'America/Lima',
            'bogota': 'America/Bogota',
            'caracas': 'America/Caracas',
            'quito': 'America/Guayaquil',
            'montevideo': 'America/Montevideo',
            'asuncion': 'America/Asuncion',
            'la paz': 'America/La_Paz',
            'havana': 'America/Havana',
            'kingston': 'America/Jamaica',
            'port au prince': 'America/Port-au-Prince',
            'santo domingo': 'America/Santo_Domingo',
            'san juan': 'America/Puerto_Rico',
            'dakar': 'Africa/Dakar',
            'bamako': 'Africa/Bamako',
            'ouagadougou': 'Africa/Ouagadougou',
            'niamey': 'Africa/Niamey',
            'nouakchott': 'Africa/Nouakchott',
            'banjul': 'Africa/Banjul',
            'bissau': 'Africa/Bissau',
            'conakry': 'Africa/Conakry',
            'freetown': 'Africa/Freetown',
            'monrovia': 'Africa/Monrovia',
            'abidjan': 'Africa/Abidjan',
            'accra': 'Africa/Accra',
            'lome': 'Africa/Lome',
            'porto novo': 'Africa/Porto-Novo',
            'yaounde': 'Africa/Douala',
            'libreville': 'Africa/Libreville',
            'brazzaville': 'Africa/Brazzaville',
            'kinshasa': 'Africa/Kinshasa',
            'bujumbura': 'Africa/Bujumbura',
            'kigali': 'Africa/Kigali',
                'berlin': 'Europe/Berlin',
                'dubai': 'Asia/Dubai',
                'singapore': 'Asia/Singapore',
                'toronto': 'America/Toronto',
                'los angeles': 'America/Los_Angeles',
                'chicago': 'America/Chicago',
                'moscow': 'Europe/Moscow',
                'beijing': 'Asia/Shanghai',
                'shanghai': 'Asia/Shanghai',
                'seoul': 'Asia/Seoul',
                'bangkok': 'Asia/Bangkok',
                'cairo': 'Africa/Cairo',
                'mexico city': 'America/Mexico_City',
                'sao paulo': 'America/Sao_Paulo',
                'buenos aires': 'America/Argentina/Buenos_Aires',
                'madrid': 'Europe/Madrid',
                'rome': 'Europe/Rome',
                'amsterdam': 'Europe/Amsterdam',
                'stockholm': 'Europe/Stockholm',
                'oslo': 'Europe/Oslo',
                'copenhagen': 'Europe/Copenhagen',
                'helsinki': 'Europe/Helsinki',
                'warsaw': 'Europe/Warsaw',
                'prague': 'Europe/Prague',
                'vienna': 'Europe/Vienna',
                'budapest': 'Europe/Budapest',
                'athens': 'Europe/Athens',
                'istanbul': 'Europe/Istanbul',
                'tel aviv': 'Asia/Jerusalem',
                'riyadh': 'Asia/Riyadh',
                'doha': 'Asia/Qatar',
                'kuwait city': 'Asia/Kuwait',
                'manila': 'Asia/Manila',
                'jakarta': 'Asia/Jakarta',
                'kuala lumpur': 'Asia/Kuala_Lumpur',
                'ho chi minh city': 'Asia/Ho_Chi_Minh',
                'hanoi': 'Asia/Ho_Chi_Minh',
                'phnom penh': 'Asia/Phnom_Penh',
                'vientiane': 'Asia/Vientiane',
                'yangon': 'Asia/Yangon',
                'dhaka': 'Asia/Dhaka',
                'colombo': 'Asia/Colombo',
                'kathmandu': 'Asia/Kathmandu',
                'thimphu': 'Asia/Thimphu',
                'ulaanbaatar': 'Asia/Ulaanbaatar',
                'almaty': 'Asia/Almaty',
                'tashkent': 'Asia/Tashkent',
                'bishkek': 'Asia/Bishkek',
                'dushanbe': 'Asia/Dushanbe',
                'ashgabat': 'Asia/Ashgabat',
                'baku': 'Asia/Baku',
                'tbilisi': 'Asia/Tbilisi',
                'yerevan': 'Asia/Yerevan',
                'tehran': 'Asia/Tehran',
                'baghdad': 'Asia/Baghdad',
                'damascus': 'Asia/Damascus',
                'beirut': 'Asia/Beirut',
                'amman': 'Asia/Amman',
                'sanaa': 'Asia/Aden',
                'muscat': 'Asia/Muscat',
                'abu dhabi': 'Asia/Dubai',
                'lagos': 'Africa/Lagos',
                'nairobi': 'Africa/Nairobi',
                'addis ababa': 'Africa/Addis_Ababa',
                'dar es salaam': 'Africa/Dar_es_Salaam',
                'kampala': 'Africa/Kampala',
                'khartoum': 'Africa/Khartoum',
                'algiers': 'Africa/Algiers',
                'casablanca': 'Africa/Casablanca',
                'tunis': 'Africa/Tunis',
                'tripoli': 'Africa/Tripoli',
                'johannesburg': 'Africa/Johannesburg',
                'cape town': 'Africa/Johannesburg',
                'windhoek': 'Africa/Windhoek',
                'gaborone': 'Africa/Gaborone',
                'harare': 'Africa/Harare',
                'lusaka': 'Africa/Lusaka',
                'maputo': 'Africa/Maputo',
                'antananarivo': 'Indian/Antananarivo',
                'port louis': 'Indian/Mauritius',
                'victoria': 'Indian/Mahe',
                'vancouver': 'America/Vancouver',
                'montreal': 'America/Montreal',
                'calgary': 'America/Edmonton',
                'edmonton': 'America/Edmonton',
                'winnipeg': 'America/Winnipeg',
                'halifax': 'America/Halifax',
                'st. john\'s': 'America/St_Johns',
                'san francisco': 'America/Los_Angeles',
                'seattle': 'America/Los_Angeles',
                'portland': 'America/Los_Angeles',
                'denver': 'America/Denver',
                'phoenix': 'America/Phoenix',
                'las vegas': 'America/Los_Angeles',
                'salt lake city': 'America/Denver',
                'houston': 'America/Chicago',
                'dallas': 'America/Chicago',
                'austin': 'America/Chicago',
                'san antonio': 'America/Chicago',
                'miami': 'America/New_York',
                'orlando': 'America/New_York',
                'tampa': 'America/New_York',
                'atlanta': 'America/New_York',
                'nashville': 'America/Chicago',
                'new orleans': 'America/Chicago',
                'kansas city': 'America/Chicago',
                'minneapolis': 'America/Chicago',
                'detroit': 'America/New_York',
                'cleveland': 'America/New_York',
                'pittsburgh': 'America/New_York',
                'philadelphia': 'America/New_York',
                'boston': 'America/New_York',
                'buffalo': 'America/New_York',
                'washington dc': 'America/New_York',
                'baltimore': 'America/New_York',
                'richmond': 'America/New_York',
                'charlotte': 'America/New_York',
                'raleigh': 'America/New_York',
                'jacksonville': 'America/New_York',
                'memphis': 'America/Chicago',
                'louisville': 'America/New_York',
                'cincinnati': 'America/New_York',
                'columbus': 'America/New_York',
                'indianapolis': 'America/New_York',
                'milwaukee': 'America/Chicago',
                'st. louis': 'America/Chicago',
                'oklahoma city': 'America/Chicago',
                'tulsa': 'America/Chicago',
                'albuquerque': 'America/Denver',
                'el paso': 'America/Denver',
                'tucson': 'America/Phoenix',
                'fresno': 'America/Los_Angeles',
                'sacramento': 'America/Los_Angeles',
                'oakland': 'America/Los_Angeles',
                'san jose': 'America/Los_Angeles',
                'san diego': 'America/Los_Angeles',
                'long beach': 'America/Los_Angeles',
                'anaheim': 'America/Los_Angeles',
                'bakersfield': 'America/Los_Angeles',
                'stockton': 'America/Los_Angeles',
                'riverside': 'America/Los_Angeles',
                'irvine': 'America/Los_Angeles',
                'fremont': 'America/Los_Angeles',
                'modesto': 'America/Los_Angeles',
                'oxnard': 'America/Los_Angeles',
                'fontana': 'America/Los_Angeles',
                'moreno valley': 'America/Los_Angeles',
                'huntington beach': 'America/Los_Angeles',
                'glendale': 'America/Los_Angeles',
                'santa clarita': 'America/Los_Angeles',
                'garden grove': 'America/Los_Angeles',
                'oceanside': 'America/Los_Angeles',
                'rancho cucamonga': 'America/Los_Angeles',
                'ontario': 'America/Los_Angeles',
                'lancaster': 'America/Los_Angeles',
                'palmdale': 'America/Los_Angeles',
                'corona': 'America/Los_Angeles',
                'salinas': 'America/Los_Angeles',
                'pomona': 'America/Los_Angeles',
                'santa rosa': 'America/Los_Angeles',
                
                // Additional common city variations
                'nyc': 'America/New_York',
                'la': 'America/Los_Angeles',
                'sf': 'America/Los_Angeles',
                'dc': 'America/New_York',
                'ny': 'America/New_York',
                'cal': 'America/Los_Angeles',
                'texas': 'America/Chicago',
                'florida': 'America/New_York',
                'california': 'America/Los_Angeles',
                'new jersey': 'America/New_York',
                'pennsylvania': 'America/New_York',
                'ohio': 'America/New_York',
                'michigan': 'America/New_York',
                'illinois': 'America/Chicago',
                'missouri': 'America/Chicago',
                'kansas': 'America/Chicago',
                'oklahoma': 'America/Chicago',
                'colorado': 'America/Denver',
                'arizona': 'America/Phoenix',
                'nevada': 'America/Los_Angeles',
                'utah': 'America/Denver',
                'washington': 'America/Los_Angeles',
                'oregon': 'America/Los_Angeles',
                'idaho': 'America/Denver',
                'montana': 'America/Denver',
                'wyoming': 'America/Denver',
                'north dakota': 'America/Chicago',
                'south dakota': 'America/Chicago',
                'nebraska': 'America/Chicago',
                'iowa': 'America/Chicago',
                'arkansas': 'America/Chicago',
                'mississippi': 'America/Chicago',
                'alabama': 'America/Chicago',
                'georgia': 'America/New_York',
                'tennessee': 'America/Chicago',
                'kentucky': 'America/New_York',
                'west virginia': 'America/New_York',
                'virginia': 'America/New_York',
                'north carolina': 'America/New_York',
                'south carolina': 'America/New_York',
                'maryland': 'America/New_York',
                'delaware': 'America/New_York',
                'vermont': 'America/New_York',
                'new hampshire': 'America/New_York',
                'maine': 'America/New_York',
                'rhode island': 'America/New_York',
                'connecticut': 'America/New_York',
                'massachusetts': 'America/New_York',
                'minnesota': 'America/Chicago',
                'wisconsin': 'America/Chicago',
                'indiana': 'America/New_York',
                'louisiana': 'America/Chicago',
                'alaska': 'America/Anchorage',
                'hawaii': 'Pacific/Honolulu'
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
        // Find the location in allLocations to get the proper display name
        const location = this.allLocations.find(loc => loc.timezone === timezone);
        if (location) {
            return location.name;
        }
        
        // Fallback: convert timezone format to readable city name
        const timezoneParts = timezone.split('/');
        if (timezoneParts.length >= 2) {
            const cityName = timezoneParts[timezoneParts.length - 1];
            // Convert underscores to spaces and capitalize properly
            return cityName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }
        
        return timezone;
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

        // Update all times every second
        setInterval(() => {
            this.updateAllTimes();
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

    // Tab switching functionality
    switchTab(tabName) {
        // Update active tab button
        document.querySelectorAll('.nav-tab').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Hide all sections first
        document.querySelectorAll('.feature-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        if (tabName === 'clock') {
            document.getElementById('clockSection').style.display = 'flex';
        } else if (tabName === 'alarm') {
            document.getElementById('alarmSection').style.display = 'flex';
        } else if (tabName === 'stopwatch') {
            document.getElementById('stopwatchSection').style.display = 'flex';
        } else if (tabName === 'comparison') {
            document.getElementById('comparisonSection').style.display = 'flex';
        } else if (tabName === 'calculator') {
            document.getElementById('calculatorSection').style.display = 'flex';
        } else if (tabName === 'map') {
            document.getElementById('mapSection').style.display = 'flex';
            this.renderWorldMap();
        }
    }

    // Alarm functionality
    setAlarm() {
        const alarmTimeInput = document.getElementById('alarmTime');
        const alarmTime = alarmTimeInput.value;

        if (!alarmTime) {
            this.showError('Please select a time for the alarm');
        return;
    }

        // Check if alarm time is in the past
        const now = new Date();
        const [hours, minutes] = alarmTime.split(':').map(Number);
        const alarmDate = new Date();
        alarmDate.setHours(hours, minutes, 0, 0);
        
        if (alarmDate <= now) {
            this.showError('Please select a future time for the alarm');
            return;
        }

        const alarm = {
            id: Date.now(),
            time: alarmTime,
            active: true
        };

        this.alarms.push(alarm);
        this.saveAlarms();
        this.renderAlarms();
        alarmTimeInput.value = '';

        // Show success message
        this.showNotification(`✅ Alarm set for ${alarmTime}`);
        
        // Also show a more prominent success message
        const successMsg = document.createElement('div');
        successMsg.innerHTML = `⏰ Alarm set for <strong>${alarmTime}</strong>`;
        successMsg.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #28a745;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(40, 167, 69, 0.4);
            z-index: 1000;
            font-weight: 500;
            animation: fadeInUp 0.3s ease-out;
        `;
        document.body.appendChild(successMsg);
        
        setTimeout(() => {
            if (successMsg.parentNode) {
                successMsg.parentNode.removeChild(successMsg);
            }
        }, 3000);
    }

    deleteAlarm(alarmId) {
        this.alarms = this.alarms.filter(alarm => alarm.id !== alarmId);
        this.saveAlarms();
        this.renderAlarms();
    }

    toggleAlarm(alarmId) {
        const alarm = this.alarms.find(a => a.id === alarmId);
        if (alarm) {
            alarm.active = !alarm.active;
            this.saveAlarms();
            this.renderAlarms();
        }
    }

    testAlarm(alarmId) {
        const alarm = this.alarms.find(a => a.id === alarmId);
        if (alarm) {
            this.triggerAlarm(alarm);
        }
    }

    renderAlarms() {
        const alarmList = document.getElementById('alarmList');
        alarmList.innerHTML = '';

        if (this.alarms.length === 0) {
            alarmList.innerHTML = '<p style="color: rgba(255,255,255,0.7); text-align: center;">No alarms set</p>';
            return;
        }

        this.alarms.forEach(alarm => {
            const alarmItem = document.createElement('div');
            alarmItem.className = 'alarm-item';
            alarmItem.innerHTML = `
                <div>
                    <div class="alarm-time">${alarm.time}</div>
                    <div class="alarm-status">${alarm.active ? 'Active' : 'Inactive'}</div>
                </div>
                <div class="alarm-controls">
                    <button class="toggle-alarm" onclick="worldClock.toggleAlarm(${alarm.id})" 
                            style="padding: 0.25rem 0.5rem; margin-right: 0.5rem; background: ${alarm.active ? '#dc3545' : '#28a745'}; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        ${alarm.active ? 'Stop' : 'Start'}
                    </button>
                    <button class="test-alarm" onclick="worldClock.testAlarm(${alarm.id})" 
                            style="padding: 0.25rem 0.5rem; margin-right: 0.5rem; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        Test
                    </button>
                    <button class="delete-alarm" onclick="worldClock.deleteAlarm(${alarm.id})" 
                            style="padding: 0.25rem 0.5rem; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">×</button>
                </div>
            `;
            alarmList.appendChild(alarmItem);
        });
    }

    startAlarmCheck() {
        this.alarmCheckInterval = setInterval(() => {
            this.checkAlarms();
        }, 1000);
    }

    checkAlarms() {
        const now = new Date();

        this.alarms.forEach(alarm => {
            if (!alarm.active) return;
            
            // Parse the alarm time (HH:MM format)
            const [alarmHour, alarmMinute] = alarm.time.split(':').map(Number);
            
            // Get current time in local timezone (since alarm input is local time)
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
            
            // Check if alarm should trigger (exact minute match)
            if (alarmHour === currentHour && alarmMinute === currentMinute) {
                // Check if we haven't already triggered this alarm this minute
                const alarmKey = `${alarm.id}-${currentHour}-${currentMinute}`;
                if (!this.triggeredAlarms || !this.triggeredAlarms.has(alarmKey)) {
                this.triggerAlarm(alarm);
                    
                    // Track triggered alarms to prevent multiple triggers
                    if (!this.triggeredAlarms) this.triggeredAlarms = new Set();
                    this.triggeredAlarms.add(alarmKey);
                    
                    // Remove the key after 1 minute to allow re-triggering
                    setTimeout(() => {
                        this.triggeredAlarms.delete(alarmKey);
                    }, 60000);
                }
            }
        });
    }

    triggerAlarm(alarm) {
        // Show browser notification if permission is granted
        if (this.notificationPermission && 'Notification' in window) {
            new Notification('⏰ Alarm!', {
                body: `Time: ${alarm.time}`,
                icon: '/favicon.ico',
                tag: `alarm-${alarm.id}`,
                requireInteraction: true
            });
        }

        // Create alarm notification
        const notification = document.createElement('div');
        notification.className = 'alarm-notification';
        notification.innerHTML = `
            <div style="text-align: center;">
                <h3 style="margin-bottom: 1rem;">⏰ Alarm!</h3>
                <p style="margin-bottom: 1rem;">Time: ${alarm.time}</p>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="padding: 0.5rem 1rem; background: #667eea; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Dismiss
                </button>
            </div>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            z-index: 10000;
            animation: fadeIn 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Play alarm sound (if supported)
        this.playAlarmSound();

        // Make the page title flash to get user's attention
        this.flashPageTitle();

        // Auto-dismiss after 30 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            this.stopPageTitleFlash();
        }, 30000);
    }

    flashPageTitle() {
        this.originalTitle = document.title;
        this.titleFlashInterval = setInterval(() => {
            document.title = document.title === this.originalTitle ? '⏰ ALARM! ⏰' : this.originalTitle;
        }, 500);
    }

    stopPageTitleFlash() {
        if (this.titleFlashInterval) {
            clearInterval(this.titleFlashInterval);
            this.titleFlashInterval = null;
        }
        if (this.originalTitle) {
            document.title = this.originalTitle;
        }
    }

    playAlarmSound() {
        try {
            if (!this.audioContext) {
                this.initializeAudioContext();
            }
            
            if (this.audioContext && this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }
            
            if (this.audioContext && this.audioContext.state === 'running') {
                // Create a more noticeable alarm sound
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                // Create a sequence of beeps
                const now = this.audioContext.currentTime;
                
                // First beep
                oscillator.frequency.setValueAtTime(800, now);
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(0.3, now + 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                
                // Second beep
                oscillator.frequency.setValueAtTime(1000, now + 0.4);
                gainNode.gain.setValueAtTime(0, now + 0.4);
                gainNode.gain.linearRampToValueAtTime(0.3, now + 0.5);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.7);
                
                // Third beep
                oscillator.frequency.setValueAtTime(600, now + 0.8);
                gainNode.gain.setValueAtTime(0, now + 0.8);
                gainNode.gain.linearRampToValueAtTime(0.3, now + 0.9);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 1.1);
                
                oscillator.start(now);
                oscillator.stop(now + 1.2);
                
                // Clean up
                oscillator.onended = () => {
                    oscillator.disconnect();
                    gainNode.disconnect();
                };
            }
        } catch (error) {
            console.warn('Could not play alarm sound:', error);
            // Fallback: try to play a simple beep using the old method
            try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
            } catch (fallbackError) {
                console.warn('Fallback alarm sound also failed:', fallbackError);
            }
        }
    }

    saveAlarms() {
        localStorage.setItem('worldClockAlarms', JSON.stringify(this.alarms));
    }

    loadAlarms() {
        const savedAlarms = localStorage.getItem('worldClockAlarms');
        if (savedAlarms) {
            this.alarms = JSON.parse(savedAlarms);
            this.renderAlarms();
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Stopwatch functionality
    startStopwatch() {
        if (!this.stopwatchRunning) {
            this.stopwatchRunning = true;
            this.stopwatchInterval = setInterval(() => {
                this.stopwatchTime += 10;
                this.updateStopwatchDisplay();
            }, 10);

            document.getElementById('startStopwatchBtn').textContent = 'Lap';
            document.getElementById('pauseStopwatchBtn').disabled = false;
        } else {
            // Lap functionality
            this.addLap();
        }
    }

    pauseStopwatch() {
        this.stopwatchRunning = false;
        clearInterval(this.stopwatchInterval);
        
        document.getElementById('startStopwatchBtn').textContent = 'Resume';
        document.getElementById('pauseStopwatchBtn').disabled = true;
    }

    resetStopwatch() {
        this.stopwatchRunning = false;
        clearInterval(this.stopwatchInterval);
        this.stopwatchTime = 0;
        this.lapTimes = [];
        
        document.getElementById('startStopwatchBtn').textContent = 'Start';
        document.getElementById('pauseStopwatchBtn').disabled = true;
        
        this.updateStopwatchDisplay();
        this.renderLapTimes();
    }

    updateStopwatchDisplay() {
        const display = document.getElementById('stopwatchDisplay');
        const time = this.formatStopwatchTime(this.stopwatchTime);
        display.textContent = time;
    }

    formatStopwatchTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const centiseconds = Math.floor((milliseconds % 1000) / 10);

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
    }

    addLap() {
        const lapTime = this.stopwatchTime;
        this.lapTimes.push({
            number: this.lapTimes.length + 1,
            time: lapTime
        });
        this.renderLapTimes();
    }

    renderLapTimes() {
        const lapContainer = document.getElementById('lapTimes');
        lapContainer.innerHTML = '';

        if (this.lapTimes.length === 0) {
            return;
        }

        this.lapTimes.forEach(lap => {
            const lapItem = document.createElement('div');
            lapItem.className = 'lap-item';
            lapItem.innerHTML = `
                <span class="lap-number">Lap ${lap.number}</span>
                <span class="lap-time">${this.formatStopwatchTime(lap.time)}</span>
            `;
            lapContainer.appendChild(lapItem);
        });
    }

    // Enhanced Features Methods

    // Settings Management
    loadSettings() {
        const settings = JSON.parse(localStorage.getItem('worldClockSettings') || '{}');
        this.is24HourFormat = settings.is24HourFormat !== undefined ? settings.is24HourFormat : true;
        this.isDarkMode = settings.isDarkMode !== undefined ? settings.isDarkMode : true;
        this.favorites = JSON.parse(localStorage.getItem('worldClockFavorites') || '[]');
        this.comparisonLocations = JSON.parse(localStorage.getItem('worldClockComparison') || '[]');
        
        // Update UI elements
        document.getElementById('timeFormatToggle').checked = this.is24HourFormat;
    }

    saveSettings() {
        const settings = {
            is24HourFormat: this.is24HourFormat,
            isDarkMode: this.isDarkMode
        };
        localStorage.setItem('worldClockSettings', JSON.stringify(settings));
        localStorage.setItem('worldClockFavorites', JSON.stringify(this.favorites));
        localStorage.setItem('worldClockComparison', JSON.stringify(this.comparisonLocations));
    }

    // Theme Management
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
        this.saveSettings();
    }

    applyTheme() {
        const body = document.body;
        const themeIcon = document.querySelector('.theme-icon');
        
        if (this.isDarkMode) {
            body.classList.remove('light-mode');
            themeIcon.textContent = '🌙';
        } else {
            body.classList.add('light-mode');
            themeIcon.textContent = '☀️';
        }
    }

    // Time Format Management
    toggleTimeFormat() {
        this.is24HourFormat = !this.is24HourFormat;
        this.saveSettings();
        this.updateAllTimes();
    }

    // Search Functionality
    handleSearch(query) {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }

        this.searchTimeout = setTimeout(() => {
            if (query.length < 2) {
                this.hideSearchResults();
                return;
            }

            const queryLower = query.toLowerCase();
            console.log('Searching for:', queryLower);
            
            // First, try to find exact name matches
            let results = this.allLocations.filter(location => 
                location.name.toLowerCase() === queryLower
            );
            console.log('Exact matches:', results.map(r => r.name));
            
            // If no exact matches, find partial name matches
            if (results.length === 0) {
                results = this.allLocations.filter(location => 
                    location.name.toLowerCase().includes(queryLower)
                );
                console.log('Partial matches:', results.map(r => r.name));
            }
            
            // If still no results, search by country
            if (results.length === 0) {
                results = this.allLocations.filter(location => 
                    location.country.toLowerCase().includes(queryLower)
                );
                console.log('Country matches:', results.map(r => r.name));
            }
            
            // If still no results, search by timezone
            if (results.length === 0) {
                results = this.allLocations.filter(location => 
                    location.timezone.toLowerCase().includes(queryLower)
                );
                console.log('Timezone matches:', results.map(r => r.name));
            }

            console.log('Final results:', results.map(r => r.name));
            this.showSearchResults(results.slice(0, 10));
        }, 300);
    }

    showSearchResults(results = []) {
        const searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = '';
        searchResults.style.display = 'block';

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
            return;
        }

        // Debug: Log the results to console
        console.log('Search results:', results.map(r => r.name));

        results.forEach(location => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span>${location.flag}</span>
                    <span>${location.countryEmoji || ''}</span>
                    <span>${location.name}, ${location.country}</span>
                </div>
            `;
            resultItem.addEventListener('click', () => {
                this.setActiveLocation(location.timezone);
                this.hideSearchResults();
                document.getElementById('locationSearch').value = '';
            });
            searchResults.appendChild(resultItem);
        });
    }

    hideSearchResults() {
        document.getElementById('searchResults').style.display = 'none';
    }

    // Favorites Management
    toggleFavorite(timezone) {
        const location = this.allLocations.find(loc => loc.timezone === timezone);
        if (!location) return;

        const index = this.favorites.findIndex(fav => fav.timezone === timezone);
        if (index > -1) {
            this.favorites.splice(index, 1);
        } else {
            this.favorites.push(location);
        }

        this.saveSettings();
        this.renderFavorites();
    }

    renderFavorites() {
        const favoritesList = document.getElementById('favoritesList');
        favoritesList.innerHTML = '';

        if (this.favorites.length === 0) {
            favoritesList.innerHTML = '<p style="color: rgba(255,255,255,0.7); text-align: center; font-size: 0.9rem;">No favorites yet</p>';
            return;
        }

        this.favorites.forEach(location => {
            const favoriteItem = document.createElement('div');
            favoriteItem.className = 'favorite-item';
            favoriteItem.innerHTML = `
                <div class="favorite-info">
                    <span class="favorite-flag">${location.flag}</span>
                    <span class="favorite-country-emoji">${location.countryEmoji || ''}</span>
                    <div>
                        <div class="favorite-name">${location.name}</div>
                        <div class="favorite-time" id="fav-${location.timezone}">--:--</div>
                    </div>
                </div>
                <button class="remove-favorite" onclick="worldClock.toggleFavorite('${location.timezone}')">×</button>
            `;
            favoriteItem.addEventListener('click', () => this.setActiveLocation(location.timezone));
            favoritesList.appendChild(favoriteItem);
        });
    }

    // Popular Locations with Enhanced Features
    renderPopularLocations() {
        const popularLocations = document.getElementById('popularLocations');
        popularLocations.innerHTML = '';

        this.popularLocations.forEach(location => {
            const locationItem = document.createElement('div');
            locationItem.className = 'location-item';
            locationItem.innerHTML = `
                <div class="location-info">
                    <span class="location-flag">${location.flag}</span>
                    <span class="location-country-emoji">${location.countryEmoji || ''}</span>
                    <div>
                        <div class="location-name">${location.name}</div>
                        <div class="location-time" id="pop-${location.timezone}">--:--</div>
                    </div>
                </div>
                <div class="location-actions">
                    <button class="location-action" onclick="worldClock.toggleFavorite('${location.timezone}')" title="Add to favorites">
                        ${this.favorites.find(fav => fav.timezone === location.timezone) ? '★' : '☆'}
                    </button>
                    <button class="location-action" onclick="worldClock.addToComparison('${location.timezone}')" title="Add to comparison">
                        +
                    </button>
                </div>
            `;
            locationItem.addEventListener('click', () => this.setActiveLocation(location.timezone));
            popularLocations.appendChild(locationItem);
        });
    }

    // Time Comparison
    addToComparison(timezone) {
        const location = this.allLocations.find(loc => loc.timezone === timezone);
        if (!location || this.comparisonLocations.find(comp => comp.timezone === timezone)) {
            return;
        }

        this.comparisonLocations.push(location);
        this.saveSettings();
        this.renderComparisonGrid();
        
        // Show notification
        this.showNotification(`Added ${location.name} to comparison`);
    }

    addComparisonLocation() {
        // Show a modal or dropdown to select location
        this.showLocationSelector('comparison');
    }

    clearComparison() {
        this.comparisonLocations = [];
        this.saveSettings();
        this.renderComparisonGrid();
    }

    renderComparisonGrid() {
        const comparisonGrid = document.getElementById('comparisonGrid');
        comparisonGrid.innerHTML = '';

        if (this.comparisonLocations.length === 0) {
            comparisonGrid.innerHTML = '<p style="color: rgba(255,255,255,0.7); text-align: center; grid-column: 1 / -1;">Add locations to compare times</p>';
            return;
        }

        this.comparisonLocations.forEach(location => {
            const comparisonCard = document.createElement('div');
            comparisonCard.className = 'comparison-card';
            comparisonCard.innerHTML = `
                <div class="comparison-header">
                    <div class="comparison-location">
                        <span class="comparison-flag">${location.flag}</span>
                        <span class="comparison-country-emoji">${location.countryEmoji || ''}</span>
                        <span class="comparison-name">${location.name}</span>
                    </div>
                    <button class="location-action" onclick="worldClock.removeFromComparison('${location.timezone}')">×</button>
                </div>
                <div class="comparison-time" id="comp-${location.timezone}">--:--</div>
                <div class="comparison-date" id="comp-date-${location.timezone}">--</div>
                <div class="comparison-info">
                    <span id="comp-day-${location.timezone}">--</span>
                    <span class="day-night-indicator" id="comp-indicator-${location.timezone}">--</span>
                </div>
            `;
            comparisonGrid.appendChild(comparisonCard);
        });
        
        // Immediately update the times after rendering
        this.updateComparisonTimes();
    }

    updateComparisonTimes() {
        this.comparisonLocations.forEach(location => {
            const timeElement = document.getElementById(`comp-${location.timezone}`);
            const dateElement = document.getElementById(`comp-date-${location.timezone}`);
            const dayElement = document.getElementById(`comp-day-${location.timezone}`);
            const indicatorElement = document.getElementById(`comp-indicator-${location.timezone}`);
            
            if (timeElement) {
                timeElement.textContent = this.getLocationTime(location.timezone);
            }
            if (dateElement) {
                const now = new Date();
                const targetTime = new Date(now.toLocaleString("en-US", {timeZone: location.timezone}));
                dateElement.textContent = targetTime.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                });
            }
            if (dayElement) {
                const now = new Date();
                const targetTime = new Date(now.toLocaleString("en-US", {timeZone: location.timezone}));
                dayElement.textContent = targetTime.toLocaleDateString('en-US', { weekday: 'short' });
            }
            if (indicatorElement) {
                indicatorElement.textContent = this.isDaytime(location.timezone) ? '☀️' : '🌙';
            }
        });
    }

    removeFromComparison(timezone) {
        this.comparisonLocations = this.comparisonLocations.filter(loc => loc.timezone !== timezone);
        this.saveSettings();
        this.renderComparisonGrid();
    }

    // Time Calculator
    populateCalculatorDropdowns() {
        const fromSelect = document.getElementById('calcFromTimezone');
        const toSelect = document.getElementById('calcToTimezone');

        fromSelect.innerHTML = '<option value="">Select timezone</option>';
        toSelect.innerHTML = '<option value="">Select timezone</option>';

        this.allLocations.forEach(location => {
            const option = `<option value="${location.timezone}">${location.flag} ${location.name}</option>`;
            fromSelect.innerHTML += option;
            toSelect.innerHTML += option;
        });
    }

    calculateTimeDifference() {
        const fromTimezone = document.getElementById('calcFromTimezone').value;
        const toTimezone = document.getElementById('calcToTimezone').value;
        const resultDiv = document.getElementById('calculatorResult');

        if (!fromTimezone || !toTimezone) {
            resultDiv.innerHTML = '';
            return;
        }

        const now = new Date();
        const fromTime = new Date(now.toLocaleString("en-US", {timeZone: fromTimezone}));
        const toTime = new Date(now.toLocaleString("en-US", {timeZone: toTimezone}));

        const diffMs = toTime.getTime() - fromTime.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

        const fromLocation = this.allLocations.find(loc => loc.timezone === fromTimezone);
        const toLocation = this.allLocations.find(loc => loc.timezone === toTimezone);

        resultDiv.innerHTML = `
            <h4>Time Difference</h4>
            <p><strong>${fromLocation.flag} ${fromLocation.name}</strong> to <strong>${toLocation.flag} ${toLocation.name}</strong></p>
            <p>Difference: <strong>${diffHours > 0 ? '+' : ''}${diffHours}h ${diffMinutes}m</strong></p>
            <p>When it's 12:00 PM in ${fromLocation.name}, it's ${this.formatTime(12 + diffHours, 0, toTimezone)} in ${toLocation.name}</p>
        `;
    }

    // World Map functionality
    renderWorldMap() {
        const worldMap = document.getElementById('worldMap');
        worldMap.innerHTML = '';

        // Create map grid
        const mapGrid = document.createElement('div');
        mapGrid.className = 'map-grid';

        // Add all locations to the map
        this.allLocations.forEach(location => {
            const mapLocation = document.createElement('div');
            mapLocation.className = 'map-location';
            mapLocation.innerHTML = `
                <div class="map-location-header">
                    <span class="map-location-flag">${location.flag}</span>
                    <span class="map-location-name">${location.name}</span>
                </div>
                <div class="map-location-time" id="map-${location.timezone}">--:--</div>
                <div class="map-location-info">
                    <span id="map-day-${location.timezone}">--</span>
                    <span id="map-indicator-${location.timezone}">--</span>
                </div>
            `;
            
            mapLocation.addEventListener('click', () => {
                this.setActiveLocation(location.timezone);
                this.switchTab('clock');
            });
            
            mapGrid.appendChild(mapLocation);
        });

        worldMap.appendChild(mapGrid);
        this.updateMapTimes();
    }

    updateMapTimes() {
        this.allLocations.forEach(location => {
            const timeElement = document.getElementById(`map-${location.timezone}`);
            const dayElement = document.getElementById(`map-day-${location.timezone}`);
            const indicatorElement = document.getElementById(`map-indicator-${location.timezone}`);
            
            if (timeElement) {
                timeElement.textContent = this.getLocationTime(location.timezone);
            }
            if (dayElement) {
                const now = new Date();
                const targetTime = new Date(now.toLocaleString("en-US", {timeZone: location.timezone}));
                dayElement.textContent = targetTime.toLocaleDateString('en-US', { weekday: 'short' });
            }
            if (indicatorElement) {
                indicatorElement.textContent = this.isDaytime(location.timezone) ? '☀️' : '🌙';
            }
        });
    }

    showAllMapTimes() {
        const mapInfo = document.getElementById('mapInfo');
        let info = '<h4>World Times Overview</h4>';
        
        this.allLocations.forEach(location => {
            const time = this.getLocationTime(location.timezone);
            const isDay = this.isDaytime(location.timezone);
            const indicator = isDay ? '☀️' : '🌙';
            const now = new Date();
            const targetTime = new Date(now.toLocaleString("en-US", {timeZone: location.timezone}));
            const day = targetTime.toLocaleDateString('en-US', { weekday: 'short' });
            
            info += `<p>
                <span>${location.flag} ${location.name}</span>
                <span>${time} ${indicator} ${day}</span>
            </p>`;
        });
        
        mapInfo.innerHTML = info;
    }

    hideAllMapTimes() {
        document.getElementById('mapInfo').innerHTML = '';
    }

    // Utility Methods
    getLocationTime(timezone) {
        const now = new Date();
        const targetTime = new Date(now.toLocaleString("en-US", {timeZone: timezone}));
        return targetTime.toLocaleTimeString('en-US', {
            hour12: !this.is24HourFormat,
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    formatTime(hours, minutes, timezone) {
        const now = new Date();
        const targetTime = new Date(now.toLocaleString("en-US", {timeZone: timezone}));
        targetTime.setHours(hours, minutes, 0, 0);
        
        return targetTime.toLocaleTimeString('en-US', {
            hour12: !this.is24HourFormat,
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    isDaytime(timezone) {
        const now = new Date();
        const targetTime = new Date(now.toLocaleString("en-US", {timeZone: timezone}));
        const hour = targetTime.getHours();
        return hour >= 6 && hour < 18;
    }

    updateAllTimes() {
        // Update all time displays
        this.updatePopularLocations();
        this.renderFavorites();
        this.updateComparisonTimes();
        this.updateMapTimes();
    }

    updatePopularLocations() {
        this.popularLocations.forEach(location => {
            const timeElement = document.getElementById(`pop-${location.timezone}`);
            if (timeElement) {
                timeElement.textContent = this.getLocationTime(location.timezone);
            }
        });

        this.favorites.forEach(location => {
            const timeElement = document.getElementById(`fav-${location.timezone}`);
            if (timeElement) {
                timeElement.textContent = this.getLocationTime(location.timezone);
            }
        });

        this.comparisonLocations.forEach(location => {
            const timeElement = document.getElementById(`comp-${location.timezone}`);
            const dateElement = document.getElementById(`comp-date-${location.timezone}`);
            const dayElement = document.getElementById(`comp-day-${location.timezone}`);
            const indicatorElement = document.getElementById(`comp-indicator-${location.timezone}`);
            
            if (timeElement) {
                timeElement.textContent = this.getLocationTime(location.timezone);
            }
            if (dateElement) {
                const now = new Date();
                const targetTime = new Date(now.toLocaleString("en-US", {timeZone: location.timezone}));
                dateElement.textContent = targetTime.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                });
            }
            if (dayElement) {
                const now = new Date();
                const targetTime = new Date(now.toLocaleString("en-US", {timeZone: location.timezone}));
                dayElement.textContent = targetTime.toLocaleDateString('en-US', { weekday: 'short' });
            }
            if (indicatorElement) {
                indicatorElement.textContent = this.isDaytime(location.timezone) ? '☀️' : '🌙';
            }
        });
    }

    showLocationSelector(type) {
        // Simple implementation - could be enhanced with a modal
        const location = prompt('Enter location name:');
        if (location) {
            const foundLocation = this.allLocations.find(loc => 
                loc.name.toLowerCase().includes(location.toLowerCase())
            );
            if (foundLocation) {
                if (type === 'comparison') {
                    this.addToComparison(foundLocation.timezone);
                }
            } else {
                this.showError('Location not found');
            }
        }
    }

    // Comprehensive Flag System
    getFlagForCountry(countryName) {
        const flagMap = {
            // Major Countries
            'USA': '🇺🇸', 'United States': '🇺🇸', 'America': '🇺🇸', 'US': '🇺🇸',
            'UK': '🇬🇧', 'United Kingdom': '🇬🇧', 'England': '🇬🇧', 'Britain': '🇬🇧', 'Great Britain': '🇬🇧',
            'Japan': '🇯🇵', 'Nippon': '🇯🇵',
            'France': '🇫🇷', 'French Republic': '🇫🇷',
            'India': '🇮🇳', 'Bharat': '🇮🇳',
            'Australia': '🇦🇺', 'Oz': '🇦🇺',
            'Germany': '🇩🇪', 'Deutschland': '🇩🇪',
            'UAE': '🇦🇪', 'United Arab Emirates': '🇦🇪',
            'Singapore': '🇸🇬', 'Singapura': '🇸🇬',
            'Canada': '🇨🇦', 'Canadian': '🇨🇦',
            'Russia': '🇷🇺', 'Russian Federation': '🇷🇺',
            'China': '🇨🇳', 'PRC': '🇨🇳', 'People\'s Republic of China': '🇨🇳',
            'South Korea': '🇰��', 'Korea': '��🇷', 'ROK': '🇰🇷', 'Republic of Korea': '🇰🇷',
            'Thailand': '🇹🇭', 'Siam': '🇹🇭',
            'Egypt': '🇪🇬', 'Misr': '🇪🇬',
            'Mexico': '🇲🇽', 'México': '🇲🇽',
            'Brazil': '🇧🇷', 'Brasil': '🇧🇷',
            'Argentina': '🇦🇷', 'Argentine Republic': '🇦🇷',
            
            // European Countries
            'Spain': '🇪🇸', 'España': '🇪🇸',
            'Italy': '🇮🇹', 'Italia': '🇮🇹',
            'Netherlands': '🇳🇱', 'Holland': '🇳🇱', 'The Netherlands': '🇳🇱',
            'Sweden': '🇸🇪', 'Sverige': '🇸🇪',
            'Norway': '🇳🇴', 'Norge': '🇳🇴',
            'Denmark': '🇩🇰', 'Danmark': '🇩🇰',
            'Finland': '🇫🇮', 'Suomi': '🇫🇮',
            'Poland': '🇵🇱', 'Polska': '🇵🇱',
            'Czech Republic': '🇨🇿', 'Czech': '🇨🇿', 'Czechia': '🇨🇿',
            'Austria': '🇦🇹', 'Österreich': '🇦🇹',
            'Hungary': '🇭🇺', 'Magyarország': '🇭🇺',
            'Greece': '🇬🇷', 'Hellas': '🇬🇷',
            'Turkey': '🇹🇷', 'Türkiye': '🇹🇷',
            'Israel': '🇮🇱', 'State of Israel': '🇮🇱',
            'Saudi Arabia': '🇸🇦', 'KSA': '🇸🇦',
            'Qatar': '🇶🇦', 'State of Qatar': '🇶🇦',
            'Kuwait': '🇰🇼', 'State of Kuwait': '🇰🇼',
            'Philippines': '🇵🇭', 'Pilipinas': '🇵🇭',
            'Indonesia': '🇮🇩', 'Republik Indonesia': '🇮🇩',
            'Malaysia': '🇲🇾', 'Malaysia': '🇲🇾',
            'Vietnam': '🇻🇳', 'Việt Nam': '🇻🇳',
            'Cambodia': '🇰🇭', 'Kampuchea': '🇰🇭',
            'Laos': '🇱🇦', 'Lao PDR': '🇱🇦',
            'Myanmar': '🇲🇲', 'Burma': '🇲🇲', 'Myanmar': '🇲🇲',
            'Bangladesh': '🇧🇩', 'BD': '🇧🇩',
            'Sri Lanka': '🇱🇰', 'Ceylon': '🇱🇰',
            'Nepal': '🇳🇵', 'NP': '🇳🇵',
            'Bhutan': '🇧🇹', 'BT': '🇧🇹',
            'Mongolia': '🇲🇳', 'MN': '🇲🇳',
            'Kazakhstan': '🇰🇿', 'KZ': '🇰🇿',
            'Uzbekistan': '🇺🇿', 'UZ': '🇺🇿',
            'Kyrgyzstan': '🇰🇬', 'KG': '🇰🇬',
            'Tajikistan': '🇹🇯', 'TJ': '🇹🇯',
            'Turkmenistan': '🇹🇲', 'TM': '🇹🇲',
            'Azerbaijan': '🇦🇿', 'AZ': '🇦🇿',
            'Georgia': '🇬🇪', 'GE': '🇬🇪',
            'Armenia': '🇦🇲', 'AM': '🇦🇲',
            'Iran': '🇮🇷', 'Persia': '🇮🇷', 'Islamic Republic of Iran': '🇮🇷',
            'Iraq': '🇮🇶', 'IQ': '🇮🇶',
            'Syria': '🇸🇾', 'SY': '🇸🇾',
            'Lebanon': '🇱🇧', 'LB': '🇱🇧',
            'Jordan': '🇯🇴', 'JO': '🇯🇴',
            'Yemen': '🇾🇪', 'YE': '🇾🇪',
            'Oman': '🇴🇲', 'OM': '🇴🇲',
            'Bahrain': '🇧🇭', 'Kingdom of Bahrain': '🇧🇭',
            'United Arab Emirates': '🇦🇪', 'UAE': '🇦🇪',
            'Kuwait': '🇰🇼', 'State of Kuwait': '🇰🇼',
            'Qatar': '🇶🇦', 'State of Qatar': '🇶🇦',
            'Afghanistan': '🇦🇫', 'Islamic Republic of Afghanistan': '🇦🇫',
            'Pakistan': '🇵🇰', 'Islamic Republic of Pakistan': '🇵🇰',
            'Kazakhstan': '🇰🇿', 'Republic of Kazakhstan': '🇰🇿',
            'Uzbekistan': '🇺🇿', 'Republic of Uzbekistan': '🇺🇿',
            'Kyrgyzstan': '🇰🇬', 'Kyrgyz Republic': '🇰🇬',
            'Tajikistan': '🇹🇯', 'Republic of Tajikistan': '🇹🇯',
            'Turkmenistan': '🇹🇲', 'TM': '🇹🇲',
            'Azerbaijan': '🇦🇿', 'Republic of Azerbaijan': '🇦🇿',
            'Georgia': '🇬🇪', 'GE': '🇬🇪',
            'Armenia': '🇦🇲', 'Republic of Armenia': '🇦🇲',
            'Iran': '🇮🇷', 'Islamic Republic of Iran': '🇮🇷',
            'Iraq': '🇮🇶', 'Republic of Iraq': '🇮🇶',
            'Syria': '🇸🇾', 'Syrian Arab Republic': '🇸🇾',
            'Lebanon': '🇱🇧', 'Lebanese Republic': '🇱🇧',
            'Jordan': '🇯🇴', 'Hashemite Kingdom of Jordan': '🇯🇴',
            'Yemen': '🇾🇪', 'Republic of Yemen': '🇾🇪',
            'Oman': '🇴🇲', 'Sultanate of Oman': '🇴🇲',
            'Bahrain': '🇧🇭', 'Kingdom of Bahrain': '🇧🇭',
            'United Arab Emirates': '🇦🇪', 'UAE': '🇦🇪',
            'Kuwait': '🇰🇼', 'State of Kuwait': '🇰🇼',
            'Qatar': '🇶🇦', 'State of Qatar': '🇶🇦',
            
            // African Countries
            'Nigeria': '🇳🇬', 'Federal Republic of Nigeria': '🇳🇬',
            'Kenya': '🇰🇪', 'Republic of Kenya': '🇰🇪',
            'Ethiopia': '🇪🇹', 'Federal Democratic Republic of Ethiopia': '🇪🇹',
            'Tanzania': '🇹🇿', 'United Republic of Tanzania': '🇹🇿',
            'Uganda': '🇺🇬', 'Republic of Uganda': '🇺🇬',
            'Sudan': '🇸🇩', 'Republic of Sudan': '🇸🇩',
            'Algeria': '🇩🇿', 'People\'s Democratic Republic of Algeria': '🇩🇿',
            'Morocco': '🇲🇦', 'Kingdom of Morocco': '🇲🇦',
            'Tunisia': '🇹🇳', 'Tunisian Republic': '🇹🇳',
            'Libya': '🇱🇾', 'State of Libya': '🇱🇾',
            'South Africa': '🇿🇦', 'RSA': '🇿🇦',
            'Namibia': '🇳🇦', 'Republic of Namibia': '🇳🇦',
            'Botswana': '🇧🇼', 'Republic of Botswana': '🇧🇼',
            'Zimbabwe': '🇿🇼', 'Republic of Zimbabwe': '🇿🇼',
            'Zambia': '🇿🇲', 'Republic of Zambia': '🇿🇲',
            'Mozambique': '🇲🇿', 'Republic of Mozambique': '🇲🇿',
            'Madagascar': '🇲🇬', 'Republic of Madagascar': '🇲🇬',
            'Mauritius': '🇲🇺', 'Republic of Mauritius': '🇲🇺',
            'Seychelles': '🇸🇨', 'Republic of Seychelles': '🇸🇨',
            'Ghana': '🇬🇭', 'Republic of Ghana': '🇬🇭',
            'Ivory Coast': '🇨🇮', 'Côte d\'Ivoire': '🇨🇮',
            'Senegal': '🇸🇳', 'Republic of Senegal': '🇸🇳',
            'Mali': '🇲🇱', 'Republic of Mali': '🇲🇱',
            'Burkina Faso': '🇧🇫', 'BF': '🇧🇫',
            'Niger': '🇳🇪', 'Republic of Niger': '🇳🇪',
            'Chad': '🇹🇩', 'Republic of Chad': '🇹🇩',
            'Cameroon': '🇨🇲', 'Republic of Cameroon': '🇨🇲',
            'Central African Republic': '🇨🇫', 'CAR': '🇨🇫',
            'Gabon': '🇬🇦', 'Gabonese Republic': '🇬🇦',
            'Congo': '🇨🇬', 'Republic of Congo': '🇨🇬',
            'DR Congo': '🇨🇩', 'Democratic Republic of Congo': '🇨🇩',
            'Angola': '🇦🇴', 'Republic of Angola': '🇦🇴',
            'Malawi': '🇲🇼', 'Republic of Malawi': '🇲🇼',
            'Zambia': '🇿🇲', 'Republic of Zambia': '🇿🇲',
            'Lesotho': '🇱🇸', 'Kingdom of Lesotho': '🇱🇸',
            'Eswatini': '🇸🇿', 'Swaziland': '🇸🇿',
            'Comoros': '🇰🇲', 'Union of Comoros': '🇰🇲',
            'Djibouti': '🇩🇯', 'Republic of Djibouti': '🇩🇯',
            'Eritrea': '🇪🇷', 'State of Eritrea': '🇪🇷',
            'Somalia': '🇸🇴', 'Federal Republic of Somalia': '🇸🇴',
            'South Sudan': '🇸🇸', 'Republic of South Sudan': '🇸🇸',
            'Burundi': '🇧🇮', 'Republic of Burundi': '🇧🇮',
            'Rwanda': '🇷🇼', 'Republic of Rwanda': '🇷🇼',
            'Togo': '🇹🇬', 'Togolese Republic': '🇹🇬',
            'Benin': '🇧🇯', 'Republic of Benin': '🇧🇯',
            'Sierra Leone': '🇸🇱', 'Republic of Sierra Leone': '🇸🇱',
            'Liberia': '🇱🇷', 'Republic of Liberia': '🇱🇷',
            'Guinea': '🇬🇳', 'Republic of Guinea': '🇬🇳',
            'Guinea-Bissau': '🇬🇼', 'Republic of Guinea-Bissau': '🇬🇼',
            'Cape Verde': '🇨🇻', 'Cabo Verde': '🇨🇻',
            'Gambia': '🇬🇲', 'Republic of Gambia': '🇬🇲',
            'Equatorial Guinea': '🇬🇶', 'Republic of Equatorial Guinea': '🇬🇶',
            'São Tomé and Príncipe': '🇸🇹', 'ST': '🇸🇹',
            
            // South American Countries
            'Chile': '🇨🇱', 'Republic of Chile': '🇨🇱',
            'Peru': '🇵🇪', 'Republic of Peru': '🇵🇪',
            'Colombia': '🇨🇴', 'Republic of Colombia': '🇨🇴',
            'Venezuela': '🇻🇪', 'Bolivarian Republic of Venezuela': '🇻🇪',
            'Ecuador': '🇪🇨', 'Republic of Ecuador': '🇪🇨',
            'Bolivia': '🇧🇴', 'Plurinational State of Bolivia': '🇧🇴',
            'Paraguay': '🇵🇾', 'Republic of Paraguay': '🇵🇾',
            'Uruguay': '🇺🇾', 'Oriental Republic of Uruguay': '🇺🇾',
            'Guyana': '🇬🇾', 'Cooperative Republic of Guyana': '🇬🇾',
            'Suriname': '🇸🇷', 'Republic of Suriname': '🇸🇷',
            'French Guiana': '🇬🇫',
            
            // Central American Countries
            'Guatemala': '🇬🇹',
            'Belize': '🇧🇿',
            'El Salvador': '🇸🇻',
            'Honduras': '🇭🇳',
            'Nicaragua': '🇳🇮',
            'Costa Rica': '🇨🇷',
            'Panama': '🇵🇦',
            
            // Caribbean Countries
            'Cuba': '🇨🇺',
            'Jamaica': '🇯🇲',
            'Haiti': '🇭🇹',
            'Dominican Republic': '🇩🇴',
            'Puerto Rico': '🇵🇷',
            'Trinidad and Tobago': '🇹🇹',
            'Barbados': '🇧🇧',
            'Bahamas': '🇧🇸',
            'Grenada': '🇬🇩',
            'Saint Lucia': '🇱🇨',
            'Saint Vincent': '🇻🇨',
            'Antigua and Barbuda': '🇦🇬',
            'Dominica': '🇩🇲',
            'Saint Kitts': '🇰🇳',
            'Saint Kitts and Nevis': '🇰🇳',
            'Saint Vincent and the Grenadines': '🇻🇨',
            'Antigua and Barbuda': '🇦🇬',
            'Dominica': '🇩🇲', 'Commonwealth of Dominica': '🇩🇲',
            'Saint Lucia': '🇱🇨',
            'Grenada': '🇬🇩',
            'Barbados': '🇧🇧',
            'Trinidad and Tobago': '🇹🇹', 'TT': '🇹🇹',
            'Bahamas': '🇧🇸', 'Commonwealth of Bahamas': '🇧🇸',
            'Jamaica': '🇯🇲',
            'Haiti': '🇭🇹', 'Republic of Haiti': '🇭🇹',
            'Dominican Republic': '🇩🇴', 'DR': '🇩🇴',
            'Puerto Rico': '🇵🇷', 'PR': '🇵🇷',
            'Cuba': '🇨🇺', 'Republic of Cuba': '🇨🇺',
            'Cayman Islands': '🇰🇾', 'KY': '🇰🇾',
            'Turks and Caicos': '🇹🇨', 'TC': '🇹🇨',
            'British Virgin Islands': '🇻🇬', 'BVI': '🇻🇬',
            'US Virgin Islands': '🇻🇮', 'VI': '🇻🇮',
            'Aruba': '🇦🇼', 'AW': '🇦🇼',
            'Curaçao': '🇨🇼', 'CW': '🇨🇼',
            'Bonaire': '🇧🇶', 'BQ': '🇧🇶',
            'Sint Maarten': '🇸🇽', 'SX': '🇸🇽',
            'Saint Martin': '🇲🇫', 'MF': '🇲🇫',
            'Saint Barthélemy': '🇧🇱', 'BL': '🇧🇱',
            'Martinique': '🇲🇶', 'MQ': '🇲🇶',
            'Guadeloupe': '🇬🇵', 'GP': '🇬🇵',
            'Greenland': '🇬🇱', 'GL': '🇬🇱',
            'Bermuda': '🇧🇲', 'BM': '🇧🇲',
            'Falkland Islands': '🇫🇰', 'FK': '🇫🇰',
            'South Georgia': '🇬🇸', 'GS': '🇬🇸',
            
            // Pacific Countries
            'New Zealand': '🇳🇿', 'NZ': '🇳🇿',
            'Fiji': '🇫🇯', 'Republic of Fiji': '🇫🇯',
            'Papua New Guinea': '🇵🇬', 'PNG': '🇵🇬',
            'Solomon Islands': '🇸🇧', 'SB': '🇸🇧',
            'Vanuatu': '🇻🇺', 'Republic of Vanuatu': '🇻🇺',
            'New Caledonia': '🇳🇨', 'NC': '🇳🇨',
            'French Polynesia': '🇵🇫', 'PF': '🇵🇫',
            'Samoa': '🇼🇸', 'Independent State of Samoa': '🇼🇸',
            'Tonga': '🇹🇴', 'Kingdom of Tonga': '🇹🇴',
            'Tuvalu': '🇹🇻', 'TV': '🇹🇻',
            'Kiribati': '🇰🇮', 'Republic of Kiribati': '🇰🇮',
            'Marshall Islands': '🇲🇭', 'Republic of Marshall Islands': '🇲🇭',
            'Micronesia': '🇫🇲', 'Federated States of Micronesia': '🇫🇲',
            'Palau': '🇵🇼', 'Republic of Palau': '🇵🇼',
            'Nauru': '🇳🇷', 'Republic of Nauru': '🇳🇷',
            'Cook Islands': '🇨🇰', 'CK': '🇨🇰',
            'Niue': '🇳🇺', 'NU': '🇳🇺',
            'Tokelau': '🇹🇰', 'TK': '🇹🇰',
            'American Samoa': '🇦🇸', 'AS': '🇦🇸',
            'Guam': '🇬🇺', 'GU': '🇬🇺',
            'Northern Mariana Islands': '🇲🇵', 'MP': '🇲🇵',
            'Hawaii': '🇺🇸', 'HI': '🇺🇸',
            
            // Other Countries
            'Iceland': '🇮🇸', 'Republic of Iceland': '🇮🇸',
            'Ireland': '🇮🇪', 'Republic of Ireland': '🇮🇪', 'Éire': '🇮🇪',
            'Portugal': '🇵🇹', 'Portuguese Republic': '🇵🇹',
            'Switzerland': '🇨🇭', 'Swiss Confederation': '🇨🇭',
            'Belgium': '🇧🇪', 'Kingdom of Belgium': '🇧🇪',
            'Luxembourg': '🇱🇺', 'Grand Duchy of Luxembourg': '🇱🇺',
            'Monaco': '🇲🇨', 'Principality of Monaco': '🇲🇨',
            'Liechtenstein': '🇱🇮', 'Principality of Liechtenstein': '🇱🇮',
            'Andorra': '🇦🇩', 'Principality of Andorra': '🇦🇩',
            'San Marino': '🇸🇲', 'Republic of San Marino': '🇸🇲',
            'Vatican City': '🇻🇦', 'Holy See': '🇻🇦', 'Vatican': '🇻🇦',
            'Malta': '🇲🇹', 'Republic of Malta': '🇲🇹',
            'Cyprus': '🇨🇾', 'Republic of Cyprus': '🇨🇾',
            'Croatia': '🇭🇷', 'Republic of Croatia': '🇭🇷',
            'Slovenia': '🇸🇮', 'Republic of Slovenia': '🇸🇮',
            'Slovakia': '🇸🇰', 'Slovak Republic': '🇸🇰',
            'Estonia': '🇪🇪', 'Republic of Estonia': '🇪🇪',
            'Latvia': '🇱🇻', 'Republic of Latvia': '🇱🇻',
            'Lithuania': '🇱🇹', 'Republic of Lithuania': '🇱🇹',
            'Bulgaria': '🇧🇬', 'Republic of Bulgaria': '🇧🇬',
            'Romania': '🇷🇴', 'RO': '🇷🇴',
            'Serbia': '🇷🇸', 'Republic of Serbia': '🇷🇸',
            'Montenegro': '🇲🇪', 'ME': '🇲🇪',
            'North Macedonia': '🇲🇰', 'Macedonia': '🇲🇰',
            'Albania': '🇦🇱', 'Republic of Albania': '🇦🇱',
            'Kosovo': '🇽🇰', 'XK': '🇽🇰',
            'Bosnia': '🇧🇦', 'Bosnia and Herzegovina': '🇧🇦',
            'Moldova': '🇲🇩', 'Republic of Moldova': '🇲🇩',
            'Ukraine': '🇺🇦', 'UA': '🇺🇦',
            'Belarus': '🇧🇾', 'Republic of Belarus': '🇧🇾',
        };

        // Try exact match first
        if (flagMap[countryName]) {
            return flagMap[countryName];
        }

        // Try case-insensitive match
        const countryLower = countryName.toLowerCase();
        for (const [key, flag] of Object.entries(flagMap)) {
            if (key.toLowerCase() === countryLower) {
                return flag;
            }
        }

        // Try partial match for common patterns
        for (const [key, flag] of Object.entries(flagMap)) {
            if (countryLower.includes(key.toLowerCase()) || key.toLowerCase().includes(countryLower)) {
                return flag;
            }
        }

        // Return neutral flag if no match found
        return '🏳️';
    }

    // Method to get flag for any location (including custom ones)
    getFlagForLocation(locationName, countryName = '') {
        // First try to find in our predefined locations
        const existingLocation = this.allLocations.find(loc => 
            loc.name.toLowerCase() === locationName.toLowerCase()
        );
        
        if (existingLocation) {
            return existingLocation.flag;
        }

        // If not found, try to get flag from country name
        if (countryName) {
            return this.getFlagForCountry(countryName);
        }

        // Try to extract country from location name
        const commonPatterns = {
            'new york': '🇺🇸', 'los angeles': '🇺🇸', 'chicago': '🇺🇸', 'miami': '🇺🇸',
            'london': '🇬🇧', 'paris': '🇫🇷', 'berlin': '🇩🇪', 'rome': '🇮🇹',
            'madrid': '🇪🇸', 'amsterdam': '🇳🇱', 'stockholm': '🇸🇪', 'oslo': '🇳🇴',
            'copenhagen': '🇩🇰', 'helsinki': '🇫🇮', 'warsaw': '🇵🇱', 'prague': '🇨🇿',
            'vienna': '🇦🇹', 'budapest': '🇭🇺', 'athens': '🇬🇷', 'istanbul': '🇹🇷',
            'tel aviv': '🇮🇱', 'riyadh': '🇸🇦', 'doha': '🇶🇦', 'kuwait': '🇰🇼',
            'manila': '🇵🇭', 'jakarta': '🇮🇩', 'kuala lumpur': '🇲🇾',
            'ho chi minh': '🇻🇳', 'hanoi': '🇻🇳', 'phnom penh': '🇰🇭',
            'vientiane': '🇱🇦', 'yangon': '🇲🇲', 'dhaka': '🇧🇩', 'colombo': '🇱🇰',
            'kathmandu': '🇳🇵', 'thimphu': '🇧🇹', 'ulaanbaatar': '🇲🇳',
            'almaty': '🇰🇿', 'tashkent': '🇺🇿', 'bishkek': '🇰🇬',
            'dushanbe': '🇹🇯', 'ashgabat': '🇹🇲', 'baku': '🇦🇿',
            'tbilisi': '🇬🇪', 'yerevan': '🇦🇲', 'tehran': '🇮🇷',
            'baghdad': '🇮🇶', 'damascus': '🇸🇾', 'beirut': '🇱🇧',
            'amman': '🇯🇴', 'sanaa': '🇾🇪', 'muscat': '🇴🇲',
            'abu dhabi': '🇦🇪', 'lagos': '🇳🇬', 'nairobi': '🇰🇪',
            'addis ababa': '🇪🇹', 'dar es salaam': '🇹🇿', 'kampala': '🇺🇬',
            'khartoum': '🇸🇩', 'algiers': '🇩🇿', 'casablanca': '🇲🇦',
            'tunis': '🇹��', 'tripoli': '🇱🇾', 'johannesburg': '🇿🇦',
            'cape town': '🇿🇦', 'windhoek': '🇳🇦', 'gaborone': '🇧🇼',
            'harare': '🇿🇼', 'lusaka': '🇿🇲', 'maputo': '🇲🇿',
            'antananarivo': '🇲🇬', 'port louis': '🇲🇺', 'victoria': '🇸🇨',
            'vancouver': '🇨🇦', 'montreal': '🇨🇦', 'calgary': '🇨🇦',
            'edmonton': '🇨🇦', 'winnipeg': '🇨🇦', 'halifax': '🇨🇦',
            'st. john\'s': '🇨🇦', 'san francisco': '🇺🇸', 'seattle': '🇺🇸',
            'portland': '🇺🇸', 'denver': '🇺🇸', 'phoenix': '🇺🇸',
            'las vegas': '🇺🇸', 'salt lake city': '🇺🇸', 'houston': '🇺🇸',
            'dallas': '🇺🇸', 'austin': '🇺🇸', 'san antonio': '🇺🇸',
            'orlando': '🇺🇸', 'tampa': '🇺🇸', 'atlanta': '��🇸',
            'nashville': '🇺🇸', 'new orleans': '🇺🇸', 'kansas city': '🇺🇸',
            'minneapolis': '🇺🇸', 'detroit': '🇺🇸', 'cleveland': '🇺🇸',
            'pittsburgh': '🇺🇸', 'philadelphia': '🇺🇸', 'boston': '🇺🇸',
            'buffalo': '🇺🇸', 'washington dc': '🇺🇸', 'baltimore': '🇺🇸',
            'richmond': '🇺🇸', 'charlotte': '🇺🇸', 'raleigh': '🇺🇸',
            'jacksonville': '🇺🇸', 'memphis': '🇺🇸', 'louisville': '🇺🇸',
            'cincinnati': '🇺🇸', 'columbus': '🇺🇸', 'indianapolis': '🇺🇸',
            'milwaukee': '🇺🇸', 'st. louis': '🇺🇸', 'oklahoma city': '🇺🇸',
            'tulsa': '🇺🇸', 'albuquerque': '🇺🇸', 'el paso': '🇺🇸',
            'tucson': '🇺🇸', 'fresno': '🇺🇸', 'sacramento': '🇺🇸',
            'oakland': '🇺🇸', 'san jose': '🇺🇸', 'san diego': '🇺🇸',
            'long beach': '🇺🇸', 'anaheim': '🇺🇸', 'bakersfield': '🇺🇸',
            'stockton': '🇺🇸', 'riverside': '🇺🇸', 'irvine': '🇺🇸',
            'fremont': '🇺🇸', 'modesto': '🇺🇸', 'oxnard': '🇺🇸',
            'fontana': '🇺🇸', 'moreno valley': '🇺🇸', 'huntington beach': '🇺🇸',
            'glendale': '🇺🇸', 'santa clarita': '🇺🇸', 'garden grove': '🇺🇸',
            'oceanside': '🇺🇸', 'rancho cucamonga': '🇺🇸', 'ontario': '🇺🇸',
            'lancaster': '🇺🇸', 'palmdale': '🇺🇸', 'corona': '🇺🇸',
            'salinas': '🇺🇸', 'pomona': '🇺🇸', 'santa rosa': '🇺🇸'
        };

        const locationLower = locationName.toLowerCase();
        if (commonPatterns[locationLower]) {
            return commonPatterns[locationLower];
        }

        // Final fallback
        return '🏳️';
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
let worldClock;
document.addEventListener('DOMContentLoaded', () => {
    worldClock = new WorldClock();
});