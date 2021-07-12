import React from "react";
import styled from "styled-components";
import time from "../utils/time";
import number from "../utils/number";
import {Button, Paper} from "@material-ui/core";

const RobotCard = (props) => {
    const {image, name, price, stock, createdAt, material, onAddCart} = props;

    return (
        <Card>
            <Image src={image}/>
            <InfoBox>
                <Name>{name}</Name>
                <Price>฿{number.toLocaleString(price)}</Price>
                <Stock>{stock} lefts</Stock>
            </InfoBox>
            <FooterWrapper>
                <Material>{material}</Material>
                <CreateAt>{time.toDate(createdAt)}</CreateAt>
            </FooterWrapper>
            <Button
                disabled={stock === 0}
                variant="contained"
                color="primary"
                onClick={onAddCart}
            >
                Add to My Cart
            </Button>
        </Card>
    );
};

const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  row-gap: 8px;
  border-radius: 16px;
  max-width: 300px;
  padding: 24px;
`;

const Image = styled.img`
  min-height: 155px;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span``;

const Price = styled.span`
  text-align: right;
`;

const Stock = styled.span`
  text-align: right;
  font-size: 10px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Material = styled.span``;
const CreateAt = styled.span``;

export default RobotCard;
