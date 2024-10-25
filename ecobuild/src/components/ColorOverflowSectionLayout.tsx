import Image, { StaticImageData } from "next/image";
import { PropsWithChildren, ReactElement } from "react";

interface ColorOverflowSectionLayoutProps extends PropsWithChildren {
  image: {
    src: StaticImageData;
    alt: string;
  };
}

export default function ColorOverflowSectionLayout({
  children,
  image,
}: ColorOverflowSectionLayoutProps): ReactElement {
  return (
    <div className="relative my-4 drop-shadow-md">
      <div className="absolute right-0 -z-10 h-full w-1/2 bg-none xl:bg-sky-950" />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-end px-2 xl:px-0">
        <div className="flex size-full flex-col overflow-hidden rounded-bl-[200px] bg-sky-950 text-white md:flex-row">
          <Image
            {...image}
            className="h-auto max-h-[600px] w-full object-cover md:max-h-none md:max-w-[400px]"
          ></Image>
          {children}
        </div>
      </div>
    </div>
  );
}
