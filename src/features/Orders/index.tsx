import React, { useEffect, useState } from 'react';
import order from '../../api/orderApi';
import './order.css';
import SectionTitle from '../SectionTitle';

function Orders() {
      const [orders, setOrders] = useState([])
      useEffect(()=>{
            async function handleGetOrders() {
                  try{
                        const response = await order.getOrder();
                        setOrders(response.data.context.data);
                  }catch(err){
                        console.log(err)
                  }
            }
            handleGetOrders();
      },[])
      return (
            <div className='order'>
                  <div className="order-head">
                        <span>Lịch sử mua hàng</span>
                  </div>
            </div>
      );
}

export default Orders;