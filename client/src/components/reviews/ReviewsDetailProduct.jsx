"use client";

import { Avatar, Blockquote, Rating } from "flowbite-react";

export function ReviewsDetailProduct( {producto} ) {
  if (!producto || producto.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div>
  
      {producto.reviews?.map((review, index) => (
        <figure className="max-w-screen-md" key={index}>
          <div className="mb-4 flex items-center">
            <Rating size="md">
              {[...Array(review.ranking)].map((_, idx) => (
                <Rating.Star key={idx} />
              ))}
            </Rating>
          </div>
          <Blockquote>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {review.comment}
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center space-x-3">
            <Avatar
              rounded
              size="xs"
              img={review.img}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-gray-900 dark:text-white">{review.name}</cite>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
