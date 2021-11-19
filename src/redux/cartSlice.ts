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
                  // const cartFalse = []
                  // const cartOrgTrue = storage.filter((item: any) => item.org_id === action.payload)
                  // console.log(cartOrgTrue);
                  // for (var item of cartOrgTrue) {
                  //       const arr = { ...item, isConfirm: true }
                  //       cartTrue.push(arr);
                  // }
                  // const cartOrgFalse = storage.filter((item: any) => item.org_id !== action.payload)
                  // console.log(cartOrgFalse);
                  // for (var itemFalse of cartOrgFalse) {
                  //       const arr = { ...itemFalse, isConfirm: false }
                  //       cartFalse.push(arr);
                  // }
                  // console.log(cartTrue);
                  // const nextCart = cartTrue.concat(cartFalse);
                  // state.cartList = nextCart
                  for (var item of storage) {
                        let arr = item;
                        if (item.org_id === action.payload) {
                              arr = { ...item, isConfirm: true }
                              cartTrue.push(arr);
                        } else {
                              arr = { ...item, isConfirm: false }
                              cartTrue.push(arr);
                        }
                  }
                  console.log(cartTrue)
                  state.cartList = cartTrue
                  localStorage.setItem(storageName, JSON.stringify(state.cartList))
            }
      }
});
const { reducer, actions } = cart;
export const { addCart, descItem, checkConfirm, removeItem, chooseAll } = actions;
export default reducer;