

export const CartReducer = (state , action) => {

    const {shoppingCart , totalPrice, qty} = state;
    let product;
    let index;
    let UpdatedPrice;
    let updatedQty;


     switch(action.type){
         case 'ADD_TO_CART':
   const check = shoppingCart.find(product => product.id === action.id);
       if(check){
           return state;
       }  else {
           product = action.product;
           product['qty'] = 1
           updatedQty = qty + 1 ;
           UpdatedPrice = totalPrice + product.price;
           return {shoppingCart: [product , ...shoppingCart] , totalPrice: UpdatedPrice , message: '', qty: updatedQty}
       }
        break; 
        case 'INC':
           
            product = shoppingCart.find(product => product.id === action.id);
            index = shoppingCart.findIndex(product => product.id === action.id);
            product.qty = product.qty + 1;
            updatedQty = qty + 1;
       UpdatedPrice = totalPrice + product.price;
           
            shoppingCart[index] = product;
            return {shoppingCart: [...shoppingCart], totalPrice: UpdatedPrice, message: '', qty: updatedQty}
            break;

            case 'DEC':
                product = shoppingCart.find(product => product.id === action.id);;
                if(product.qty > 1){
                    product.qty = product.qty - 1;
                    UpdatedPrice = totalPrice - product.price;
                    updatedQty = qty - 1;
                    index = shoppingCart.findIndex(product => product.id === action.id);
                    shoppingCart[index] = product;
                    return {shoppingCart: [...shoppingCart], totalPrice: UpdatedPrice, message: '', qty: updatedQty}

                }  else{
                   return {shoppingCart: [...shoppingCart], totalPrice: totalPrice, message: '', qty: qty}
                }
                break;
            case 'DELETE':
                const filtered = shoppingCart.filter(cart => cart.id !== action.id);
                  product = shoppingCart.find(cart => cart.id === action.id);
                  updatedQty = qty -  product.qty ;
                  UpdatedPrice = totalPrice - product.price * product.qty ;
                  return {shoppingCart: [...filtered], totalPrice: UpdatedPrice, message: '', qty: updatedQty}
                  break;
        case 'EMPTY':
              return {shoppingCart: [] , totalPrice: 0, qty: 0}

        default:
            return state;
     }
    
}