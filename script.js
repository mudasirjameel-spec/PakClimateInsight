/* ==========================================================
   PAK CLIMATE INSIGHT 2026 — script.js
   Mudasir Jameel
   ========================================================== */

/* ============================================================
   📍 OFFICIAL PMD DATA ARCHIVE (CONTROL PANEL)
   EASY UPDATE GUIDE:
   - Morning (8 AM): Enter 'min' and 'rain'. Put "--" for 'max'.
   - Evening (5 PM): Replace "--" with the official 'max' temp.
   ============================================================ */
window.PMD_ARCHIVE = {
  // --- 17 MARCH (MORNING UPDATE - PMD SCREENSHOT DATA APPLIED) ---
  "17 March 2026": [
    // Punjab
    { city: "Lahore",          lat: 31.5204, lon: 74.3587, max: "--", min: 13.0, rain: 0 },
    { city: "Islamabad",       lat: 33.7294, lon: 73.0931, max: "--", min: 9.0, rain: 2 },
    { city: "Rawalpindi",      lat: 33.5973, lon: 73.0479, max: "--", min: 12.1, rain: "--" },
    { city: "Faisalabad",      lat: 31.4181, lon: 73.0776, max: "--", min: 14.5, rain: 0 },
    { city: "Multan",          lat: 30.1978, lon: 71.4697, max: "--", min: 16.7, rain: 0 },
    { city: "Sargodha",        lat: 32.0836, lon: 72.6711, max: "--", min: 14.3, rain: "--" },
    { city: "Jhelum",          lat: 32.9405, lon: 73.7276, max: "--", min: 11.8, rain: "--" },
    { city: "Bahawalpur",      lat: 29.3957, lon: 71.6833, max: "--", min: 13.7, rain: "--" },
    { city: "Sialkot",         lat: 32.4925, lon: 74.5310, max: "--", min: 11.2, rain: "--" },
    { city: "Gujranwala",      lat: 32.1617, lon: 74.1883, max: "--", min: 12.2, rain: "--" },
    { city: "D.G. Khan",       lat: 30.0489, lon: 70.6455, max: "--", min: 16.0, rain: "--" },
    { city: "Murree",          lat: 33.9070, lon: 73.3943, max: "--", min: 2.8, rain: "--" },
    { city: "Sahiwal",         lat: 30.6682, lon: 73.1114, max: "--", min: 14.4, rain: "--" },
    { city: "Bhakkar",         lat: 31.6289, lon: 71.0634, max: "--", min: 15.0, rain: "--" },
    { city: "Mianwali",        lat: 32.5839, lon: 71.5370, max: "--", min: "--", rain: "--" },
    { city: "Attock",          lat: 33.7660, lon: 72.3609, max: "--", min: 11.5, rain: "--" },
    { city: "Chakwal",         lat: 32.9328, lon: 72.8530, max: "--", min: 9.0, rain: "--" },
    { city: "Mandi Bahauddin", lat: 32.5861, lon: 73.4915, max: "--", min: 13.2, rain: "--" },
    { city: "Hafizabad",       lat: 32.0709, lon: 73.6880, max: "--", min: "--", rain: "--" },
    { city: "Narowal",         lat: 32.1020, lon: 74.8730, max: "--", min: "--", rain: "--" },
    { city: "Kasur",           lat: 31.1154, lon: 74.4436, max: "--", min: 11.7, rain: "--" },
    { city: "Sheikhupura",     lat: 31.7167, lon: 73.9850, max: "--", min: "--", rain: "--" },
    { city: "Jhang",           lat: 31.2781, lon: 72.3317, max: "--", min: 14.0, rain: "--" },
    { city: "T.T. Singh",      lat: 30.9713, lon: 72.4827, max: "--", min: "--", rain: "--" },
    { city: "Okara",           lat: 30.8138, lon: 73.4534, max: "--", min: "--", rain: "--" },
    { city: "Rahim Yar Khan",  lat: 28.4212, lon: 70.2989, max: "--", min: "--", rain: "--" },
    { city: "Vehari",          lat: 30.0419, lon: 72.3528, max: "--", min: "--", rain: "--" },
    { city: "Khanewal",        lat: 30.3017, lon: 71.9321, max: "--", min: "--", rain: "--" },
    { city: "Lodhran",         lat: 29.5339, lon: 71.6324, max: "--", min: "--", rain: "--" },
    { city: "Layyah",          lat: 30.9693, lon: 70.9428, max: "--", min: "--", rain: "--" },
    { city: "Muzaffargarh",    lat: 30.0703, lon: 71.1933, max: "--", min: "--", rain: "--" },
    { city: "Rajanpur",        lat: 29.1035, lon: 70.3250, max: "--", min: "--", rain: "--" },
    { city: "Bahawalnagar",    lat: 29.9987, lon: 73.2536, max: "--", min: "--", rain: "--" },
    { city: "Chiniot",         lat: 31.7200, lon: 72.9789, max: "--", min: "--", rain: "--" },
    { city: "Pakpattan",       lat: 30.3410, lon: 73.3866, max: "--", min: "--", rain: "--" },
    { city: "Nankana Sahib",   lat: 31.4492, lon: 73.7058, max: "--", min: "--", rain: "--" },
    { city: "Khushab",         lat: 32.2952, lon: 72.3502, max: "--", min: "--", rain: "--" },
    
    // Balochistan
    { city: "Quetta",     lat: 30.1798, lon: 66.9750, max: "--", min: 6.0,  rain: 0 },
    { city: "Khuzdar",    lat: 27.8123, lon: 66.6127, max: "--", min: 15.5, rain: "--" },
    { city: "Kalat",      lat: 29.0225, lon: 66.5916, max: "--", min: 5.0, rain: "--" },
    { city: "Dalbandin",  lat: 28.8885, lon: 64.4062, max: "--", min: "--", rain: "--" },
    { city: "Nokkundi",   lat: 28.8225, lon: 62.7531, max: "--", min: 15.5, rain: "--" },
    { city: "Panjgur",    lat: 26.9719, lon: 64.0945, max: "--", min: 15.0, rain: "--" },
    { city: "Turbat",     lat: 26.0012, lon: 63.0485, max: "--", min: 20.5, rain: 0 },
    { city: "Gwadar",     lat: 25.1216, lon: 62.3254, max: "--", min: 18.5, rain: 0 },
    { city: "Pasni",      lat: 25.2630, lon: 63.4692, max: "--", min: 19.0, rain: "--" },
    { city: "Jiwani",     lat: 25.0485, lon: 61.7402, max: "--", min: 19.5, rain: 0 },
    { city: "Ormara",     lat: 25.2088, lon: 64.6357, max: "--", min: 18.0, rain: "--" },
    { city: "Lasbela",    lat: 26.2278, lon: 66.2931, max: "--", min: 14.5, rain: "--" },
    { city: "Sibbi",      lat: 29.5448, lon: 67.8764, max: "--", min: 17.0, rain: 0 },
    { city: "Zhob",       lat: 31.3408, lon: 69.4483, max: "--", min: 7.5, rain: "--" },
    { city: "Barkhan",    lat: 29.8977, lon: 69.5256, max: "--", min: "--", rain: "--" },

    // Sindh
    { city: "Karachi",    lat: 24.8608, lon: 67.0104, max: "--", min: 23.5, rain: 0 },
    { city: "Hyderabad",  lat: 25.3960, lon: 68.3578, max: "--", min: 20.5, rain: 0 },
    { city: "Sukkur",     lat: 27.7139, lon: 68.8459, max: "--", min: 17.0, rain: 0 },
    { city: "Larkana",    lat: 27.5570, lon: 68.2028, max: "--", min: 18.0, rain: 0 },
    { city: "Nawabshah",  lat: 26.2483, lon: 68.4096, max: "--", min: 18.0, rain: 0 },
    { city: "Jacobabad",  lat: 28.2818, lon: 68.4376, max: "--", min: 18.0, rain: "--" },
    { city: "Mithi",      lat: 24.7370, lon: 69.7971, max: "--", min: 19.0, rain: "--" },
    { city: "Badin",      lat: 24.6558, lon: 68.8330, max: "--", min: 20.0, rain: "--" },

    // KP & Northern Areas
    { city: "Peshawar",   lat: 34.0150, lon: 71.5249, max: "--", min: 10.5, rain: 0 },
    { city: "Mardan",     lat: 34.1989, lon: 72.0468, max: "--", min: "--", rain: "--" },
    { city: "Swat",       lat: 35.2227, lon: 72.4258, max: "--", min: "--", rain: "--" },
    { city: "D.I. Khan",  lat: 31.8626, lon: 70.9019, max: "--", min: 13.5, rain: "--" },
    { city: "Bannu",      lat: 32.9861, lon: 70.6042, max: "--", min: "--", rain: "--" },
    { city: "Kohat",      lat: 33.5869, lon: 71.4414, max: "--", min: "--", rain: "--" },
    { city: "Dir",        lat: 35.19,   lon: 71.87,   max: "--", min: 3.5, rain: "Trace" },
    { city: "Mirkhani",   lat: 35.58,   lon: 71.72,   max: "--", min: 6.5, rain: "Trace" },
    { city: "Balakot",    lat: 34.55,   lon: 73.35,   max: "--", min: 6.5, rain: 1 },
    { city: "Chitral",    lat: 35.85,   lon: 71.78,   max: "--", min: 4.3, rain: 1 },
    { city: "Drosh",      lat: 35.56,   lon: 71.79,   max: "--", min: 4.6, rain: "Trace" },
    { city: "Pattan",     lat: 35.12,   lon: 73.01,   max: "--", min: "--", rain: "--" },
    { city: "Kalam",      lat: 35.48,   lon: 72.58,   max: "--", min: -1.0, rain: 2 },
    { city: "Malam Jabba",lat: 34.7997, lon: 72.5725, max: "--", min: 0.5, rain: 3 },
    { city: "Parachinar", lat: 33.8992, lon: 70.1008, max: "--", min: 8.5, rain: 0 },
    { city: "Kakul",      lat: 34.1833, lon: 73.2500, max: "--", min: 4.5, rain: 2 },

    // Gilgit-Baltistan & AJK
    { city: "Gilgit",       lat: 35.9208, lon: 74.3083, max: "--", min: 2.5, rain: 0 },
    { city: "Skardu",       lat: 35.2971, lon: 75.6333, max: "--", min: 1.3, rain: 0 },
    { city: "Muzaffarabad", lat: 34.3700, lon: 73.4714, max: "--", min: 10.2, rain: 0 },
    { city: "Chilas",       lat: 35.42,   lon: 74.09,   max: "--", min: 10.0, rain: 0 },
    { city: "Astore",       lat: 35.36,   lon: 74.85,   max: "--", min: 0.5, rain: 0 },
    { city: "Gupis",        lat: 36.22,   lon: 73.44,   max: "--", min: 3.5, rain: 0 },
    { city: "Bunji",        lat: 35.64,   lon: 74.63,   max: "--", min: 9.4, rain: "--" },
    { city: "Garhi Dupatta",lat: 34.22,   lon: 73.61,   max: "--", min: 7.0, rain: "Trace" },
    { city: "Rawalakot",    lat: 33.8576, lon: 73.7602, max: "--", min: 3.0, rain: 2 }
  ],

  // --- 16 MARCH (NATIONAL PMD UPDATE) ---
  "16 March 2026": [
    // Punjab
    { city: "Lahore",          lat: 31.5204, lon: 74.3587, max: 31.0, min: 15.5, rain: 0 },
    { city: "Islamabad",       lat: 33.7294, lon: 73.0931, max: 26.0, min: 11.5, rain: 22 },
    { city: "Rawalpindi",      lat: 33.5973, lon: 73.0479, max: 25.0, min: 13, rain: 18 },
    { city: "Faisalabad",      lat: 31.4181, lon: 73.0776, max: 32.0, min: 14, rain: 0 },
    { city: "Multan",          lat: 30.1978, lon: 71.4697, max: 33.0, min: 16, rain: 0 },
    { city: "Sargodha",        lat: 32.0836, lon: 72.6711, max: 31.0, min: 14, rain: 0 },
    { city: "Jhelum",          lat: 32.9405, lon: 73.7276, max: 27.5, min: 12, rain: 0 },
    { city: "Bahawalpur",      lat: 29.3957, lon: 71.6833, max: 33.5, min: 15.5, rain: 0 },
    { city: "Sialkot",         lat: 32.4925, lon: 74.5310, max: 29.0, min: 13, rain: 0 },
    { city: "Gujranwala",      lat: 32.1617, lon: 74.1883, max: 30.5, min: 13.5, rain: 0 },
    { city: "D.G. Khan",       lat: 30.0489, lon: 70.6455, max: 32.5, min: 15, rain: 0 },
    { city: "Murree",          lat: 33.9070, lon: 73.3943, max: 14.5, min: 4,  rain: 25 },
    { city: "Sahiwal",         lat: 30.6682, lon: 73.1114, max: 32.0, min: 14.5, rain: 0 },
    { city: "Bhakkar",         lat: 31.6289, lon: 71.0634, max: 31.5, min: 14, rain: 0 },
    { city: "Mianwali",        lat: 32.5839, lon: 71.5370, max: 29.5, min: 13, rain: 0 },
    { city: "Attock",          lat: 33.7660, lon: 72.3609, max: 26.5, min: 11, rain: 0 },
    { city: "Chakwal",         lat: 32.9328, lon: 72.8530, max: 24.5, min: 11.5, rain: 0 },
    { city: "Mandi Bahauddin", lat: 32.5861, lon: 73.4915, max: 29.0, min: 13, rain: 0 },
    { city: "Hafizabad",       lat: 32.0709, lon: 73.6880, max: 30.5, min: 14, rain: 0 },
    { city: "Narowal",         lat: 32.1020, lon: 74.8730, max: 29.5, min: 13, rain: 0 },
    { city: "Kasur",           lat: 31.1154, lon: 74.4436, max: 30.5, min: 14, rain: 0 },
    { city: "Sheikhupura",     lat: 31.7167, lon: 73.9850, max: 31.0, min: 14, rain: 0 },
    { city: "Jhang",           lat: 31.2781, lon: 72.3317, max: 32.0, min: 15, rain: 0 },
    { city: "T.T. Singh",      lat: 30.9713, lon: 72.4827, max: 32.0, min: 14.5, rain: 0 },
    { city: "Okara",           lat: 30.8138, lon: 73.4534, max: 31.5, min: 15, rain: 0 },
    { city: "Rahim Yar Khan",  lat: 28.4212, lon: 70.2989, max: 35.5, min: 16.5, rain: 0 },
    { city: "Vehari",          lat: 30.0419, lon: 72.3528, max: 32.5, min: 15, rain: 0 },
    { city: "Khanewal",        lat: 30.3017, lon: 71.9321, max: 33.0, min: 16, rain: 0 },
    { city: "Lodhran",         lat: 29.5339, lon: 71.6324, max: 33.5, min: 16, rain: 0 },
    { city: "Layyah",          lat: 30.9693, lon: 70.9428, max: 33.0, min: 15, rain: 0 },
    { city: "Muzaffargarh",    lat: 30.0703, lon: 71.1933, max: 33.5, min: 16, rain: 0 },
    { city: "Rajanpur",        lat: 29.1035, lon: 70.3250, max: 32.0, min: 16, rain: 0 },
    { city: "Bahawalnagar",    lat: 29.9987, lon: 73.2536, max: 33.5, min: 15.5, rain: 0 },
    { city: "Chiniot",         lat: 31.7200, lon: 72.9789, max: 31.5, min: 14, rain: 0 },
    { city: "Pakpattan",       lat: 30.3410, lon: 73.3866, max: 32.0, min: 15, rain: 0 },
    { city: "Nankana Sahib",   lat: 31.4492, lon: 73.7058, max: 31.0, min: 14, rain: 0 },
    { city: "Khushab",         lat: 32.2952, lon: 72.3502, max: 29.5, min: 13, rain: 0 },
    
    // Balochistan
    { city: "Quetta",     lat: 30.1798, lon: 66.9750, max: 23.0, min: 5,  rain: 0 },
    { city: "Khuzdar",    lat: 27.8123, lon: 66.6127, max: 28.5, min: 10, rain: 0 },
    { city: "Kalat",      lat: 29.0225, lon: 66.5916, max: 21.0, min: 3,  rain: 0 },
    { city: "Dalbandin",  lat: 28.8885, lon: 64.4062, max: 32.0, min: 12, rain: 0 },
    { city: "Nokkundi",   lat: 28.8225, lon: 62.7531, max: 34.0, min: 13, rain: 0 },
    { city: "Panjgur",    lat: 26.9719, lon: 64.0945, max: 31.5, min: 14, rain: 0 },
    { city: "Turbat",     lat: 26.0012, lon: 63.0485, max: 36.5, min: 18, rain: 0 },
    { city: "Gwadar",     lat: 25.1216, lon: 62.3254, max: 32.0, min: 21, rain: 0 },
    { city: "Pasni",      lat: 25.2630, lon: 63.4692, max: 32.5, min: 20, rain: 0 },
    { city: "Jiwani",     lat: 25.0485, lon: 61.7402, max: 30.5, min: 20, rain: 0 },
    { city: "Ormara",     lat: 25.2088, lon: 64.6357, max: 32.0, min: 21, rain: 0 },
    { city: "Lasbela",    lat: 26.2278, lon: 66.2931, max: 36.5, min: 17, rain: 0 },
    { city: "Sibbi",      lat: 29.5448, lon: 67.8764, max: 34.5, min: 19, rain: 0 },
    { city: "Zhob",       lat: 31.3408, lon: 69.4483, max: 21.0, min: 7,  rain: 0 },
    { city: "Barkhan",    lat: 29.8977, lon: 69.5256, max: 25.0, min: 10, rain: 0 },

    // Sindh
    { city: "Karachi",    lat: 24.8608, lon: 67.0104, max: 33.4, min: 22, rain: 0 },
    { city: "Hyderabad",  lat: 25.3960, lon: 68.3578, max: 36.5, min: 20, rain: 0 },
    { city: "Sukkur",     lat: 27.7139, lon: 68.8459, max: 36.5, min: 19, rain: 0 },
    { city: "Larkana",    lat: 27.5570, lon: 68.2028, max: 37.5, min: 20, rain: 0 },
    { city: "Nawabshah",  lat: 26.2483, lon: 68.4096, max: 37.5, min: 21, rain: 0 },
    { city: "Jacobabad",  lat: 28.2818, lon: 68.4376, max: 35.5, min: 19, rain: 0 },
    { city: "Mithi",      lat: 24.7370, lon: 69.7971, max: 38.5, min: 18, rain: 0 },
    { city: "Badin",      lat: 24.6558, lon: 68.8330, max: 36.5, min: 20, rain: 0 },

    // KP & Northern Areas
    { city: "Peshawar",   lat: 34.0150, lon: 71.5249, max: 29.3, min: 12.5, rain: 15 },
    { city: "Mardan",     lat: 34.1989, lon: 72.0468, max: 28.5, min: 11, rain: 0 },
    { city: "Swat",       lat: 35.2227, lon: 72.4258, max: 21.5, min: 7,  rain: "Trace" },
    { city: "D.I. Khan",  lat: 31.8626, lon: 70.9019, max: 31.5, min: 14, rain: 0 },
    { city: "Bannu",      lat: 32.9861, lon: 70.6042, max: 30.0, min: 13, rain: 0 },
    { city: "Kohat",      lat: 33.5869, lon: 71.4414, max: 28.0, min: 12, rain: 0 },
    { city: "Dir",        lat: 35.19,   lon: 71.87,   max: 23.5, min: 6.0, rain: 19 },
    { city: "Mirkhani",   lat: 35.58,   lon: 71.72,   max: 23.5, min: 5.5, rain: 7 },
    { city: "Balakot",    lat: 34.55,   lon: 73.35,   max: 24.0, min: 9.0, rain: 6 },
    { city: "Chitral",    lat: 35.85,   lon: 71.78,   max: 23.3, min: 5.5, rain: 5 },
    { city: "Drosh",      lat: 35.56,   lon: 71.79,   max: 24.3, min: 7.5, rain: 5 },
    { city: "Pattan",     lat: 35.12,   lon: 73.01,   max: 26.0, min: 6.0, rain: 1 },
    { city: "Kalam",      lat: 35.48,   lon: 72.58,   max: 14.0, min: 0.0, rain: "Trace" },

    // Gilgit-Baltistan & AJK
    { city: "Gilgit",       lat: 35.9208, lon: 74.3083, max: 24.5, min: 6,  rain: 0 },
    { city: "Skardu",       lat: 35.2971, lon: 75.6333, max: 16.6, min: 2,  rain: 0 },
    { city: "Muzaffarabad", lat: 34.3700, lon: 73.4714, max: 26.3, min: 9,  rain: 0 },
    { city: "Chilas",       lat: 35.42,   lon: 74.09,   max: 29.3, min: 9.5, rain: 4 },
    { city: "Astore",       lat: 35.36,   lon: 74.85,   max: 12.0, min: 3.0, rain: 2 },
    { city: "Gupis",        lat: 36.22,   lon: 73.44,   max: 21.0, min: 3.0, rain: "Trace" },
    { city: "Bunji",        lat: 35.64,   lon: 74.63,   max: 23.5, min: 5.5, rain: "Trace" },
    { city: "Garhi Dupatta",lat: 34.22,   lon: 73.61,   max: 26.5, min: 7.0, rain: "Trace" }
  ],

  // --- PAST DAYS (SAVED FOREVER) ---
  "15 March 2026": [
    // Punjab
    { city: "Lahore",          lat: 31.5204, lon: 74.3587, max: 31, min: 16, rain: 0   },
    { city: "Islamabad",       lat: 33.7294, lon: 73.0931, max: 27, min: 13, rain: 12.5},
    { city: "Rawalpindi",      lat: 33.5973, lon: 73.0479, max: 27, min: 14, rain: 8.0 },
    { city: "Faisalabad",      lat: 31.4181, lon: 73.0776, max: 32, min: 16, rain: 0   },
    { city: "Multan",          lat: 30.1978, lon: 71.4697, max: 33, min: 18, rain: 0   },
    { city: "Sargodha",        lat: 32.0836, lon: 72.6711, max: 31, min: 15, rain: 0   },
    { city: "Jhelum",          lat: 32.9405, lon: 73.7276, max: 29, min: 14, rain: 2.5 },
    { city: "Bahawalpur",      lat: 29.3957, lon: 71.6833, max: 34, min: 17, rain: 0   },
    { city: "Sialkot",         lat: 32.4925, lon: 74.5310, max: 30, min: 15, rain: 4.0 },
    { city: "Gujranwala",      lat: 32.1617, lon: 74.1883, max: 31, min: 16, rain: 0   },
    { city: "D.G. Khan",       lat: 30.0489, lon: 70.6455, max: 33, min: 17, rain: 0   },
    { city: "Murree",          lat: 33.9070, lon: 73.3943, max: 15, min: 6,  rain: 18.2},
    
    // Balochistan
    { city: "Quetta",     lat: 30.1798, lon: 66.9750, max: 22, min: 6,  rain: 0 },
    { city: "Khuzdar",    lat: 27.8123, lon: 66.6127, max: 28, min: 12, rain: 0 },
    { city: "Kalat",      lat: 29.0225, lon: 66.5916, max: 20, min: 5,  rain: 0 },
    { city: "Dalbandin",  lat: 28.8885, lon: 64.4062, max: 30, min: 14, rain: 0 },
    { city: "Gwadar",     lat: 25.1216, lon: 62.3254, max: 32, min: 23, rain: 0 },

    // Sindh
    { city: "Karachi",    lat: 24.8608, lon: 67.0104, max: 35, min: 24, rain: 0 },
    { city: "Hyderabad",  lat: 25.3960, lon: 68.3578, max: 36, min: 22, rain: 0 },
    { city: "Sukkur",     lat: 27.7139, lon: 68.8459, max: 35, min: 21, rain: 0 },

    // KP
    { city: "Peshawar",   lat: 34.0150, lon: 71.5249, max: 28, min: 14, rain: 15.0 },
    { city: "Swat",       lat: 35.2227, lon: 72.4258, max: 22, min: 9,  rain: 25.0 }
  ],

  "14 March 2026": [
    { city: "Lahore",     lat: 31.5204, lon: 74.3587, max: 30, min: 15, rain: 0 },
    { city: "Islamabad",  lat: 33.7294, lon: 73.0931, max: 26, min: 12, rain: 0 },
    { city: "Quetta",     lat: 30.1798, lon: 66.9750, max: 20, min: 5,  rain: 0 },
    { city: "Karachi",    lat: 24.8608, lon: 67.0104, max: 34, min: 23, rain: 0 }
  ]
};

document.addEventListener('DOMContentLoaded', () => {

  const html = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  let currentTheme = localStorage.getItem('mj-theme') || 'dark';
  html.setAttribute('data-theme', currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', currentTheme);
      localStorage.setItem('mj-theme', currentTheme);
      if (typeof window.reinitChart === 'function') window.reinitChart();
      window.dispatchEvent(new Event('theme-changed'));
    });
  }

  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ==========================================================
     📍 AUTO-HIGHLIGHT NAVBAR LINKS ON SCROLL (SCROLL SPY)
     ========================================================== */
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 100;
      navLinks.forEach(link => {
          const targetId = link.getAttribute('href');
          if(targetId && targetId !== '#') {
              const section = document.querySelector(targetId);
              if (section) {
                  if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                      navLinks.forEach(a => a.classList.remove('active'));
                      link.classList.add('active');
                  }
              }
          }
      });
  }, { passive: true });

  const dropBtns = document.querySelectorAll('.dropbtn');
  dropBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); 
      const dropdownContent = btn.nextElementSibling;
      if (dropdownContent.classList.contains('show-drop-mobile')) {
        dropdownContent.classList.remove('show-drop-mobile');
      } else {
        dropdownContent.classList.add('show-drop-mobile');
      }
    });
  });

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
    navMenu.querySelectorAll('a:not(.dropbtn)').forEach(a => {
      a.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  const revEls = document.querySelectorAll('.reveal');
  if (revEls.length > 0) {
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const d = parseInt(e.target.dataset.delay || 0);
          setTimeout(() => e.target.classList.add('in'), d);
          revObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    revEls.forEach(el => revObs.observe(el));
  }
  setTimeout(() => { document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')); }, 2500);

  function tick() {
    const now = new Date();
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    const pk = new Date(utcMs + 5 * 3600000); 
    const DAYS   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const pad = n => String(n).padStart(2, '0');
    
    const te = document.getElementById('live-time');
    const de = document.getElementById('live-date');
    if (te) te.textContent = `${pad(pk.getHours())}:${pad(pk.getMinutes())}:${pad(pk.getSeconds())} PKT`;
    if (de) de.textContent = `${DAYS[pk.getDay()]}, ${pk.getDate()} ${MONTHS[pk.getMonth()]} ${pk.getFullYear()}`;
  }
  tick();
  setInterval(tick, 1000);

  const phrases = [
    'Analyzing Pakistan\'s Climate Dynamics',
    'Tracking Global SST & Oceanic Plumes',
    'Monitoring Live River & Seismic Data',
    'Evaluating ECMWF & NOAA Forecasts',
    'Decoding National Weather Patterns',
  ];
  let pi = 0, ci = 0, deleting = false;
  const typedEl = document.getElementById('typed-out');
  function typeLoop() {
    if (!typedEl) return;
    const phrase = phrases[pi];
    if (deleting) {
      typedEl.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(typeLoop, 400); return; }
      setTimeout(typeLoop, 35);
    } else {
      typedEl.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(typeLoop, 2500); return; }
      setTimeout(typeLoop, 60);
    }
  }
  typeLoop();

  /* ---- LIVE WEATHER CARDS & AQI ---- */
  const WMO = {
    0:'Clear Sky', 1:'Mainly Clear', 2:'Partly Cloudy', 3:'Overcast',
    45:'Foggy', 48:'Icy Fog', 51:'Light Drizzle', 53:'Drizzle', 55:'Dense Drizzle',
    61:'Slight Rain', 63:'Moderate Rain', 65:'Heavy Rain',
    71:'Slight Snow', 73:'Moderate Snow', 75:'Heavy Snow',
    80:'Showers', 81:'Heavy Showers', 82:'Violent Showers',
    95:'Thunderstorm', 96:'Thunder + Hail', 99:'Heavy Thunder + Hail',
  };

  async function loadWeather() {
    const grid = document.getElementById('weather-grid');
    if(!grid) return;
    
    const LIVE_CITIES = [
      { name: 'Karachi',   lat: 24.8608, lon: 67.0104 },
      { name: 'Quetta',    lat: 30.1798, lon: 66.9750 },
      { name: 'Islamabad', lat: 33.7294, lon: 73.0931 },
      { name: 'Lahore',    lat: 31.5204, lon: 74.3587 },
      { name: 'Peshawar',  lat: 34.0150, lon: 71.5249 },
    ];

    try {
      const results = await Promise.all(LIVE_CITIES.map(async city => {
        let wRes = null, aRes = null;
        try { wRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&wind_speed_unit=kmh&timezone=Asia%2FKarachi`).then(r => r.json()); } catch(e) {}
        try { aRes = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${city.lat}&longitude=${city.lon}&current=us_aqi`).then(r => r.json()); } catch(e) {}
        return { city, weather: wRes, aqi: aRes };
      }));
      
      grid.innerHTML = '';
      results.forEach(data => {
        if(data && data.weather && data.weather.current) {
          const c = data.weather.current;
          const aqiVal = (data.aqi && data.aqi.current && data.aqi.current.us_aqi) ? data.aqi.current.us_aqi : 50;
          
          let aqiBadge = '';
          if(aqiVal <= 50) aqiBadge = `<span class="wc-badge" style="background:var(--above); color:#000;">AQI ${aqiVal} (Good)</span>`;
          else if(aqiVal <= 100) aqiBadge = `<span class="wc-badge" style="background:#facc15; color:#000;">AQI ${aqiVal} (Mod)</span>`;
          else if(aqiVal <= 150) aqiBadge = `<span class="wc-badge" style="background:var(--warn); color:#000;">AQI ${aqiVal} (Unhealthy)</span>`;
          else aqiBadge = `<span class="wc-badge" style="background:var(--below); color:#fff;">AQI ${aqiVal} (Haz)</span>`;

          const card = document.createElement('div');
          card.className = 'glass-card w-card reveal in';
          card.innerHTML = `<div class="wc-top"><div class="wc-city">${data.city.name}</div>${aqiBadge}</div><div class="wc-cond">${WMO[c.weather_code] || 'VARIABLE'}</div><div class="wc-temp">${c.temperature_2m != null ? c.temperature_2m.toFixed(1) + '°C' : '—'}</div><div class="wc-stats"><div class="wc-stat"><span class="wc-stat-icon">💧</span> Humidity: <span class="wc-row-val">${c.relative_humidity_2m}%</span></div><div class="wc-stat"><span class="wc-stat-icon">🌬</span> Wind: <span class="wc-row-val">${c.wind_speed_10m.toFixed(1)} km/h</span></div></div>`;
          grid.appendChild(card);
        }
      });
      if(grid.innerHTML === '') grid.innerHTML = '<div class="w-loading" style="color:var(--below)">Weather data temporarily unavailable.</div>';
    } catch { grid.innerHTML = '<div class="w-loading" style="color:var(--below)">Unable to load weather data. Check your internet connection.</div>'; }
  }
  loadWeather();

  /* ==========================================================
     📍 RIVER GAUGE API
     ========================================================== */
  async function loadRiverData() {
    const grid = document.getElementById('river-grid');
    if(!grid) return; 
    
    const RIVERS = [
      { name: 'Indus (Tarbela)', lat: 34.08, lon: 72.82 }, { name: 'Jhelum (Mangla)', lat: 33.14, lon: 73.64 },
      { name: 'Chenab (Marala)', lat: 32.67, lon: 74.46 }, { name: 'Kabul (Nowshera)',lat: 34.01, lon: 71.98 },
      { name: 'Indus (Sukkur)',  lat: 27.68, lon: 68.87 }
    ];

    try {
      const results = await Promise.all(RIVERS.map(river => {
        return fetch(`https://flood-api.open-meteo.com/v1/flood?latitude=${river.lat}&longitude=${river.lon}&daily=river_discharge&forecast_days=1`)
              .then(r => {
                  if (!r.ok) throw new Error("API Error");
                  return r.json();
              })
              .catch(() => null);
      }));
      
      grid.innerHTML = '';
      let dataFound = false;

      results.forEach((data, i) => { 
        if(data && data.daily && data.daily.river_discharge && data.daily.river_discharge.length > 0) { 
          dataFound = true;
          const discharge = parseFloat(data.daily.river_discharge[0]);
          const card = document.createElement('div'); card.className = 'glass-card w-card reveal in';
          let status = 'Normal Flow'; let badgeColor = 'var(--above)';
          if (discharge > 3000 && discharge <= 8000) { status = 'High Flow'; badgeColor = 'var(--warn)'; }
          else if (discharge > 8000) { status = 'Flood Risk'; badgeColor = 'var(--below)'; }
          card.innerHTML = `
            <div class="wc-top"><div class="wc-city">${RIVERS[i].name}</div><span class="wc-badge" style="background:${badgeColor}; color:#000;">${status}</span></div>
            <div class="wc-cond">Forecasted Discharge</div>
            <div style="font-family: var(--font-head); font-size: 2.6rem; font-weight: 800; color: var(--accent2); text-shadow: 0 0 15px rgba(59, 130, 246, 0.4); margin-bottom: 1.5rem;">${discharge} <span style="font-size: 1rem; color: var(--text3);">m³/s</span></div>
            <div class="wc-stats"><div class="wc-stat"><span class="wc-stat-icon">🌊</span> Source</div><div class="wc-row-val" style="font-size: 0.8rem; color: var(--text3);">Open-Meteo GloFAS</div></div>`;
          grid.appendChild(card); 
        } 
      });
      
      if (!dataFound) {
          grid.innerHTML = '<div class="w-loading" style="color:var(--warn)">River data temporarily unavailable.</div>';
      }
    } catch { 
      grid.innerHTML = '<div class="w-loading" style="color:var(--below)">Unable to connect to hydrological models.</div>'; 
    }
  }
  loadRiverData();

  /* ==========================================================
     📍 EARTHQUAKES API
     ========================================================== */
  async function loadEarthquakes() {
    const grid = document.getElementById('quake-grid');
    if(!grid) return; 
    
    try {
      const res = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=3.5&limit=4&minlatitude=23&maxlatitude=37&minlongitude=60&maxlongitude=78');
      if (!res.ok) throw new Error("API Blocked");
      const data = await res.json();
      
      grid.innerHTML = '';
      if(!data.features || data.features.length === 0) { 
          grid.innerHTML = '<div class="w-loading">No recent significant earthquakes in the region.</div>'; 
          return; 
      }
      
      data.features.forEach(eq => {
          const props = eq.properties; const mag = props.mag.toFixed(1); const place = props.place;
          const time = new Date(props.time).toLocaleString('en-PK', {timeZone: 'Asia/Karachi', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit'});
          let magColor = 'var(--above)'; if(mag >= 4.5) magColor = 'var(--warn)'; if(mag >= 5.5) magColor = 'var(--below)';
          const card = document.createElement('div'); card.className = 'glass-card w-card reveal in';
          card.innerHTML = `
            <div class="wc-top" style="margin-bottom:0.5rem;"><div class="wc-city" style="font-size:1rem; color:var(--text2);">Magnitude <span style="color:${magColor}; font-size:1.4rem; margin-left:5px;">${mag}</span></div><span class="wc-badge" style="background:${magColor}; color:#000;">USGS</span></div>
            <div class="wc-cond" style="text-transform:none; font-size:0.95rem; color:var(--text1); margin-bottom:1rem; font-weight:600; min-height:45px; display:flex; align-items:center; justify-content:center;">${place}</div>
            <div class="wc-stats" style="border-top: 1px solid var(--border); padding-top: 0.8rem; justify-content:center;"><div class="wc-stat"><span class="wc-stat-icon">🕒</span> <span class="wc-row-val">${time} PKT</span></div></div>`;
          grid.appendChild(card);
      });
    } catch { 
      grid.innerHTML = '<div class="w-loading" style="color:var(--below)">Unable to load seismic data from USGS.</div>'; 
    }
  }
  loadEarthquakes();

  /* ==========================================================
     📍 CLIMATE TRENDS CHART LOGIC
     ========================================================== */
  function initTrends() {
      const ctx = document.getElementById('trends-chart');
      const selector = document.getElementById('trends-city-selector');
      if (!ctx || !selector) return;

      const dates = Object.keys(window.PMD_ARCHIVE).reverse();
      const firstDay = window.PMD_ARCHIVE[dates[0]];
      firstDay.forEach(d => {
          const opt = document.createElement('option');
          opt.value = d.city; opt.textContent = d.city;
          selector.appendChild(opt);
      });

      let trendChartInst = null;

      function drawTrend(city) {
          const labels = [];
          const maxData = [];
          const minData = [];
          const rainData = [];

          dates.forEach(date => {
              labels.push(date);
              const dayData = window.PMD_ARCHIVE[date].find(d => d.city === city);
              if(dayData) {
                  maxData.push(dayData.max === '--' ? null : parseFloat(dayData.max));
                  minData.push(dayData.min === '--' ? null : parseFloat(dayData.min));
                  rainData.push(dayData.rain === '--' || dayData.rain === 'Trace' ? 0 : parseFloat(dayData.rain));
              } else {
                  maxData.push(null); minData.push(null); rainData.push(0);
              }
          });

          if(trendChartInst) trendChartInst.destroy();
          trendChartInst = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: labels,
                  datasets: [
                      { label: 'Max Temp (°C)', data: maxData, borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.2)', tension: 0.4, pointRadius: 4 },
                      { label: 'Min Temp (°C)', data: minData, borderColor: '#06b6d4', backgroundColor: 'rgba(6,182,212,0.2)', tension: 0.4, pointRadius: 4 },
                      { label: 'Rainfall (mm)', data: rainData, type: 'bar', backgroundColor: 'rgba(59,130,246,0.5)', yAxisID: 'y1' }
                  ]
              },
              options: {
                  responsive: true, maintainAspectRatio: false,
                  scales: {
                      y: { type: 'linear', display: true, position: 'left', title: {display: true, text: 'Temperature (°C)', color: '#94a3b8'}, grid: {color: 'rgba(255,255,255,0.05)'} },
                      y1: { type: 'linear', display: true, position: 'right', grid: {drawOnChartArea: false}, title: {display: true, text: 'Rainfall (mm)', color: '#94a3b8'} },
                      x: { grid: { display: false } }
                  },
                  plugins: {
                      legend: { labels: { color: '#cbd5e1', font: { family: 'Inter' } } }
                  }
              }
          });
      }

      selector.addEventListener('change', (e) => drawTrend(e.target.value));
      drawTrend(selector.value); 
  }
  initTrends();

  /* ==========================================================
     📍 SPACE & ASTRONAUTICS API LOGIC
     ========================================================== */
  async function initSpace() {
      const latEl = document.getElementById('iss-lat');
      if(!latEl) return; 

      setInterval(async () => {
          try {
              const r = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
              const d = await r.json();
              document.getElementById('iss-lat').textContent = d.latitude.toFixed(4) + '°';
              document.getElementById('iss-lon').textContent = d.longitude.toFixed(4) + '°';
              document.getElementById('iss-alt').textContent = d.altitude.toFixed(1) + ' km';
              document.getElementById('iss-vel').textContent = d.velocity.toFixed(0) + ' km/h';
          } catch(e) {}
      }, 3000); 

      try {
         const smR = await fetch('https://api.open-meteo.com/v1/forecast?latitude=30.1798&longitude=66.9750&daily=sunrise,sunset,uv_index_max&timezone=Asia%2FKarachi');
         const smD = await smR.json();
         document.getElementById('sq-sunrise').textContent = new Date(smD.daily.sunrise[0]).toLocaleTimeString('en-PK', {hour:'2-digit', minute:'2-digit'});
         document.getElementById('sq-sunset').textContent = new Date(smD.daily.sunset[0]).toLocaleTimeString('en-PK', {hour:'2-digit', minute:'2-digit'});
         document.getElementById('sq-uv').textContent = smD.daily.uv_index_max[0];
      } catch(e) {}
  }
  initSpace();

  /* ---- SHARE BUTTON ---- */
  const shareBtn = document.getElementById('share-btn');
  if(shareBtn) {
      shareBtn.addEventListener('click', async () => {
          if (navigator.share) {
              try { await navigator.share({ title: 'PakClimate Insight 2026', text: 'Check out the comprehensive climate analysis and live weather for Pakistan.', url: window.location.href }); } catch (err) {}
          } else { alert("Copy this link to share: " + window.location.href); }
      });
  }

  /* ---- PROBABILITY BAR CHART ---- */
  let chartInst = null;
  function buildChart() {
    const ctx = document.getElementById('probChart');
    if (!ctx) return;
    if (typeof Chart === 'undefined') { setTimeout(buildChart, 500); return; }
    if (chartInst) { chartInst.destroy(); chartInst = null; }
    
    const isDark = html.getAttribute('data-theme') === 'dark';
    const textColor  = isDark ? '#94a3b8' : '#334155';
    const gridColor  = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.08)';
    
    chartInst = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sindh', 'S. Balochistan', 'Punjab', 'KPK', 'Northern Areas'],
        datasets: [
          { label: 'Below Normal %', data: [65, 60, 15, 10, 15], backgroundColor: 'rgba(239,68,68,0.7)', borderColor: '#ef4444', borderWidth: 1, borderRadius: 4 },
          { label: 'Near Normal %',  data: [25, 30, 30, 35, 30], backgroundColor: 'rgba(56,189,248,0.7)', borderColor: '#38bdf8', borderWidth: 1, borderRadius: 4 },
          { label: 'Above Normal %', data: [10, 10, 55, 55, 55], backgroundColor: 'rgba(16,185,129,0.7)', borderColor: '#10b981', borderWidth: 1, borderRadius: 4 },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false, 
        plugins: {
          legend: { labels: { color: textColor, font: { family: "'Inter'", size: window.innerWidth < 768 ? 10 : 12 }, boxWidth: 12, padding: 15 } },
          tooltip: { backgroundColor: isDark ? '#0f172a' : '#ffffff', titleColor: isDark ? '#f8fafc' : '#0f172a', bodyColor: textColor, borderColor: isDark ? '#1e293b' : '#e2e8f0', borderWidth: 1, padding: 12, cornerRadius: 6, callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y}%` } }
        },
        scales: { x: { ticks: { color: textColor, font: { size: 11 } }, grid: { display: false } }, y: { ticks: { color: textColor, font: { size: 11 }, callback: v => v + '%' }, grid: { color: gridColor }, border: { display: false }, max: 100 } }
      }
    });
  }
  const chartEl = document.getElementById('probChart');
  if (chartEl) { 
      const chartObs = new IntersectionObserver(entries => { 
          if (entries[0].isIntersecting) { 
              buildChart(); 
              chartObs.disconnect(); 
          } 
      }, { threshold: 0.1 });
      chartObs.observe(chartEl.parentElement); 
  }
  window.reinitChart = function() { if (chartInst) buildChart(); };

  document.querySelectorAll('.dtab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dtab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.driver-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('panel-' + btn.dataset.panel);
      if (panel) {
        panel.classList.add('active');
        panel.querySelectorAll('.dpi-fill, .conf-fill, .dep-fill').forEach(bar => {
          const w = bar.style.width; bar.style.width = '0%';
          requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = w; }));
        });
      }
    });
  });

  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) { scrollTopBtn.style.display = "block"; } else { scrollTopBtn.style.display = "none"; }
    });
    scrollTopBtn.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ==========================================================
     PMD GIS TEMPERATURE & RAINFALL MAP (Leaflet.js)
     ========================================================== */

  const historySelector = document.getElementById('history-date-selector');
  if (historySelector && window.PMD_ARCHIVE) {
      historySelector.innerHTML = ''; 
      Object.keys(window.PMD_ARCHIVE).forEach(date => {
          const option = document.createElement('option');
          option.value = date;
          option.textContent = date;
          historySelector.appendChild(option);
      });
  }

  const pmdMapElement = document.getElementById('pakistan-temp-map');
  const historyMapElement = document.getElementById('history-temp-map');
  const targetElement = pmdMapElement || historyMapElement;

  if (targetElement) {
      if (typeof L === 'undefined') {
          targetElement.innerHTML = `
            <div style="padding: 2rem; text-align: center; color: var(--warn); border: 1px dashed var(--warn); border-radius: var(--radius); background: var(--bg2);">
              <strong>⚠️ Map Library Blocked</strong><br><br>
              Your browser, ad-blocker, or network is blocking the map files from loading.<br>
              Please disable strict tracking protection/shields for this site and refresh.
            </div>`;
      } else {
          
          let currentMapMode = 'temp'; 
          let currentGeoJSON = null;
          let currentMarkers = [];
          
          let selectedDate = historySelector ? historySelector.value : Object.keys(window.PMD_ARCHIVE)[0]; 

          const map = L.map(targetElement.id, { scrollWheelZoom: false, attributionControl: false }).setView([30.0, 69.0], 5);
          
          delete L.Icon.Default.prototype._getIconUrl;
          L.Icon.Default.mergeOptions({
              iconRetinaUrl: '',
              iconUrl: '',
              shadowUrl: ''
          });
          
          const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', { maxZoom: 10 });
          const lightTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', { maxZoom: 10 });
          
          const baseMaps = { "Dark Map": darkTiles, "Light Map": lightTiles };
          L.control.layers(baseMaps).addTo(map);

          function setMapTheme() {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'light') { map.removeLayer(darkTiles); lightTiles.addTo(map); } 
            else { map.removeLayer(lightTiles); darkTiles.addTo(map); }
          }
          setMapTheme();
          window.addEventListener('theme-changed', setMapTheme);

          fetch('pk.json').then(response => response.json()).then(data => {
              const neonPalette = ['#06b6d4', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899', '#f59e0b'];
              let colorIndex = 0;
              
              currentGeoJSON = L.geoJSON(data, { 
                  style: function() {
                      if(currentMapMode === 'temp') {
                          const provinceColor = neonPalette[colorIndex % neonPalette.length];
                          colorIndex++;
                          return { color: provinceColor, weight: 2.5, fillColor: provinceColor, fillOpacity: 0.05, className: 'pak-glow-border' };
                      } else {
                          return { color: '#3b82f6', weight: 2, fillColor: '#3b82f6', fillOpacity: 0.05, className: 'pak-glow-border-rain' };
                      }
                  },
                  onEachFeature: function(feature, layer) {
                      const provName = feature.properties.NAME_1 || feature.properties.name || feature.properties.PROVINCE;
                      if (provName) layer.bindTooltip(`<strong>${provName}</strong>`, { className: 'hover-tooltip', sticky: true });
                  }
              }).addTo(map);
          }).catch(err => console.log('pk.json map borders missing - deploy to server to fix'));

          function drawMapData() {
            currentMarkers.forEach(m => map.removeLayer(m));
            currentMarkers = [];

            if (currentGeoJSON) {
                let cIndex = 0;
                const neonPalette = ['#06b6d4', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899', '#f59e0b'];
                currentGeoJSON.setStyle(function() {
                    if(currentMapMode === 'temp') {
                        const provinceColor = neonPalette[cIndex % neonPalette.length];
                        cIndex++;
                        return { color: provinceColor, weight: 2.5, fillColor: provinceColor, fillOpacity: 0.05, className: 'pak-glow-border' };
                    } else {
                        return { color: '#3b82f6', weight: 2, fillColor: '#3b82f6', fillOpacity: 0.05, className: 'pak-glow-border-rain' };
                    }
                });
            }

            const dayData = window.PMD_ARCHIVE[selectedDate];
            if(!dayData) return;

            dayData.forEach(data => {
              let markerIcon, popupContent;
              const displayMax = data.max === '--' ? '--' : `${data.max}°`;
              const displayMin = data.min === '--' ? '--' : `${data.min}°`;

              if (currentMapMode === 'temp') {
                  markerIcon = L.divIcon({ className: 'custom-dot-icon', html: `<div class="map-dot"></div>`, iconSize: [16, 16], iconAnchor: [8, 8] });
                  popupContent = `
                    <div class="temp-popup-content">
                      <div class="tp-city">${data.city}</div>
                      <div class="tp-date">${selectedDate}</div>
                      <div class="tp-temps">
                        <div><span class="tp-lbl">MAX</span><span class="tp-max">${displayMax}</span></div>
                        <div><span class="tp-lbl">MIN</span><span class="tp-min">${displayMin}</span></div>
                      </div>
                    </div>`;
              } else {
                  markerIcon = L.divIcon({ className: 'custom-dot-icon', html: `<div class="map-dot-rain"></div>`, iconSize: [18, 18], iconAnchor: [9, 18] });
                  const rainText = data.rain === 0 ? "0 mm" : (data.rain === "--" ? "--" : `${data.rain} mm`);
                  popupContent = `
                    <div class="temp-popup-content">
                      <div class="tp-city">${data.city}</div>
                      <div class="tp-date">${selectedDate}</div>
                      <div class="tp-temps" style="color: var(--accent2);">
                        <div><span class="tp-lbl" style="margin-bottom: 2px;">24H RAINFALL</span><span class="tp-max" style="color:var(--accent2); font-size:1.4rem;">${rainText}</span></div>
                      </div>
                    </div>`;
              }

              const marker = L.marker([data.lat, data.lon], {icon: markerIcon}).addTo(map);
              marker.bindTooltip(`<strong>${data.city}</strong>`, { direction: 'top', offset: [0, -10], opacity: 0.95, className: 'hover-tooltip' });
              marker.bindPopup(popupContent, { closeButton: false, offset: [0, -10] });
              currentMarkers.push(marker);
            });
          }

          const btnTemp = document.getElementById('btn-mode-temp');
          const btnRain = document.getElementById('btn-mode-rain');

          if (btnTemp && btnRain) {
              btnTemp.addEventListener('click', () => {
                  currentMapMode = 'temp';
                  btnTemp.classList.add('active'); btnRain.classList.remove('rain-active', 'active');
                  drawMapData();
              });
              btnRain.addEventListener('click', () => {
                  currentMapMode = 'rain';
                  btnRain.classList.add('rain-active', 'active'); btnTemp.classList.remove('active');
                  drawMapData();
              });
          }

          drawMapData();
          
          if (historySelector) {
              historySelector.addEventListener('change', (e) => {
                  selectedDate = e.target.value;
                  drawMapData();
              });
          } else {
             const mapTitle = document.getElementById('pmd-map-date-title');
             if (mapTitle) mapTitle.textContent = selectedDate;
          }
      }
  }

}); // END DOMContentLoaded

window.calcFeelsLike = function() {
  const tC = parseFloat(document.getElementById('hi-temp').value); const h = parseFloat(document.getElementById('hi-hum').value); const res = document.getElementById('hi-result');
  if (isNaN(tC) || isNaN(h)) { res.innerHTML = "Please enter valid numbers."; res.classList.add('active'); return; }
  let tF = (tC * 9/5) + 32; let hiF = 0;
  if (tF < 80) { hiF = tF; } else {
    let simpleHI = 0.5 * (tF + 61.0 + ((tF - 68.0) * 1.2) + (h * 0.094));
    if (simpleHI < 80) { hiF = simpleHI; } else {
      hiF = -42.379 + 2.04901523*tF + 10.14333127*h - 0.22475541*tF*h - 0.00683783*tF*tF - 0.05481717*h*h + 0.00122874*tF*tF*h + 0.00085282*tF*h*h - 0.00000199*tF*tF*h*h;
      if (h < 13 && tF >= 80 && tF <= 112) { hiF -= ((13 - h) / 4) * Math.sqrt((17 - Math.abs(tF - 95)) / 17); }
      else if (h > 85 && tF >= 80 && tF <= 87) { hiF += ((h - 85) / 10) * ((87 - tF) / 5); }
    }
  }
  let hiC = (hiF - 32) * 5/9; res.innerHTML = `Heat Index: <span style="color:var(--accent); font-family:var(--font-head); font-size:1.8rem; display:block; margin-top:0.5rem;">${hiC.toFixed(1)} °C</span>`; res.classList.add('active');
};

window.calcAvgTemp = function() {
  const maxStr = document.getElementById('avg-max').value; const minStr = document.getElementById('avg-min').value; const res = document.getElementById('temp-result'); const parseArr = (str) => str.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n)); const maxArr = parseArr(maxStr); const minArr = parseArr(minStr);
  if (maxArr.length === 0 && minArr.length === 0) { res.innerHTML = "Please enter temperature values."; res.classList.add('active'); return; }
  let html = "";
  if (maxArr.length > 0) { const avgMax = maxArr.reduce((a, b) => a + b) / maxArr.length; html += `Avg Max: <span style="color:var(--below)">${avgMax.toFixed(1)} °C</span><br>`; }
  if (minArr.length > 0) { const avgMin = minArr.reduce((a, b) => a + b) / minArr.length; html += `Avg Min: <span style="color:var(--accent)">${avgMin.toFixed(1)} °C</span>`; }
  res.innerHTML = html; res.classList.add('active');
};

window.calcAvgRain = function() {
  const rainStr = document.getElementById('avg-rain').value; const res = document.getElementById('rain-result'); const rainArr = rainStr.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
  if (rainArr.length === 0) { res.innerHTML = "Please enter rainfall values."; res.classList.add('active'); return; }
  const total = rainArr.reduce((a, b) => a + b); const avg = total / rainArr.length;
  res.innerHTML = `Total: <span style="color:var(--accent)">${total.toFixed(1)} mm</span><br>Avg: <span style="color:var(--above)">${avg.toFixed(1)} mm</span>/event`; res.classList.add('active');
};