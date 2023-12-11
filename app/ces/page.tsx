"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HarryPotter from "@/components/harrypotter/harrypotter";
import Canada from "@/components/canada/canada";

const Ces = () => {
  const totalSlides = 29;

  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <h1 className="mb-8 text-4xl font-bold">
            CES (Central English Studies)
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
              <img
                className="aspect-square p-1"
                key={index}
                src={`/images/ces/${index + 1}.jpg`}
                alt={`Resim ${index + 1}`}
              />
            ))}
          </Carousel>
        </div>
      </section>

      <HarryPotter />
      <Canada />
      <section className="relative z-10 overflow-hidden pb-28  pt-28 lg:pt-[150px]">
        <div className="container">
          <h2>
            Daha detaylı bilgi almak için broşürlerimizi inceleyebilirsiniz;
          </h2>
          <br />
          <br />
          <div className="flex gap-5">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1dtfRSagPA74QeIFsvN6yQuwKoYtY8F2e/view?usp=sharing"
              className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
            >
              CES (Central English Studies)
            </a>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1s68EnaEVO3QI54RKUeX-IuuL9nQ_sL1j/view?usp=sharing"
              className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
            >
              Ces Junior Summer Programmes
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ces;