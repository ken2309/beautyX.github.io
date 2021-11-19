import React from 'react';
import Header from '../Header/index'

const isCart: boolean = true;
const headerTitle="THANH TOÁN"
function CartPayment(props:any) {
      return (
            <div>
                  <Header
                        isCart={isCart}
                        title={headerTitle}
                  />
                  CartPayment
            </div>
      );
}

export default CartPayment;