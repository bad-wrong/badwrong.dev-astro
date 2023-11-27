import ProductCard from "./ProductCard";

export default function PublicRecords() {
  return (
    <ProductCard
      description={
        <h1>
          Public domain knowledge
          <br />
          one tap away
        </h1>
      }
      image={
        <span
          slot="image"
          className="new-label-container"
          title="Public Records iOS Application Public Beta-Testing"
        >
          <img
            className="max-w-sm my-6"
            src="/images/Public-Records/PublicRecords-Browse-iPhone11.jpg"
            srcSet="/images/Public-Records/PublicRecords-Browse-iPhone11.jpg 1x, /images/Public-Records/PublicRecords-Browse-iPhone11@2x.jpg 2x"
            alt="Public Records iOS App"
          />
        </span>
      }
      appName={
        <div
          slot="app-name"
          className="flex md:flex-row sm:flex-col items-center justify-center md:-ml-8"
        >
          <img
            className="border-2 border-black rounded-xl object-scale-down h-12 mx-4"
            src="/images/Public-Records/PublicRecords.png"
            srcSet="/images/Public-Records/PublicRecords.png 1x, /images/Public-Records/PublicRecords@2x.png 2x"
            alt="Public Records App Icon"
          />
          <span className="font-extrabold leading-none my-4 text-4xl lg:text-5xl">
            Public Records
          </span>
        </div>
      }
      tagline={
        <p slot="tagline">
          <small>
            Listen to publicly available audiobooks narrated by volunteers of{" "}
            <a href="https://librivox.org">"LibriVox"</a>
          </small>
        </p>
      }
      legal={
        <div slot="legal" className="flex flex-row justify-center">
          <span className="font-normal opacity-20 hover:opacity-100 mx-4 line-through">
            Agreement
          </span>
          <span className="font-normal opacity-20 hover:opacity-100 mx-4 line-through">
            Privacy Policy
          </span>
        </div>
      }
      badge={
        <span slot="badge" title="Get on App Store">
          <img
            className="opacity-20"
            src="/images/Download-on-the-App-Store/US/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
            alt="Download on App Store"
          />
        </span>
      }
    />
  );
}

/* 
<style>


  .iphone {
    max-height: 800px;
  }

  .watch {
    max-height: 450px;
  }

  .new-label {
    position: absolute;
  }

  .new-label-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style> */
