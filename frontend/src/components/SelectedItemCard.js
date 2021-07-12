import React from "react";
import styled from "styled-components";
import {Button, Paper} from "@material-ui/core";
import number from "../utils/number";

const SelectedItemCard = (props) => {
    const {image, name, count, price, addToCart, removeFromCart} = props;

    return (
        <Card>
            <Image src={image}/>
            <Name>{name}</Name>
            <Count>
                <Button variant="contained" onClick={() => removeFromCart(props)}>
                    -
                </Button>
                {count}
                <Button
                    disabled={props.outOfStock}
                    variant="contained"
                    color="primary"
                    onClick={() => addToCart(props)}
                >
                    +
                </Button>
            </Count>
            <Total>Total ฿{number.toLocaleString(price * count)}</Total>
        </Card>
    );
};

const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 8px;
  padding: 8px;
  border: 1px solid black;
`;

const Image = styled.img``;

const Name = styled.span``;
const Count = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`;
const Total = styled.span``;

export default SelectedItemCard;
