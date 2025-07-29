import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

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
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">What people say</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <Card key={index} className="shadow-md">
            <CardBody>
              <Typography variant="h6" color="blue-gray">
                {review.name}
              </Typography>
              <Typography variant="small" className="my-2 text-gray-700">
                {review.text}
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
