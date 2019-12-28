// This is the Link API
import Cart from '../src/components/Cart/Cart';
import { ProductsContextProvider } from "../src/context";
function ShoppingCart ()  {
    return (
      <ProductsContextProvider>
        <Cart />
      </ProductsContextProvider>
    );
}

export default ShoppingCart;
