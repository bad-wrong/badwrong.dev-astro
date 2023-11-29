import type React from "react";

export default function ProductCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="flex flex-col items-center font-ligth text-5xl p-8">
      {children}
    </article>
  );
}

ProductCard.Description = function Description({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="leading-none uppercase text-center max-w-xl lg:max-w-3xl tracking-wide"
      style={{ lineHeight: 1.15 }}
    >
      {children}
    </div>
  );
};

ProductCard.Image = function Image({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex items-center">{children}</div>;
};

ProductCard.AppDetails = function AppDetails({
  appName,
  tagline,
  legal,
}: {
  appName: React.ReactNode;
  tagline?: React.ReactNode;
  legal?: React.ReactNode;
}) {
  return (
    <section className="text-center mb-4">
      <div>{appName}</div>
      {tagline && (
        <div className="font-normal text-3xl leading-none my-2 max-w-2xl">
          {tagline}
        </div>
      )}
      {legal && <div className="text-xl mt-6">{legal}</div>}
    </section>
  );
};

ProductCard.Badge = function Badge({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
};
