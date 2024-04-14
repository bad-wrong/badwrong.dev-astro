export default function PublicRecordsPage() {
  return (
    <main className="flex flex-grow flex-col my-16 p-8 text-center justify-center items-center">
      <PageHeader />

      <img
        className="my-24 px-16 max-w-md md:max-w-2xl"
        src="/images/Public-Records/PublicRecords-Browse-iPhone11.jpg"
        srcSet="/images/Public-Records/PublicRecords-Browse-iPhone11.jpg 1x, /images/Public-Records/PublicRecords-Browse-iPhone11@2x.jpg 2x"
        alt="Public Records iOS App"
      />

      <div className="flex mb-6">
        <a
          className="px-6 py-3 text-xl font-medium rounded-full text-white hover:text-white active:text-white bg-black hover:bg-black/80"
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
          className="border-2 border-black rounded-xl object-scale-down h-12 mx-4"
          src="/images/Public-Records/PublicRecords.png"
          srcSet="/images/Public-Records/PublicRecords.png 1x, /images/Public-Records/PublicRecords@2x.png 2x"
          alt="Public Records App Icon"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold">Public Records</h1>
      </div>
      <p className="text-2xl sm:text-3xl my-6 leading-normal max-w-4xl">
        Got tired of losing your place in a book using{" "}
        <a href="https://librivox.org/">LibriVox</a> and manually downloading
        audio files to your iPhone?
      </p>
      <p className="text-2xl sm:text-3xl mt-2 mb-8 leading-normal max-w-4xl">
        Try <em>Public Records</em> that does all that work for you.
      </p>
      <span className="text-xl font-normal">Version 1.0</span>
      <a
        className="text-xl font-normal opacity-50 hover:opacity-100"
        href="/public-records/privacy"
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
