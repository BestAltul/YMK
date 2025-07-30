import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useReviews } from "./useReviews"; // Assuming useReviews is in the same directory

const reviews = [
  {
    name: "John Doe",
    text: "Amazing service! Really helped me get started quickly.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    text: "Very intuitive and clean interface. Loved it!",
    rating: 4,
  },
  {
    name: "Alex Ivanov",
    text: "Неплохой проект, жду новых обновлений.",
    rating: 4,
  },
];

export default function ReviewPage() {

  const { reviews, loading, error } = useReviews();

  console.log("Reviews:", reviews);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">What people say</h2>

      {loading && <p className="text-center text-gray-500">Loading reviews...</p>}
      {error && <p className="text-center text-red-500">Error loading reviews: {error.message}</p>}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <Card key={index} className="shadow-md">
            <CardBody>
              <Typography variant="h6" color="blue-gray">
                {review.username}
              </Typography>
              <Typography variant="h6" color="blue-gray">
                {review.createdAt ? new Date(review.createdAt).toLocaleDateString() : "Unknown date"}
              </Typography>

              <Typography variant="small" className="my-2 text-gray-700">
                {review.content}
              </Typography>
              <Typography variant="small" color="amber">
                {"⭐".repeat(review.rating)}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
