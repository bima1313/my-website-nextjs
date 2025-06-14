"use client";

import { useEffect, useRef, useState } from "react";
import type { ImageData } from "@/models/image-data";
import { About } from "@/models/definitions";
import Image from "next/image";
import LoadingComponent from "@/components/loading_component";

interface props {
  techStack: About;
}
const TechStackSection: React.FC<props> = ({ techStack }) => {
  const [loading, setLoading] = useState(true);
  const imageSpacing = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (techStack.images.length > 3) {
      imageSpacing.current?.classList.add("justify-evenly");
    } else {
      imageSpacing.current?.classList.add("justify-center");
    }
  });
  return (
    <>
      <h5 className="font-montserrat font-bold tracking-wider text-xl md:text-2xl py-8">
        {techStack.title}
      </h5>
      <ul ref={imageSpacing} className="flex flex-wrap gap-5 xl:justify-start">
        {techStack.images.map((data: ImageData) => (
          <li
            key={data.image_alt}
            className="opacity-50 transition duration-300 lg:opacity-50 hover:opacity-100">
            <a
              href={data.link}
              target="_blank"
              className="block w-12 h-12 md:w-16 md:h-16 2xl:w-[4.5rem] 2xl:h-[4.5rem] relative">
              {loading && (
                <LoadingComponent
                  size="border-8 w-16 h-16"
                  inImage={true}
                />
              )}
              <Image
                style={{ objectFit: "fill" }}
                fill={true}
                src={data.image_source}
                alt={data.image_alt}
                loading="lazy"
                onLoad={() => setLoading(false)}
                onError={() => setLoading(false)}
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TechStackSection;
