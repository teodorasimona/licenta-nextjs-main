import React from "react";
import Link from "next/link";

export default function ActivitiesFunction() {
  return (
    <div className="flex justify-center gap-10 items-end p-12 bg-yellow-50 max-md:flex-wrap max-md:px-5">
      <div className="flex flex-col items-center self-start">
        <div className="text-4xl leading-10 text-black">Activitati</div>
        <div className="flex gap-5 justify-between self-stretch mt-4">
          <Activities imageUrl="/images/hiking.webp" title="Hiking" />
        </div>
      </div>
      <Activities imageUrl="/images/biking.jpg" title="Biking" />
      <Activities imageUrl="/images/alergare.avif" title="Alergare" />
      <Activities imageUrl="/images/camping.jpg" title="Camping" />
      <Activities imageUrl="/images/off-road.jpg" title="Off-road" />

      <div className="flex flex-col mt-14 max-md:mt-10">
        <div className="flex gap-5 justify-between">
          <Activities imageUrl="/images/skiat.jpg" title="Schiat" />
        </div>
      </div>
    </div>
  );
}

interface ActivitiesProps {
  imageUrl: string;
  title: string;
}

function Activities({ imageUrl, title }: ActivitiesProps) {
  return (
    <Link href="/explore">
      <div className="flex flex-col mt-6 text-2xl leading-8 text-black whitespace-nowrap max-md:mt-10 items-center">
        <img
          src={imageUrl}
          className="shrink-0 rounded-full h-[180px] w-[180px] max-md:h-[150px] max-md:w-[150px]"
        />
        <div className="self-center mt-6">{title}</div>
      </div>
    </Link>
  );
}
