import ProductCard from "./ProductCard";

export default function BalticEnergy() {
  return (
    <ProductCard>
      <ProductCard.Description>
        <a href="/baltic-energy/">
          Electricity and natural gas market prices at your wristwatch
        </a>
      </ProductCard.Description>
      <ProductCard.Image>
        <a
          href="/baltic-energy/"
          title="Baltic Energy Apple Watch Application"
          className="new-label-container"
        >
          <img
            className="my-2"
            src="/images/Baltic-Energy/v1.2/CurrentHour-44mm.png"
            srcSet="/images/Baltic-Energy/v1.2/CurrentHour-44mm.png 1x, /images/Baltic-Energy/v1.2/CurrentHour-44mm@2x.png 2x"
            alt="Energy Live Apple Watch App"
          />
        </a>
      </ProductCard.Image>
      <ProductCard.AppDetails
        appName={
          <a
            href="/baltic-energy/"
            title="Baltic Energy Apple Watch Application"
          >
            <div className="flex flex-wrap items-center justify-center -ml-8">
              <img
                className="object-scale-down h-12 lg:h-14 mx-4 my-2"
                src="/images/Baltic-Energy/BalticEnergy.png"
                srcSet="/images/Baltic-Energy/BalticEnergy.png 1x, /images/Baltic-Energy/BalticEnergy@2x.png 2x"
                alt="Baltic Energy App Icon"
              />
              <span className="font-extrabold leading-none my-4 text-4xl lg:text-5xl">
                Baltic Energy
              </span>
            </div>
          </a>
        }
        tagline={
          <p>
            <small>Works in Estonia, Finland, Latvia, and Lithuania</small>
          </p>
        }
        legal={
          <a
            className="font-normal opacity-50 hover:opacity-100"
            href="baltic-energy/privacy"
          >
            Privacy Policy
          </a>
        }
      />
      <ProductCard.Badge>
        <div>
          <a
            href="https://apps.apple.com/us/app/baltic-energy/id1607203216"
            title="Get on App Store"
          >
            <img
              src="/images/Download-on-the-App-Store/US/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
              alt="Download on App Store"
            />
          </a>
        </div>
      </ProductCard.Badge>
    </ProductCard>
  );
}
