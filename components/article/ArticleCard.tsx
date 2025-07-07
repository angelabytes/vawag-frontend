import React from "react";

const ArticleCard = ({
  title,
  description,
  imageUrl,
  author,
  date,
  link,
  category,
}) => {
  return (
    <a
      href={link}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Card Image */}
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          {category && (
            <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>
      )}

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--lavendar)] transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-3">
            {/* line-clamp-3 limits text to 3 lines and adds ellipsis if it overflows */}
            {description}
          </p>
        )}
        <div className="flex justify-between items-center text-gray-500 text-xs">
          {author && <span>{author}</span>}
          {date && <span>{date}</span>}
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
