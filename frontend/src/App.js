import * as React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LinearProgress, Paper, TextField} from "@material-ui/core";
import styled from "styled-components";

import {loadRobot} from "./store/robot";
import {addItem, removeItem} from "./store/cart";

import CartCard from "./components/CartCard";
import RobotCard from "./components/RobotCard";
import useDebounce from "./hooks/useDebounce";

function App() {
    const [material, setMaterial] = useState("");

    const dispatch = useDispatch();
    const cart = useSelector((s) => s.cart);
    const robot = useSelector((s) => s.robot);

    const debounceLoadRobot = useDebounce((material) =>
        dispatch(loadRobot({material}))
    );

    useEffect(() => {
        debounceLoadRobot(material);
    }, [material]);

    const onMaterialChange = (e) => setMaterial(e.target.value);

    const onAddCart = (item) => () => {
        if (cart.isFull) alert("cart is full");
        dispatch(addItem(item));
    };

    const removeFromCart = (robot) => dispatch(removeItem(robot));
    const addToCart = (robot) => dispatch(addItem(robot));

    return (
        <Wrapper>
            {robot.isLoading && <Loading/>}
            <h1>Robot Market</h1>
            <TextField
                label="Material"
                variant="outlined"
                value={material}
                onChange={onMaterialChange}
            />
            <BodyWrapper>
                <CardWrapper>
                    {robot.list.map((data, index) => (
                        <RobotCard {...data} key={index} onAddCart={onAddCart(data)}/>
                    ))}
                </CardWrapper>
                <CartWrapper>
                    <CartCard
                        selected={cart.list}
                        removeFromCart={removeFromCart}
                        addToCart={addToCart}
                    />
                </CartWrapper>
            </BodyWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  width: 100%;
`;
const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 16px;
  padding: 0 16px;
  min-height: 600px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const CartWrapper = styled(Paper)``;

const Loading = styled(LinearProgress)`
  position: absolute !important;
  width: 100%`

export default App;
