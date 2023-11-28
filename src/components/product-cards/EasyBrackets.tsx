import ProductCard from "./ProductCard";

export default function EasyBrackets() {
  return (
    <ProductCard
      description={
        <h1>
          Visual Studio Code extension for manipulating brackets and quotes
        </h1>
      }
      image={
        <span
          slot="image"
          title="Nutrients application for macOS"
          className="p-10 mt-4"
        >
          <MarketPlaceLink>
            <img
              src="/images/EasyBrackets/vscode.svg"
              alt="Visual Studio Code Logotype"
              className="h-44"
            />
          </MarketPlaceLink>
        </span>
      }
      appName={
        <div className="flex md:flex-row sm:flex-col items-center justify-center">
          <MarketPlaceLink>
            <img
              className="icon object-scale-down h-14 mx-3"
              src="/images/EasyBrackets/EasyBracketsIcon@2x.png"
              alt="Easy Brackets Icon"
            />
          </MarketPlaceLink>
          <span className="font-extrabold leading-none my-4 text-4xl lg:text-5xl">
            <MarketPlaceLink>Easy Brackets</MarketPlaceLink>
          </span>
        </div>
      }
      tagline={
        <p>
          <small>
            Replaces brackets and quotes in a selection instead of inserting
            a&nbsp;new pair.
          </small>
        </p>
      }
      badge={<span slot="badge" title="Get on App Store"></span>}
    />
  );
}

function MarketPlaceLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="https://marketplace.visualstudio.com/items?itemName=badwrong.easybrackets"
      title="Visual Studio Code Marketplace"
    >
      {children}
    </a>
  );
}
