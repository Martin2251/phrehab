"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const reviews = [
    { id: 1, content: "This is the first review.", author: "John Doe" },
    { id: 2, content: "This is the second review.", author: "Jane Smith" },
    { id: 3, content: "This is the third review.", author: "Michael Brown" },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg text-gray-800 mb-4">{review.content}</p>
              <p className="text-sm text-gray-600">- {review.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
