import ProductCard from "./ProductCard";

export default function JohnDoe() {
  return (
    <ProductCard>
      <ProductCard.Description>
        <a href="https://johndoe.work" title="Go to the service web page">
          AI-assisted resume tuning
        </a>
      </ProductCard.Description>
      <ProductCard.Image>
        <a href="https://johndoe.work" title="Go to the service web page" className="p-10 mt-4">
          <img
            src="/images/JohnDoe/johndoe.jpg"
            alt="Home page of johndoe.work"
            className=""
          />
        </a>
      </ProductCard.Image>
      <ProductCard.AppDetails
        appName={
          <div className="flex md:flex-row sm:flex-col items-center justify-center">
            <a href="https://johndoe.work" title="Go to the service web page" className="font-extrabold leading-none my-4 text-4xl lg:text-5xl">
              johndoe.work
            </a>
          </div>
        }
        tagline={
          <small>
            Adjust your resume to job descriptions to rank better in applicant tracking systems
          </small>
        }
      />
    </ProductCard>
  );
}
