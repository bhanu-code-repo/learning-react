import PropTypes from "prop-types";
import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

// type definitions for props
StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  message: PropTypes.array,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  message = [],
  defaultRating = 0,
  onSetRating = () => {},
}) {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    setHoverRating(0);
    onSetRating(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            fullStar={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message.length === maxRating
          ? message[hoverRating ? hoverRating - 1 : rating - 1]
          : hoverRating || rating || ""}
      </p>
    </div>
  );
}

export default StarRating;
