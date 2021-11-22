import {createSlice} from '@reduxjs/toolkit';

const storageName = 'web-booking-cart'
const storage = JSON.parse(`${localStorage.getItem(storageName)}`);
const initialState = {
      cartList: localStorage.getItem(storageName) ? storage : [],
      cartQuantity: 0,
      cartAmount: 0
}
const cart = createSlice({
      name: 'carts',
      initialState,
      reducers: {
            addCart: (state, action) => {
                  const iIndex = state.cartList.findIndex((item:any) =>
                        item.cart_id === action.payload.cart_id
                  );
                  if(iIndex >= 0){
                        state.cartList[iIndex].quantity += 1;
                  }else{
                        const templeCart = { ...action.payload, quantity: 1 };
                        state.cartList.push(templeCart);
                  }
                  localStorage.setItem(storageName, JSON.stringify(state.cartList))
            },
            descItem :(state, action)=>{
                  const iIndex = state.cartList.findIndex((item:any)=>
                        item.cart_id === action.payload.cart_id
                  );
                  if (state.cartList[iIndex].quantity > 1) {
                        state.cartList[iIndex].quantity -= 1;
                  }
                  localStorage.setItem(storageName, JSON.stringify(state.cartList))
            },
            checkConfirm: (state, action) => {
                  const iIndex = state.cartList.findIndex((item: any) =>
                        item.cart_id === action.payload.cart_id
                  )
                  if (state.cartList[iIndex].isConfirm === false) {
                        state.cartList[iIndex].isConfirm = true;
                  } else {
                        state.cartList[iIndex].isConfirm = false;
                  }
                  localStorage.setItem(storageName, JSON.stringify(state.cartList))
            },
            removeItem:(state, action)=>{
                  const nextItem = state.cartList.filter((item:any) =>
                        item.cart_id !== action.payload.cart_id
                  )
                  state.cartList = nextItem;
                  localStorage.setItem(storageName, JSON.stringify(nextItem))
            },
            chooseAll: (state, action) => {
                  const cartTrue = []
                  const cartFalse = []
                  for (var item of storage) {
                        let arr = item;
                        if (item.org_id === action.payload) {
                              arr = { ...item, isConfirm: true }
                              cartTrue.push(arr);
                        }else if(item.org_id !== action.payload){
                              arr = { ...item, isConfirm: true }
                              cartFalse.push(arr);
                        }
                  }
                  console.log(cartTrue, cartFalse)
                  //state.cartList = cartTrue
                  localStorage.setItem(storageName, JSON.stringify(state.cartList))
            },
            getTotal: (state) => {
                  let{total, quantity} = state.cartList.reduce(
                        (cartTotal:any, cartItem:any )=>{
                              const {quantity, price, isConfirm} = cartItem;
                              if (isConfirm === true) {
                                    const itemTotal = price * quantity;
                                    cartTotal.total += itemTotal;
                                    cartTotal.quantity += quantity;
                              }
                              return cartTotal;
                        },
                        {
                              total:0, quantity: 0
                        }
                  );
                  state.cartAmount = total;
                  state.cartQuantity = quantity
            }
      }
});
const { reducer, actions } = cart;
export const { addCart, descItem, checkConfirm, removeItem, chooseAll, getTotal } = actions;
export default reducer;