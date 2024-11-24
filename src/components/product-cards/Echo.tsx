import ProductCard from "./ProductCard";

export default function Echo() {
  return (
    <ProductCard>
      <ProductCard.Description>
        <a href="/echo/">
          Apple Music to Spotify playlist converter
        </a>
      </ProductCard.Description>
      <ProductCard.Image>
        <a href="/echo/" title="Apple Music to Spotify playlist converter" className="p-10 mt-4">
          <img
            src="/images/Echo/EchoHome.jpg"
            alt="Home page of Echo"
            className=""
          />
        </a>
      </ProductCard.Image>
      <ProductCard.AppDetails
        appName={
          <div className="flex md:flex-row sm:flex-col items-center justify-center">
            <a href="/echo/" className="font-extrabold leading-none my-4 text-4xl lg:text-5xl">
              Echo
            </a>
          </div>
        }
        tagline={
          <small>
            A service that transfers your Apple Music library to Spotify
          </small>
        }
      />
    </ProductCard>
  );
}
