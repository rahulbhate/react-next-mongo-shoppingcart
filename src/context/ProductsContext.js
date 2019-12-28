import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    products: initialProducts,
    selectedProduct: initialSelectedProducts,
    children
  } = props;

  // Use State to keep the values
  const [products, setProducts] = useState(initialProducts);
  const [selectedProductCart, setSelectedProductToCart] = useState(initialSelectedProducts);
  const [cartLength, setCartLength] = useState(selectedProductCart.length)
  useEffect(() => {
    const data = localStorage.getItem("localStorageCart");
    const dd = sessionStorage.getItem("sessionStorageCart");
    if(data){
      setSelectedProductToCart(JSON.parse(data))
    }
    if(dd){
      setSelectedProductToCart(JSON.parse(dd));
    }
    
}, []);
   useEffect(() => {
    localStorage.setItem("localStorageCart", JSON.stringify(selectedProductCart));
    sessionStorage.setItem("sessionStorageCart",JSON.stringify(selectedProductCart));
   });
  const addProductToCart = product => {
    const existingProduct = selectedProductCart.filter(p => p._id === product._id);
         if(existingProduct.length > 0){
           const withoutExistingProduct = selectedProductCart.filter(p => p._id !== product._id);
           const updatedUnitsProduct = {
             ...existingProduct[0],
            units: existingProduct[0].units + product.units
           }
           setSelectedProductToCart([...withoutExistingProduct, updatedUnitsProduct]);
         }
         else{
            setSelectedProductToCart([...selectedProductCart, product],product["units"]=1)
         }
         console.log(selectedProductCart);
         setCartLength(1);
  };

  // Make the context object:
  const ProductsContext = {
    products,
    setProducts,
    cartLength,
    selectedProductCart,
    setSelectedProductToCart,
    addProductToCart
  };

  // pass the value in provider and return
  return <Context.Provider value={ProductsContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  products: PropTypes.array,
  selectedProduct: PropTypes.array
};

Provider.defaultProps = {
  products: [],
  selectedProduct: []
};
