import React from "react";
import Product from "./Product.jsx";
import styled from "styled-components";

const product = {
  name: "Tshirt",
  price: "3000",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  _id: "f8t0qa98qjq8a",
};

const Home = () => {
  return (
    <>
      <HomeContainer>
        <MainHeading>Welcome to Tribal Desert</MainHeading>
        <SubHeading>Find amazing products below</SubHeading>
        <ButtonLink>
          <ScrollButton>Scroll</ScrollButton>
        </ButtonLink>
      </HomeContainer>
      <HomeHeading>Featured Products</HomeHeading>
      <ProductContainer className="product-container" id="product-container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </ProductContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-image: linear-gradient(to right, #635dc0, #3027ae);
  height: 100vmin;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  &:after {
    clip-path: polygon(100% 85%, 0% 100%, 100% 100%);
    content: "";
    width: 100vw;
    height: 100vmin;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
  }
`;

const MainHeading = styled.p`
  font: 300 1.4vmax;
`;
const SubHeading = styled.h1`
  text-transform: capitalize;
  margin: 5vmax;
  font: 600 2.5vmax "Roboto";
`;
const ButtonLink = styled.a``;
const ScrollButton = styled.button`
  margin-bottom: 5vmax;
  cursor: pointer;
  background-color: white;
  border: 1px solid white;
  border-radius: 0;
  padding: 1vmax;
  transition: all 0.5s;
  width: 9vmax;
  font: 500 1vmax "Roboto";

  &:hover {
    background-color: rgba(255, 255, 255, 0);
    color: white;
  }
`;

const HomeHeading = styled.div`
  text-align: center;
  font-size: 1.4vmax;
  border-bottom: 1px solid rgba(21, 21, 21, 0.5);
  width: 20vmax;
  padding: 1vmax;
  margin: 5vmax auto;
  color: rgba(0, 0, 0, 0.7);
`;

const ProductContainer = styled.div`
  display: flex;
  margin: 2vmax auto;
  width: 80vw;
  flex-wrap: wrap;
  justify-content: center;
`;
