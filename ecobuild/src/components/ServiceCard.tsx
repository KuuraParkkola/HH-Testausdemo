import Image, { StaticImageData } from "next/image";
import React from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps): React.ReactElement {
  return (
    <article className="group overflow-hidden rounded-md drop-shadow-md transition-all duration-500 hover:drop-shadow-xl">
      <div className="h-48 w-full overflow-hidden">
        <Image
          className="min-h-full min-w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
          {...image}
        />
      </div>
      <div className="relative bg-white">
        <h3 className="absolute top-0 flex h-20 w-full -translate-y-6 items-center bg-green-100/80 px-2 text-2xl text-green-950 backdrop-blur-md">
          {title}
        </h3>
        <p className="h-44 p-2 pt-16">{description}</p>
      </div>
    </article>
  );
}
