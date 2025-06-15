"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LoadingComponent from "@/components/loading_component";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const titleAnimation = useRef<HTMLHeadingElement | null>(null);
  const imageAnimation = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    titleAnimation.current?.classList.add("translate-x-0");
    titleAnimation.current?.classList.remove("-translate-x-[40rem]");
    imageAnimation.current?.classList.add("translate-x-0");
    imageAnimation.current?.classList.remove("translate-x-[40rem]");
  });
  return (
    <section id="home" className="relative lg:static">
      <div className="w-full flex flex-wrap items-center">
        <div
          ref={titleAnimation}
          className="absolute top-full w-full transition duration-700 -translate-x-[40rem] lg:w-3/4 lg:static 3xl:w-1/2">
          <h3 className="text-xl font-poppins tracking-wide lg:text-2xl">
            Hello, everyone
          </h3>
          <h1 className="text-xl py-1 font-poppins tracking-wide lg:py-4 lg:text-2xl">
            {"I'm "}
            <span className="font-montserrat font-bold text-primary tracking-wider">
              Bima Hamdhika Irfy
            </span>
          </h1>
          <h2 className="text-2xl font-montserrat font-bold tracking-wider lg:text-[28px]">
            Frontend Web & Mobile Developer
          </h2>
          <p className="py-8 font-poppins text-xl tracking-wide 2xl:py-16">
            Spesialized in Frontend Web Development & Flutter
          </p>
          <a
            href="https://wa.me/6285261997775"
            target="_blank"
            className="px-6 py-2 inline-block bg-primary rounded-3xl font-montserrat text-white font-bold hover:opacity-75 transition duration-300 2xl:px-8 2xl:py-4 2xl:text-xl">
            Contact
          </a>
        </div>
        <div
          ref={imageAnimation}
          className="relative overflow-hidden mb-5 mx-auto w-52 h-52 rounded-full object-cover shadow-lg transition duration-700 translate-x-[40rem] 2xl:w-2xs 2xl:h-72 lg:mb-0 3xl:mr-40">
          {loading && (   
            <LoadingComponent size="border-[16px] w-24 h-24" inImage={true}/>
          )}
          <Image
            style={{ objectFit: "cover" }}
            fill={true}
            src={`${process.env.NEXT_PUBLIC_PROFILE_URL}`}
            alt="Bima Photo Profile"
            loading="lazy"
            placeholder="empty"
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
