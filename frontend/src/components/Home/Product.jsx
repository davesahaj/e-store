import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";

const options = {
  edit: false,
  color: "rgb(20,20,20)",
  activeColor: "tomato",
  value: 2.5,
  isHalf: true,
  size: 20,
};

const Product = ({ product }) => {
  return (
    <ProductCard to={product._id}>
      <ProductImage src={product.images[0].url} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductRatings>
        <ReactStars {...options} />

        <ReviewsCount> (256 Reviews) </ReviewsCount>
      </ProductRatings>
      <ProductPrice>{product.price}</ProductPrice>
    </ProductCard>
  );
};

export default Product;

const ProductCard = styled(Link)`
  width: 14vmax;
  margin: 2vmax;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: rgb(49, 49, 49);
  transition: all 0.5s;
  padding-bottom: 0.5vmax;

  &:hover {
    box-shadow: 0px 8px 17px 2px rgba(0, 0, 0, 0.14),
      0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);
    transform: translateY(-0.2vmax);
  }
`;

const ProductImage = styled.img`
  width: 14vmax;
`;
const ProductName = styled.p`
  @media screen and (max-width: 600px) {
    font-size: 1.7vmax;
  }
  font-size: 1.2vmax;
  margin: 1vmax 0.5vmax;
  margin-bottom: 0;
`;
const ProductRatings = styled.div`
  @media screen and (max-width: 600px) {
    display: block;
    margin: 0vmax;
  }
  margin: 0.5vmax;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const ReviewsCount = styled.span`
  @media screen and (max-width: 600px) {
    margin: 0 0.5vmax;
    font: 300 1vmax "Roboto";
  }
  margin: 0.5vmax;
  font: 300 0.7vmax "Roboto";
`;
const ProductPrice = styled.span`
  @media screen and (max-width: 600px) {
    font-size: 1.5vmax;
  }
  margin: 0.5vmax;
  color: tomato;
  font-family: "Arial Narrow", "sans-serif";
  font-size: 1vmax;
`;
