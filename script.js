
document.addEventListener("DOMContentLoaded", () => {
  // Hardcoded example for now
  const prayerTimes = {
    fajr: "4:35 AM",
    dhuhr: "12:10 PM",
    asr: "3:45 PM",
    maghrib: "7:30 PM",
    isha: "9:00 PM"
  };

  for (let time in prayerTimes) {
    document.getElementById(time).innerText = prayerTimes[time];
  }

  const quotes = [
    "Indeed, prayer prohibits immorality and wrongdoing. (29:45)",
    "And establish prayer and give zakah. (2:43)",
    "Verily, in the remembrance of Allah do hearts find rest. (13:28)",
    "Establish prayer at the decline of the sun. (17:78)",
    "Successful indeed are the believers who are humble in their prayers. (23:1-2)"
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
});
