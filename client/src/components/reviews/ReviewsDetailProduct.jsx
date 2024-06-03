"use client";

import { useEffect, useState } from 'react';
import { Avatar, Blockquote, Rating } from "flowbite-react";

export function ReviewsDetailProduct({ productId }) {
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        const data = await response.json();
        setProduct(data.product);
        setReviews(data.review);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <figure className="max-w-screen-md" key={review.id_Review}>
            <div className="mb-4 flex items-center">
              <Rating size="md">
                {[...Array(review.ranking)].map((_, index) => (
                  <Rating.Star key={index} />
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
                img="https://example.com/path-to-user-avatar.jpg" 
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">{review.user_name}</cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">{review.user_mail}</cite>
              </div>
            </figcaption>
          </figure>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
