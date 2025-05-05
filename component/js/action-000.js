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

// Clicking outside closes menus
document.addEventListener('click', () => {
  hideStartMenu();
  hideSystemTray();
});

// Prevent clicks inside menus from closing them
startMenu.addEventListener('click', (e) => {
  e.stopPropagation();
})
systemTray.addEventListener('click', (e) => {
  e.stopPropagation();
})

// Update time and date every second
function updateTimeDate() {
  const timeEl = document.getElementById('time');
  const dateEl = document.getElementById('date');
  const now = new Date();
  const optionsTime = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  const optionsDate = { year: 'numeric', month: 'numeric', day: 'numeric' };
  timeEl.textContent = now.toLocaleTimeString('en-US', optionsTime);
  dateEl.textContent = now.toLocaleDateString('en-US', optionsDate);
}
updateTimeDate();
setInterval(updateTimeDate, 1000);

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