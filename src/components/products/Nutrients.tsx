import ProductCard from "../ProductCard";

export default function Nuetrients() {
  return (
    <ProductCard
      description={
        <h1>Nutritional information for the food in your grocery store</h1>
      }
      image={
        <span slot="image" title="Nutrients application for macOS">
          <img
            className="my-2"
            src="/images/Nutrients/Nutrients-Iron.jpg"
            srcSet="/images/Nutrients/Nutrients-Iron.jpg 1x, /images/Nutrients/Nutrients-Iron@2x.jpg 2x"
            alt="Nutrients application for macOS"
          />
        </span>
      }
      appName={
        <div className="flex md:flex-row sm:flex-col items-center justify-center">
          <img
            className="icon object-scale-down h-12 mx-3"
            src="/images/Nutrients/Nutrients App Icon@2x.jpg"
            alt="Public Records App Icon"
          />
          <span className="font-extrabold leading-none my-4 text-4xl lg:text-5xl">
            Nutrients
          </span>
        </div>
      }
      tagline={
        <p>
          <small>
            Food database and nutritional information for thousands of food
            items from Estonian grocery stores
            <span className="text-zinc-300">
              with the data from ©&nbsp;NutriData food composition database,
              version 12,
              <a href="https://tka.nutridata.ee/en/">tka.nutridata.ee</a>, 2023
            </span>
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
