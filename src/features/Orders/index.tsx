import React, { useEffect, useState } from 'react';
import order from '../../api/orderApi';
import './order.css';
import { Order } from '../../interface/order';

function Orders() {
      const [orders, setOrders] = useState<Order[]>([])
      useEffect(() => {
            async function handleGetOrders() {
                  try {
                        const response = await order.getOrder();
                        setOrders(response.data.context.data);
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetOrders();
      }, [])
      console.log(orders);
      return (
            <div className='order'>
                  <div className="order-head">
                        <span>Lịch sử mua hàng</span>
                  </div>
                  <div className="order-list">
                        <ul className="order-list__cnt">
                              {
                                    orders.map((item: Order, index: number) => (
                                          <li
                                                key={index}
                                          >
                                                <div className="order-item">
                                                      
                                                </div>
                                          </li>
                                    ))
                              }
                        </ul>
                  </div>
            </div>
      );
}

export default Orders;