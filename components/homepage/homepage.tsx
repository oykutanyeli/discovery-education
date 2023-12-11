"use client";
import React, { useState } from "react";
import styles from "/styles/gallery.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const totalSlides = 21;

  return (
    <section className="relative z-10 overflow-hidden pb-28 pt-28 lg:pt-[150px]">
      <div className="container">
        <h1 className="mb-8 text-4xl font-bold">DISCOVERY EDUCATION</h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {[...Array(totalSlides)].map((_, index) => (
            <Image
              className="aspect-square p-1"
              key={index}
              src={`/images/girisanasayfa/${index + 1}.jpg`}
              alt={`Resim ${index + 1}`}
              width={456}
              height={456}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HomePage;
