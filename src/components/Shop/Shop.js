import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context";
import Button from '../Button/Button';
import Input from '../Input/Input';
import Header from "../../Header";
const Shop = () => {
  const productsContext = useContext(ProductsContext);
  const { products, addProductToCart, selectedProductCart } = productsContext;
  const [search, setSearch] = useState('');
  
  function handleChange(event) {
    setSearch(event.target.value);
    console.log(search);
  }
  let filteredProducts = products.filter((product) => {
    let filterString =
      product.title.toLowerCase() + product.GST.toLowerCase();
    return filterString.indexOf(search.toLowerCase()) !== -1;
  });
  
  return (
   <>
   <div className="col-sm-4 col-lg-12 mb-3">
     <Input
        type={'text'}
        placeholder={'Search....'}
        onChange={handleChange}
      />
      {/* <Header length={selectedProductCart.length}/> */}
    </div>
      {filteredProducts.map(product => {
        return (
            <div className="col-sm-6 col-lg-3 mb-3" data-aos="fade-up">
                    <div className="block-4 text-center border">
                    <figure className="block-4-image">
                        <img
                        src={`/static/images/product-${product.image}.jpg`}
                        alt="Image placeholder" className="img-fluid"
                        />
                    </figure>
                    <div className="block-4-text p-4">
                        <h3 key={product._id}>
                        {product.title}
                        </h3>
                        <p className="mb-0">{product.SKU}</p>
                        <p className="text-primary font-weight-bold">{product.price}</p>
                        <Button type={'primary'} title={'Add To Cart'}  onClick={() => addProductToCart(product)}
                    />
                        <p>{product.GST}</p>
                        </div>
                    </div>
            </div>
        );
      })}
     
    </>
  );
};

export default Shop;