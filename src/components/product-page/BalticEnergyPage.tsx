export default function BalticEnergyPage() {
  return (
    <main className="flex flex-grow flex-col my-16 p-8 text-center justify-center items-center">
      <PageHeader />

      <div className="w-full grid grid-cols-1 my-16">
        <ImageSection
          text="Hourly electricity and daily natural gas updates."
          image={{
            src: "/images/Baltic-Energy/v1.2/CurrentHour-44mm.png",
            srcSet:
              "/images/Baltic-Energy/v1.2/CurrentHour-44mm.png 1x, /images/Baltic-Energy/v1.2/CurrentHour-44mm@2x.png 2x",
            alt: "Energy Live Apple Watch App",
          }}
        />

        <ImageSection
          text="Day-ahead hourly prices for the current day with basic statistics."
          image={{
            src: "/images/Baltic-Energy/v1.2/DayAhead-44mm.png",
            srcSet:
              "/images/Baltic-Energy/v1.2/DayAhead-44mm.png 1x, /images/Baltic-Energy/v1.2/DayAhead-44mm@2x.png 2x",
            alt: "Energy Live Apple Watch App",
          }}
          isReverse={true}
        />

        <ImageSection
          text="Country selection without privacy intervention &mdash; choose the location yourself."
          image={{
            src: "/images/Baltic-Energy/v1.2/CountryBlack-44mm.png",
            srcSet:
              "/images/Baltic-Energy/v1.2/CountryBlack-44mm.png 1x, /images/Baltic-Energy/v1.2/CountryBlack-44mm@2x.png 2x",
            alt: "Energy Live Apple Watch App",
          }}
        />

        <ImageSection
          text="The whole family of Apple Watch complications with regular background refresh."
          image={{
            src: "/images/Baltic-Energy/BalticEnergy-complication.png",
            srcSet:
              "/images/Baltic-Energy/BalticEnergy-complication.png 1x, /images/Baltic-Energy/BalticEnergy-complication@2x.png 2x",
            alt: "Energy Live Apple Watch App",
          }}
          isReverse={true}
        />
      </div>

      <div className="flex mb-6">
        <a
          className="inline-flex items-center justify-center px-6 py-3 text-xl font-medium rounded-full text-white hover:text-white active:text-white bg-emerald-500 hover:bg-emerald-600 "
          href="https://apps.apple.com/us/app/baltic-energy/id1607203216"
          title="Get on App Store"
        >
          Get on App Store
        </a>
      </div>
    </main>
  );
}

function PageHeader() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-grow items-center">
        <img
          className="object-scale-down h-12 sm:h-16 mr-4"
          src="/images/Baltic-Energy/BalticEnergy.png"
          srcSet="/images/Baltic-Energy/BalticEnergy.png 1x, /images/Baltic-Energy/BalticEnergy@2x.png 2x"
          alt="Baltic Energy App Icon"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold">Baltic Energy</h1>
      </div>
      <p className="text-2xl sm:text-3xl my-6 leading-normal max-w-prose">
        Electricity and natural gas market prices for Baltic States:
        <br />
        <em>Estonia</em>, <em>Latvia</em>, <em>Lithuania</em>, and{" "}
        <em>Finland</em>.
      </p>
      <span className="text-xl font-normal">Version 1.2</span>
      <a
        className="text-xl font-normal opacity-50 hover:opacity-100"
        href="/baltic-energy/privacy"
      >
        Privacy Policy
      </a>
      <a
        className="mt-6"
        href="https://apps.apple.com/us/app/baltic-energy/id1607203216"
        title="Get on App Store"
      >
        <img
          src="/images/Download-on-the-App-Store/US/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
          alt="Download on App Store"
        />
      </a>
    </div>
  );
}

type ImageProps = {
  src: string;
  srcSet: string;
  alt: string;
};

function ImageSection({
  text,
  image,
  isReverse = false,
}: {
  text: string;
  image: ImageProps;
  isReverse?: boolean;
}) {
  return (
    <section
      className={`flex flex-wrap justify-center items-center p-8 rounded-3xl ${
        isReverse ? "md:flex-row-reverse bg-white" : "bg-slate-100"
      }`}
    >
      <section className="flex flex-col items-center max-w-lg lg:text-right">
        <h2
          className={`text-3xl sm:text-4xl leading-tight font-medium max-w-md ${
            isReverse ? "text-slate-600 lg:text-left" : "text-slate-600"
          } `}
        >
          {text}
        </h2>
      </section>
      <img
        className="my-6 px-16 object-scale-down min-w-fit"
        src={image.src}
        srcSet={image.srcSet}
        alt={image.alt}
      />
    </section>
  );
}
