import PropTypes from "prop-types";

const sizes = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export const LoadingSpinner = ({ size = "md", className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`${sizes[size]} animate-spin`}>
        <div className="h-full w-full border-4 border-t-blue-500 border-b-blue-700 border-l-blue-500 border-r-blue-700 rounded-full" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};
