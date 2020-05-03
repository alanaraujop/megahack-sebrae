
import React, { useEffect } from "react";
import Cart from "../../components/features/Cart/Cart";
import Products from "../../mocks/Products";
import { useDispatch, useSelector } from "react-redux";
import { ActionsCart } from "../../store/actions";

export default function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(ActionsCart.insertItemCart(Products[5]));
    dispatch(ActionsCart.insertItemCart(Products[4]));
    dispatch(ActionsCart.insertItemCart(Products[3]));
  }, [dispatch]);

  return (
    <div className="App">
      <Cart products={cart} show={true} />
    </div>
  );
}
