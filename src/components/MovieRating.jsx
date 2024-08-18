/* eslint-disable react/prop-types */
import Star from "../assets/star.svg";

export default function MovieRating({ value }) {
  const stars = Array(value).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} alt="star" className="h-5 w-5" />
      ))}
    </>
  );
}
