// Accessibility submenu toggle
const accessibilityBtn = document.getElementById("accessibility-btn");
const accessibilitySubmenu = document.getElementById("accessibility-submenu");

accessibilityBtn.addEventListener('click', () => {
    if (accessibilitySubmenu.classList.contains('opacity-0')) {
        accessibilitySubmenu.classList.remove('hidden');
        setTimeout(() => {
            accessibilitySubmenu.classList.remove('opacity-0');
        }, 10);
    } else {
        accessibilitySubmenu.classList.add('opacity-0');
        accessibilitySubmenu.addEventListener('transitionend', () => {
            if (accessibilitySubmenu.classList.contains('opacity-0')) {
                accessibilitySubmenu.classList.add('hidden');
            }
        }, { once: true });
    }
});

// aimp submenu toggle
const aimpBtn = document.getElementById("aimp-btn");
const aimpSubmenu = document.getElementById("aimp-submenu");

aimpBtn.addEventListener('click', () => {
    if (aimpSubmenu.classList.contains('opacity-0')) {
        aimpSubmenu.classList.remove('hidden');
        setTimeout(() => {
            aimpSubmenu.classList.remove('opacity-0');
        }, 10);
    } else {
        aimpSubmenu.classList.add('opacity-0');
        aimpSubmenu.addEventListener('transitionend', () => {
            if (aimpSubmenu.classList.contains('opacity-0')) {
                aimpSubmenu.classList.add('hidden');
            }
        }, { once: true });
    }
});

// Toggle start menu visibility on Windows icon click with fade effect
const windowsIcon = document.getElementById('windowsIcon');
const startMenu = document.getElementById('startMenu');

// Click handlers
windowsIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    showStartMenu();
});

function showStartMenu(){
    if (startMenu.classList.contains('opacity-0')) {
        startMenu.classList.remove('hidden');
        setTimeout(() => {
            startMenu.classList.remove('opacity-0');
        }, 10);
        hideSystemTray();
        hideCalenderTray();
        hideNotifTray();
        hideMusicTray();
    } else {
        hideStartMenu();
    }
}

function hideStartMenu(){
    startMenu.classList.add('opacity-0');
    startMenu.addEventListener('transitionend', () => {
        if (startMenu.classList.contains('opacity-0')) {
            startMenu.classList.add('hidden');
        }
    }, { once: true });
}

// Toggle System Tray visibility on tray up click with fade effect
const trayUp = document.getElementById('trayUp');
const systemTray = document.getElementById('systemTray');

// Click handlers
trayUp.addEventListener('click', (e) => {
    e.stopPropagation();
    showSystemTray();
});

function showSystemTray(){
    if (systemTray.classList.contains('opacity-0')) {
        systemTray.classList.remove('hidden');
        setTimeout(() => {
            systemTray.classList.remove('opacity-0');
        }, 10);
        hideStartMenu();
        hideCalenderTray();
        hideNotifTray();
        hideMusicTray();
    } else {
        hideSystemTray();
    }
}

function hideSystemTray(){
    systemTray.classList.add('opacity-0');
    systemTray.addEventListener('transitionend', () => {
        if (systemTray.classList.contains('opacity-0')) {
            systemTray.classList.add('hidden');
        }
    }, { once: true });
}

// Toggle Calender Tray visibility on tray up click with fade effect
const calenderUp = document.getElementById('calenderUp');
const calenderTray = document.getElementById('calenderTray');

// Click handlers
calenderUp.addEventListener('click', (e) => {
    e.stopPropagation();
    showCalenderTray();
});

function showCalenderTray(){
    if (calenderTray.classList.contains('opacity-0')) {
        calenderTray.classList.remove('hidden');
        setTimeout(() => {
            calenderTray.classList.remove('opacity-0');
        }, 10);
        hideStartMenu();
        hideSystemTray();
        hideNotifTray();
        hideMusicTray();
    } else {
        hideCalenderTray();
    }
}

function hideCalenderTray(){
    calenderTray.classList.add('opacity-0');
    calenderTray.addEventListener('transitionend', () => {
        if (calenderTray.classList.contains('opacity-0')) {
            calenderTray.classList.add('hidden');
        }
    }, { once: true });
}

// Toggle Notif Tray visibility on tray up click with fade effect
const notifUp = document.getElementById('notifUp');
const notifTray = document.getElementById('notifTray');

// Click handlers
notifUp.addEventListener('click', (e) => {
    e.stopPropagation();
    showNotifTray();
});

function showNotifTray(){
    if (notifTray.classList.contains('opacity-0')) {
        notifTray.classList.remove('hidden');
        setTimeout(() => {
            notifTray.classList.remove('opacity-0');
        }, 10);
        hideStartMenu();
        hideSystemTray();
        hideCalenderTray();
        hideMusicTray();
    } else {
        hideNotifTray();
    }
}

function hideNotifTray(){
    notifTray.classList.add('opacity-0');
    notifTray.addEventListener('transitionend', () => {
        if (notifTray.classList.contains('opacity-0')) {
            notifTray.classList.add('hidden');
        }
    }, { once: true });
}

// Toggle Contact Us Tray visibility on tray up click with fade effect
const contUp = document.getElementById('contactUp');
const contTray = document.getElementById('contactTray');

// Click handlers
contUp.addEventListener('click', (e) => {
    e.stopPropagation();
    showContactTray();
});

function showContactTray(){
    if (contTray.classList.contains('opacity-0')) {
        contTray.classList.remove('hidden');
        setTimeout(() => {
            contTray.classList.remove('opacity-0');
        }, 10);
        hideStartMenu();
        hideSystemTray();
        hideCalenderTray();
        hideNotifTray();
        hideMusicTray();
    } else {
        hideContactTray();
    }
}

function hideContactTray(){
    contTray.classList.add('opacity-0');
    contTray.addEventListener('transitionend', () => {
        if (contTray.classList.contains('opacity-0')) {
            contTray.classList.add('hidden');
        }
    }, { once: true });
}

// Toggle Music Play  visibility on tray up click with fade effect
const musicUp = document.getElementById('musicUp');
const musicTray = document.getElementById('musicTray');

// Click handlers
musicUp.addEventListener('click', (e) => {
    e.stopPropagation();
    showMusicTray();
});

function showMusicTray(){
    if (musicTray.classList.contains('opacity-0')) {
        musicTray.classList.remove('hidden');
        setTimeout(() => {
            musicTray.classList.remove('opacity-0');
        }, 10);
        hideStartMenu();
        hideSystemTray();
        hideCalenderTray();
        hideNotifTray();
    } else {
        hideMusicTray();
    }
}

function hideMusicTray(){
    musicTray.classList.add('opacity-0');
    musicTray.addEventListener('transitionend', () => {
        if (musicTray.classList.contains('opacity-0')) {
            musicTray.classList.add('hidden');
        }
    }, { once: true });
}

// Clicking outside closes menus
document.addEventListener('click', () => {
    hideStartMenu();
    hideSystemTray();
    hideCalenderTray();
    hideNotifTray();
    hideMusicTray();
});

// Prevent clicks inside menus from closing them
startMenu.addEventListener('click', (e) => {
    e.stopPropagation();
})
systemTray.addEventListener('click', (e) => {
    e.stopPropagation();
})
calenderTray.addEventListener('click', (e) => {
    e.stopPropagation();
})
notifTray.addEventListener('click', (e) => {
    e.stopPropagation();
})
contTray.addEventListener('click', (e) => {
    e.stopPropagation();
})
musicTray.addEventListener('click', (e) => {
    e.stopPropagation();
})

// Weather API call and display
const weatherWidget = document.getElementById("weather-widget");
const loadingEl = document.getElementById("weather-loading");
const contentEl = document.getElementById("weather-content");
const locationEl = document.getElementById("location");
const descriptionEl = document.getElementById("description");
const temperatureEl = document.getElementById("temperature");
const feelsLikeEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const iconEl = document.getElementById("weather-icon");

// Use Open-Meteo free API for weather by coordinates (no API key needed)
// We'll get user's location via geolocation, fallback to a default location (e.g. New York)
function fetchWeather(lat, lon) {
    // Open-Meteo API for current weather
    // https://open-meteo.com/en/docs#latitude=52.52&longitude=13.41&current_weather=true
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh&precipitation_unit=mm&timezone=auto`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (!data.current_weather) {
                throw new Error("No weather data");
            }
            const weather = data.current_weather;
            // Map weathercode to description and icon (simplified)
            const weatherCodes = {
                0: { desc: "Clear sky", icon: "fas fa-sun" },
                1: { desc: "Mainly clear", icon: "fas fa-sun" },
                2: { desc: "Partly cloudy", icon: "fas fa-cloud-sun" },
                3: { desc: "Overcast", icon: "fas fa-cloud" },
                45: { desc: "Fog", icon: "fas fa-smog" },
                48: { desc: "Depositing rime fog", icon: "fas fa-smog" },
                51: { desc: "Light drizzle", icon: "fas fa-cloud-rain" },
                53: { desc: "Moderate drizzle", icon: "fas fa-cloud-rain" },
                55: { desc: "Dense drizzle", icon: "fas fa-cloud-showers-heavy" },
                56: { desc: "Light freezing drizzle", icon: "fas fa-cloud-meatball" },
                57: { desc: "Dense freezing drizzle", icon: "fas fa-cloud-meatball" },
                61: { desc: "Slight rain", icon: "fas fa-cloud-rain" },
                63: { desc: "Moderate rain", icon: "fas fa-cloud-showers-heavy" },
                65: { desc: "Heavy rain", icon: "fas fa-cloud-showers-heavy" },
                66: { desc: "Light freezing rain", icon: "fas fa-cloud-meatball" },
                67: { desc: "Heavy freezing rain", icon: "fas fa-cloud-meatball" },
                71: { desc: "Slight snow fall", icon: "fas fa-snowflake" },
                73: { desc: "Moderate snow fall", icon: "fas fa-snowflake" },
                75: { desc: "Heavy snow fall", icon: "fas fa-snowflake" },
                77: { desc: "Snow grains", icon: "fas fa-snowflake" },
                80: { desc: "Slight rain showers", icon: "fas fa-cloud-showers-heavy" },
                81: { desc: "Moderate rain showers", icon: "fas fa-cloud-showers-heavy" },
                82: { desc: "Violent rain showers", icon: "fas fa-cloud-showers-heavy" },
                85: { desc: "Slight snow showers", icon: "fas fa-snowflake" },
                86: { desc: "Heavy snow showers", icon: "fas fa-snowflake" },
                95: { desc: "Thunderstorm", icon: "fas fa-bolt" },
                96: { desc: "Thunderstorm with slight hail", icon: "fas fa-bolt" },
                99: { desc: "Thunderstorm with heavy hail", icon: "fas fa-bolt" },
            };

            const weatherInfo = weatherCodes[weather.weathercode] || {
                desc: "Unknown",
                icon: "fas fa-question",
            };

            // Set icon as an inline SVG or fontawesome icon
            // We'll use fontawesome icon class on an <i> inside a container
            iconEl.outerHTML = `<i id="weather-icon" class="${weatherInfo.icon} text-yellow-400 text-6xl mx-auto mb-2"></i>`;

            locationEl.textContent = `${data.timezone}`;
            descriptionEl.textContent = weatherInfo.desc;
            temperatureEl.textContent = `${weather.temperature.toFixed(1)}°C`;
            feelsLikeEl.textContent = `Wind Speed: ${weather.windspeed.toFixed(1)} km/h`;
            humidityEl.textContent = "";
            windEl.textContent = "";
            loadingEl.classList.add("hidden");
            contentEl.classList.remove("hidden");
        })
        .catch(() => {
            loadingEl.textContent = "Unable to fetch weather data.";
        });
}
function getLocationAndFetchWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                fetchWeather(pos.coords.latitude, pos.coords.longitude);
            },
            () => {
                // fallback to New York City coords
                fetchWeather(40.7128, -74.006);
            }
        );
    } else {
        // fallback to New York City coords
        fetchWeather(40.7128, -74.006);
    }
}
getLocationAndFetchWeather();
// Function to format date as "Tuesday, May 6"
function formatDayDate(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}
// Function to format month and year as "May 2025"
function formatMonthYear(date) {
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}
// Function to format time as "1:34:44 PM"
function formatTime(date) {
    return date.toLocaleTimeString(undefined, { hour12: true });
}
// Function to format date as "5/6/2025"
function formatShortDate(date) {
    return date.toLocaleDateString(undefined);
}
// Generate calendar days grid for given month and year, highlight current day
function generateCalendarDays(year, month, currentDay) {
    const daysGrid = document.getElementById('calendarDaysGrid');
    daysGrid.innerHTML = '';
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstWeekday = firstDay.getDay(); // 0=Sun, 1=Mon...
    const totalDays = lastDay.getDate();
    // Previous month's last days to fill empty slots
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    // Add previous month's days (gray)
    for (let i = firstWeekday - 1; i >= 0; i--) {
        const dayNum = prevMonthLastDay - i;
        const div = document.createElement('div');
        div.className = 'text-gray-600 select-none text-[10px]';
        div.textContent = dayNum;
        daysGrid.appendChild(div);
    }
    // Add current month's days
    for (let day = 1; day <= totalDays; day++) {
        const div = document.createElement('div');
        div.className = 'text-white select-none text-[10px] flex justify-center items-center';
        if (day === currentDay) {
            // Highlight current day with blue circle button
            const btn = document.createElement('button');
            btn.className = 'w-6 h-6 rounded-full bg-[#3ab7ff] text-white font-semibold text-[10px] leading-6';
            btn.textContent = day;
            btn.setAttribute('aria-current', 'date');
            div.appendChild(btn);
        } else {
            div.textContent = day;
        }
        daysGrid.appendChild(div);
    }
    // Fill remaining slots to complete 7x6 grid (42 cells)
    const totalCells = firstWeekday + totalDays;
    const remaining = 42 - totalCells;
    for (let i = 1; i <= remaining; i++) {
        const div = document.createElement('div');
        div.className = 'text-gray-600 select-none text-[10px]';
        div.textContent = i;
        daysGrid.appendChild(div);
    }
}
// Update all date/time elements
function updateDateTime() {
    const now = new Date();
    // Update calendar day
    const calendarDay = document.getElementById('calendarDay');
    calendarDay.textContent = formatDayDate(now);
    // Update calendar month year
    const calendarMonthYear = document.getElementById('calendarMonthYear');
    calendarMonthYear.textContent = formatMonthYear(now);
    // Update calendar days grid
    generateCalendarDays(now.getFullYear(), now.getMonth(), now.getDate());
    const systemTimeCurrent = document.getElementById('timeCurrent');
    systemTimeCurrent.textContent = formatTime(now);
    const systemDateCurrent = document.getElementById('dateCurrent');
    systemDateCurrent.textContent = formatShortDate(now);
}
updateDateTime();
// Update time every second
setInterval(updateDateTime, 1000);
