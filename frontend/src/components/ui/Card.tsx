import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

interface Props {
  title: string;
  price: number;
  image: string;
  link: string;
  id: string
}

const Card: React.FC<Props> = ({ title, price, image, link , id }) => {
  return (
    <div className="max-w-xs mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden" id={id}>
      <Link to={link} className="block group relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 transform group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300">
          <Link to={link}
            className="text-white bg-teal-400 px-4 py-2 rounded-lg text-sm font-medium"
          >
            See
          </Link>
        </div>
      </Link>

      <div className="px-6 py-4">
        <span className="bg-teal-400 px-3 py-1.5 text-xs font-medium inline-block mb-2">New</span>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1.5 text-sm text-gray-700">${price.toFixed(2)}</p>
        <Button
            onClick={() => {
              // Handle add to cart action
            }}
            className="text-white bg-teal-400 px-4 py-2 rounded-lg text-sm font-medium"
          >
            Add to Cart
          </Button>
      </div>
    </div>
  );
};

export default Card;
