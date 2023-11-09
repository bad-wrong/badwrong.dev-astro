import type React from "react";

export default function ProductCard({
  description,
  image,
  appName,
  tagline,
  legal,
  badge,
}: {
  description?: React.ReactNode;
  image?: React.ReactNode;
  appName?: React.ReactNode;
  tagline?: React.ReactNode;
  legal?: React.ReactNode;
  badge?: React.ReactNode;
}) {
  return (
    <article className="flex flex-col items-center font-ligth text-5xl p-8">
      <div
        className="description leading-none uppercase text-center max-w-xl lg:max-w-3xl tracking-wide"
        style={{ lineHeight: 1.15 }}
      >
        {description}
      </div>
      <div className="flex items-center">{image}</div>
      <section className="text-center mb-4">
        <div className="app-name">{appName}</div>
        <div className="font-normal text-3xl leading-none my-2">{tagline}</div>
        <div className="text-xl mt-6">{legal}</div>
      </section>
      <div>{badge}</div>
    </article>
  );
}