"use client";

import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function MobileAd() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <br />,
    prevArrow: <br />,
  };
  return (
    <div className="p-[20px] md:hidden block">
      <Slider {...settings} className="p-0">
        <div className="h-[150px]">
          <Link
            href={`/ad`}
            className="mx-auto group cursor-pointer dark:bg-bgDark bg-bgLight"
          >
            <img
              src="https://cdn77-pic.xvideos-cdn.com/videos/thumbs169/24/c5/0e/24c50e6d02cd8ae10f097911f1064024/24c50e6d02cd8ae10f097911f1064024.24.jpg"
              alt="face cream"
              className="w-full h-full aspect-square rounded object-cover"
            />
          </Link>
        </div>
        <div className="h-[150px]">
          <Link
            href={`/ad`}
            className="mx-auto group cursor-pointer dark:bg-bgDark bg-bgLight"
          >
            <img
              src="https://cdn77-pic.xvideos-cdn.com/videos/thumbs169/3a/55/54/3a55544fdea641913c21d16f17f0dca7/3a55544fdea641913c21d16f17f0dca7.27.jpg"
              alt="face cream"
              className="w-full h-full aspect-square rounded object-cover"
            />
          </Link>
        </div>
      </Slider>
      <button className="underline float-right">Remove ad</button>
    </div>
  );
}
