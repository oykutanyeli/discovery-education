"use client";
import React, { useState } from "react";
import styles from "/styles/gallery.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrinityCollage from "@/components/trinitycollage/trinitycollage";
import Image from "next/image";

const Oxford = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const totalSlides = 4;

  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <h1 className="mb-8 text-4xl font-bold">
            Oxford Royal Academy ve Oxford Summer School
          </h1>
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
                src={`/images/oxford/${index + 1}.jpg`}
                alt={`Resim ${index + 1}`}
                width={456}
                height={456}
              />
            ))}
          </Carousel>
        </div>
      </section>
      <TrinityCollage />

      <section className="relative z-10 overflow-hidden pb-28  pt-28 lg:pt-[150px]">
        <div className="container">
          <h2>Daha detaylı bilgi almak için broşürümüzü inceleyebilirsiniz;</h2>
          <br />
          <br />
          <div className="flex gap-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1zWTvBXhqshhyyTjer0mGa3ZVEECvvImQ/view?usp=sharing"
              className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
            >
              THE UNIVERSITY OF OXFORD
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Oxford;
