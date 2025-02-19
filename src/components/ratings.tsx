import React from "react";

interface RatingsProps {
  rating: number;
  type: string;
}

const Ratings: React.FC<RatingsProps> = ({ rating, type }) => {
  const renderIcon = () => {
    const icons = [];
    for (let i = 0; i < 5; i++) {
      if (type === "star") {
        icons.push(
          <span
            key={i}
            className={i < rating ? "text-yellow-500" : "text-gray-300"}
          >
            ★
          </span>
        );
      } else if (type === "self") {
        icons.push(
          <span
            key={i}
            className={i < rating ? "text-yellow-500" : "text-gray-300"}
          >
            ●
          </span>
        );
      }
    }
    return icons;
  };

  return (
    <div className="flex items-center text-2xl mr-1 ml-2">{renderIcon()}</div>
  );
};

export default Ratings;
