export default function FooterBar() {
  // document.getElementById("weather-icon").src = getIconName();
  const weatherIcon = document.getElementById(
    "weather-icon",
  ) as HTMLImageElement;
  if (weatherIcon) {
    weatherIcon.src = getIconName();
  }

  return (
    <footer className="flex lg:flex lg:items-baseline p-8 uppercase font-semibold tracking-widest space-y-4 md:space-y-6 lg:space-x-16">
      <nav className="grid grid-flow-row md:grid-flow-col md:auto-cols-min gap-x-16 gap-y-4">
        <a className="border-b-2" href="/about">
          About
        </a>
        <a className="border-b-2" href="mailto:info@badwrong.dev">
          Email
        </a>
        <a
          className="border-b-2"
          href="https://www.linkedin.com/in/iharsuvorau"
        >
          LinkedIn
        </a>
      </nav>
      <div className="grid grid-flow-row md:grid-flow-col md:auto-cols-max gap-x-16 gap-y-4">
        <span>
          Made in Tartu{" "}
          <img
            id="weather-icon"
            className="inline w-5 mx-0.5 mb-1"
            alt="Cloud Rain Icon"
            role="img"
            src={getIconName()}
          />{" "}
          Estonia
        </span>
        <span>
          © Bad<span className="mx-1">&</span>Wrong OÜ
        </span>
      </div>
    </footer>
  );
}

function getIconName() {
  const icons = [
    "/images/cloud.rain.svg",
    "/images/cloud.snow.svg",
    "/images/snowflake.svg",
    "/images/wind.snow.svg",
    "/images/wind.svg",
    "/images/cloud.svg",
    "/images/sun.max.svg",
  ];
  var month = new Date().getMonth();
  if (month >= 11 || month <= 1) {
    return icons[2];
  } else if (month >= 2 && month <= 4) {
    return icons[1];
  } else if (month >= 5 && month <= 7) {
    return icons[4];
  } else if (month >= 8 && month <= 10) {
    return icons[0];
  } else {
    return icons[5];
  }
}
