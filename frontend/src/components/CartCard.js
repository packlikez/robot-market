import React from "react";
import styled from "styled-components";
import SelectedItemCard from "./SelectedItemCard";
import number from "../utils/number";

const CartCard = (props) => {
  const { selected = [], addToCart, removeFromCart } = props;

  const total = selected.reduce((acc, cur) => acc + cur.count * cur.price, 0);
  return (
    <Wrapper>
      <Header>My Cart</Header>
      <Total>Total ฿{number.toLocaleString(total)}</Total>
      <CardWrapper>
        {selected.map((item) => (
          <SelectedItemCard
            {...item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  min-width: 300px;
`;

const Header = styled.span`
  font-size: 48px;
  text-align: center;
`;

const Total = styled.span``;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export default CartCard;
