import Image, { StaticImageData } from "next/image";
import React from "react";

export interface SustainabilityPromiseProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function SustainabilityPromise({
  title,
  description,
  image,
}: SustainabilityPromiseProps): React.ReactElement {
  return (
    <article className="flex items-center leading-relaxed sm:flex-col">
      <Image
        className="h-44 w-auto max-w-36 object-contain sm:max-w-full"
        src={image}
        alt=""
      />
      <div className="text-center">
        <h3 className="my-2 text-base font-semibold sm:text-lg">{title}</h3>
        <p className="text-sm sm:text-base">{description}</p>
      </div>
    </article>
  );
}
