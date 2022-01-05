import React, { useEffect, useState } from 'react';
import order from '../../api/orderApi';
import './order.css';
import { Order } from '../../interface/order';
import { Pagination } from '@mui/material';
import OrderItem from "./components/OrderItem"

function Orders() {
      const [orders, setOrders] = useState<Order[]>([])
      const [page, setPage] = useState(1);
      const [pageCount, setPageCount] = useState(1);
      useEffect(() => {
            async function handleGetOrders() {
                  try {
                        const response = await order.getOrder(page);
                        setOrders(response.data.context.data);
                        setPageCount(response.data.context.last_page)
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetOrders();
      }, [page])
      const handlePageChange = (event: any, value: any) => {
            setPage(value);
      }
      return (
            <div className='order'>
                  <div className="order-head">
                        <span>Lịch sử mua hàng</span>
                  </div>
                  <div className="order-list">
                        <ul className="order-list__cnt">
                              {
                                    orders.map((item: Order, index: number) => (
                                          <OrderItem
                                                key={index}
                                                order={item}
                                          />
                                    ))
                              }
                        </ul>
                  </div>
                  <div className="order-pagination">
                        <Pagination
                              color="secondary"
                              shape="rounded"
                              count={pageCount}
                              onChange={handlePageChange}
                        />
                  </div>
            </div>
      );
}

export default Orders;