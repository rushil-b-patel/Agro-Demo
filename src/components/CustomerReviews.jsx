import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://pbs.twimg.com/profile_images/1286660994782179328/Ehh8f9ml_400x400.jpg',
    review: 'Absolutely amazing service! Would definitely recommend to everyone.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://pbs.twimg.com/profile_images/1286660994782179328/Ehh8f9ml_400x400.jpg',
    review: 'The products are of top quality and the support team is very helpful!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Sarah Lee',
    avatar: 'https://pbs.twimg.com/profile_images/1286660994782179328/Ehh8f9ml_400x400.jpg',
    review: 'Loved the user-friendly experience and the prompt service.',
    rating: 5,
  },
];

const ReviewCard = ({ name, avatar, review, rating }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 text-center">
    <img src={avatar} alt={name} className="w-20 h-20 rounded-full shadow-md" />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-gray-600">{review}</p>
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-yellow-400 ${i < rating ? 'fill-current' : 'opacity-50'}`}
        />
      ))}
    </div>
  </div>
);

const CustomerReviews = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-black mb-8 hover:underline">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              avatar={review.avatar}
              review={review.review}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
