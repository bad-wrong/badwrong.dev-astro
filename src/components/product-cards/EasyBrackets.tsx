import ProductCard from "./ProductCard";

export default function EasyBrackets() {
  return (
    <ProductCard>
      <ProductCard.Description>
        <a href="https://marketplace.visualstudio.com/items?itemName=badwrong.easybrackets">
          Visual Studio Code extension for manipulating brackets and quotes
        </a>
      </ProductCard.Description>
      <ProductCard.Image>
        <span title="Nutrients application for macOS" className="p-10 mt-4">
          <MarketPlaceLink>
            <img
              src="/images/EasyBrackets/vscode.svg"
              alt="Visual Studio Code Logotype"
              className="h-44"
            />
          </MarketPlaceLink>
        </span>
      </ProductCard.Image>
      <ProductCard.AppDetails
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
          <small>
            Replaces brackets and quotes in a selection instead of inserting
            a&nbsp;new pair.
          </small>
        }
      />
    </ProductCard>
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
