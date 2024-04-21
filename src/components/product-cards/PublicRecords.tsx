import ProductCard from "./ProductCard";

export default function PublicRecords() {
  return (
    <ProductCard>
      <ProductCard.Description>
        <a href="/public-records/">
          Public domain knowledge <br />
          one tap away
        </a>
      </ProductCard.Description>
      <ProductCard.Image>
        <a
          href="/public-records/"
          className="new-label-container"
          title="Public Records iOS Application"
        >
          <img
            className="max-w-sm my-6"
            src="/images/Public-Records/PublicRecords-Browse-iPhone11.jpg"
            srcSet="/images/Public-Records/PublicRecords-Browse-iPhone11.jpg 1x, /images/Public-Records/PublicRecords-Browse-iPhone11@2x.jpg 2x"
            alt="Public Records iOS App"
          />
        </a>
      </ProductCard.Image>

      <ProductCard.AppDetails
        appName={
          <a href="/public-records/" title="Public Records iOS Application">
            <div className="flex flex-wrap items-center justify-center -ml-8">
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
          </a>
        }
        tagline={
          <p>
            <small>
              Listen to publicly available audiobooks narrated by volunteers of{" "}
              <a href="https://librivox.org">"LibriVox"</a>
            </small>
          </p>
        }
        legal={
          <a
            href="/public-records/privacy"
            className="font-normal opacity-50 hover:opacity-100"
          >
            Privacy Policy
          </a>
        }
      />
      <ProductCard.Badge>
        <span title="Get on App Store">
          <img
            src="/images/Download-on-the-App-Store/US/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
            alt="Download on App Store"
          />
        </span>
      </ProductCard.Badge>
    </ProductCard>
  );
}
