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
function formatTimeCurrent(date) {
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
    systemTimeCurrent.textContent = formatTimeCurrent(now);
    const systemDateCurrent = document.getElementById('dateCurrent');
    systemDateCurrent.textContent = formatShortDate(now);
}
updateDateTime();
// Update time every second
setInterval(updateDateTime, 1000);

// Playlist JSON format
 let playlist = [];
 let currentIndex = 0;
 let isPlaying = false;
 let player;
 let updateInterval;

 const thumbnailEl = document.getElementById("thumbnail");
 const videoTitleEl = document.getElementById("video-title");
 const channelNameEl = document.getElementById("channel-name");
 const playPauseBtn = document.getElementById("play-pause-btn");
 const prevBtn = document.getElementById("prev-btn");
 const nextBtn = document.getElementById("next-btn");
 const progressBar = document.getElementById("progress-bar");
 const currentTimeEl = document.getElementById("current-time");

 // Load YouTube IFrame API
 let tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
 document.body.appendChild(tag);

 // Fetch playlist JSON from URL
 async function fetchPlaylist() {
  try {
   const res = await fetch("https://raw.githubusercontent.com/qorri-di/Blogger/refs/heads/master/japan-playlist.json");
   if (!res.ok) throw new Error("Failed to fetch playlist");
   playlist = await res.json();
   if (playlist.length > 0) {
    loadVideoByIndex(0);
   }
  } catch (error) {
   videoTitleEl.textContent = "Failed to load playlist";
   channelNameEl.textContent = "";
   console.error(error);
  }
 }

 function onYouTubeIframeAPIReady() {
  // Wait for playlist to load first
  if (playlist.length === 0) {
   fetchPlaylist();
  } else {
   loadVideoByIndex(currentIndex);
  }
 }

 function loadVideoByIndex(index) {
  const video = playlist[index];
  if (!video) return;

  thumbnailEl.src = video.thumbnail;
  videoTitleEl.textContent = "Loading...";
  channelNameEl.textContent = "Loading...";

  if (player) {
   player.loadVideoById(video.musicId);
  } else {
   player = new YT.Player('youtube-player', {
    height: '0',
    width: '0',
    videoId: video.musicId,
    playerVars: {
     autoplay: 1,
     controls: 0,
     disablekb: 1,
     modestbranding: 1,
     rel: 0,
     showinfo: 0,
     iv_load_policy: 3,
     origin: window.location.origin,
    },
    events: {
     'onReady': onPlayerReady,
     'onStateChange': onPlayerStateChange,
    }
   });
  }
  fetchVideoDetails(video.musicId);
 }

 function onPlayerReady(event) {
  player.setVolume(100);
  player.playVideo();
  isPlaying = true;
  updatePlayPauseIcon();
  startProgressUpdater();
 }

 function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
   isPlaying = true;
   updatePlayPauseIcon();
   startProgressUpdater();
  } else if (event.data === YT.PlayerState.PAUSED) {
   isPlaying = false;
   updatePlayPauseIcon();
   stopProgressUpdater();
  } else if (event.data === YT.PlayerState.ENDED) {
   nextTrackLagu();
  }
 }

 function updatePlayPauseIcon() {
  playPauseBtn.innerHTML = isPlaying
          ? '<i class="fas fa-pause"></i>'
          : '<i class="fas fa-play"></i>';
  playPauseBtn.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
 }

 function startProgressUpdater() {
  stopProgressUpdater();
  updateInterval = setInterval(() => {
   if (!player || !isPlaying) return;
   const current = player.getCurrentTime();
   const duration = player.getDuration();
   if (duration > 0) {
    const progressPercent = (current / duration) * 100;
    progressBar.value = progressPercent;
    currentTimeEl.textContent = formatTimeLagu(current);
   }
  }, 500);
 }

 function stopProgressUpdater() {
  if (updateInterval) {
   clearInterval(updateInterval);
   updateInterval = null;
  }
 }

 function formatTimeLagu(seconds) {
  seconds = Math.floor(seconds);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
 }

 playPauseBtn.addEventListener("click", () => {
  if (!player) return;
  if (isPlaying) {
   player.pauseVideo();
  } else {
   player.playVideo();
  }
 });

 prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadVideoByIndex(currentIndex);
 });

 nextBtn.addEventListener("click", () => {
  nextTrackLagu();
 });

 progressBar.addEventListener("input", () => {
  if (!player) return;
  const duration = player.getDuration();
  const seekTo = (progressBar.value / 100) * duration;
  player.seekTo(seekTo, true);
  currentTimeEl.textContent = formatTimeLagu(seekTo);
 });

 function nextTrackLagu() {
  currentIndex++;
  if (currentIndex >= playlist.length) {
   currentIndex = 0; // Loop back to start
  }
  loadVideoByIndex(currentIndex);
 }

 // Fetch video details from YouTube oEmbed API
 async function fetchVideoDetails(videoId) {
  try {
   const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
   if (!res.ok) throw new Error("Failed to fetch video info");
   const data = await res.json();
   videoTitleEl.textContent = data.title.length > 40 ? data.title.slice(0, 37) + "..." : data.title;
   channelNameEl.textContent = data.author_name.length > 30 ? data.author_name.slice(0, 27) + "..." : data.author_name;
  } catch {
   videoTitleEl.textContent = "Unknown Title";
   channelNameEl.textContent = "Unknown Channel";
  }
 }
// Form Contact Us Tray max, min, close
 const headContact = document.getElementById("headContact");
 const form = document.getElementById("contact-form");
 const minimizeBtn = document.getElementById("minimize-btn");
 const maximizeBtn = document.getElementById("maximize-btn");
 const closeBtn = document.getElementById("close-btn");

 // Store original form size and position for maximize toggle
 let isMaximized = false;
 let prevStyles = {};

 // Minimize: hide form
 minimizeBtn.addEventListener("click", () => {
  contTray.classList.add('hidden');
  contTray.classList.add('opacity-0');
 });

 // Maximize: toggle full screen
 maximizeBtn.addEventListener("click", () => {
  if (!isMaximized) {
   // Save current styles
   prevStyles = {
    position: form.style.position || '',
    top: form.style.top || '',
    left: form.style.left || '',
    width: form.style.width || '',
    height: form.style.height || '',
    transform: form.style.transform || '',
    borderRadius: form.style.borderRadius || '',
    boxShadow: form.style.boxShadow || '',
    display: form.style.display || '',
    flexDirection: form.style.flexDirection || '',
   };
   form.style.position = "fixed";
   form.style.top = "1/4";
   form.style.left = "1/2";
   form.style.width = "500px";
   form.style.height = "580px";
   form.style.transform = "none";
   form.style.borderRadius = "0";
   form.style.boxShadow = "none";
   form.style.display = "flex";
   form.style.flexDirection = "column";
   isMaximized = true;
  } else {
   // Restore previous styles
   form.style.position = prevStyles.position;
   form.style.top = prevStyles.top;
   form.style.left = prevStyles.left;
   form.style.width = prevStyles.width;
   form.style.height = prevStyles.height;
   form.style.transform = prevStyles.transform;
   form.style.borderRadius = prevStyles.borderRadius;
   form.style.boxShadow = prevStyles.boxShadow;
   form.style.display = prevStyles.display;
   form.style.flexDirection = prevStyles.flexDirection;
   isMaximized = false;
  }
 });

 // Close: hide form and remove minimized icon if any
 closeBtn.addEventListener("click", () => {
  contTray.classList.add('hidden');
  contTray.classList.add('opacity-0');
 });

 // Draggable Contact Us
 let isDragging = false;
 let dragOffsetX = 0;
 let dragOffsetY = 0;

 headContact.addEventListener("mousedown", (e) => {
  isDragging = true;
  const rect = contTray.getBoundingClientRect();
  dragOffsetX = e.clientX - rect.left;
  dragOffsetY = e.clientY - rect.top;
  document.body.style.userSelect = "none";
 });

 window.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.userSelect = "";
 });

 window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  let newLeft = e.clientX - dragOffsetX;
  let newTop = e.clientY - dragOffsetY;

  // Keep inside viewport horizontally
  const maxLeft = window.innerWidth - contTray.offsetWidth;
  if (newLeft < 0) newLeft = 0;
  else if (newLeft > maxLeft) newLeft = maxLeft;

  // Keep inside viewport vertically
  const maxTop = (window.innerHeight - 313) - contTray.offsetHeight;
  if (newTop < 0) newTop = 44;
  else if (newTop > maxTop) newTop = maxTop;

  contTray.style.left = newLeft + "px";
  contTray.style.top = newTop + "px";
  contTray.style.transform = "none";
 });

 // Form submission (Google Sheets integration)
 // Replace with your Google Apps Script Web App URL
 const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwXXSpTGik7gw31pcqCSPAxbUilCQtAizcHBpy9lZpf-qpI5LohnJQtUbLfCfRve1Mw0Q/exec";

 form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append("asal", "qorri-di");
  const data = new URLSearchParams(formData);
  console.log(data);

  try {
   await fetch(GOOGLE_SHEET_WEBAPP_URL, {
    method: "POST",
    mode: "no-cors",
    body: data,
   });

   alert("Thank you! Your message has been sent.");
   form.reset();
  } catch (error) {
   alert("Oops! Something went wrong. Please try again later.");
  }
 });
