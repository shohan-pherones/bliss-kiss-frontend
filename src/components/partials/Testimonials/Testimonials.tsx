"use client";

import { Testimonial } from "@/interfaces";
import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
      <div className="flex gap-1 text-xl md:text-2xl text-amber-400">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <FaRegStar key={i} />
        ))}
      </div>
    );
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <article key={testimonial.id}>
          <p className="text-center text-xl md:text-2xl italic mb-2.5 md:mb-5">
            &quot;{testimonial.review}&quot;
          </p>
          <div className="flex justify-center mb-5 md:mb-10">
            {renderStars(testimonial.rating)}
          </div>
          <div className="flex justify-center gap-5">
            <figure className="w-20 md:w-24 aspect-square rounded-2xl overflow-hidden border-4 border-secondary/50">
              <Image
                src={testimonial.authorImage}
                alt={testimonial.authorName}
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex flex-col justify-center">
              <h4 className="text-lg md:text-xl font-semibold">
                {testimonial.authorName}
              </h4>
              <p className="text-sm text-base-300">
                {testimonial.authorDesignation}
              </p>
            </div>
          </div>
        </article>
      ))}
    </Slider>
  );
};

export default Testimonials;
