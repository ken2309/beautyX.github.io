import React, { useContext, useEffect, useState } from "react";
import order from "../../api/orderApi";
import "./order.css";
import { Pagination } from "@mui/material";
import OrderItem from "./components/OrderItem";
import HeadTitle from "../HeadTitle";
import { AppContext } from "../../context/AppProvider";
import {IOrderV2} from '../../interface/orderv2'


interface IData {
  orders: IOrderV2[],
  page: number,
  pageCount: number,
  lastPage:number
}

function Orders() {
  const { t } = useContext(AppContext);
  const [data, setData] = useState<IData>({
    orders: [],
    page: 1,
    pageCount: 1,
    lastPage:1
  })
  useEffect(() => {
    async function handleGetOrders() {
      try {
        const res = await order.getOrders(data.page);
        setData({
          ...data,
          orders: res.data.context.data,
          pageCount: res.data.context.total,
          lastPage: res.data.context.last_page
        })
      } catch (err) {
        console.log(err);
      }
    }
    handleGetOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.page]);
  const handlePageChange = (event: any, value: any) => {
    setData({
      ...data,
      page: value
    })
  };
  
  return (
    <div className="order">
      <HeadTitle title={t("order.order_his")} />
      <div className="order-head">
        <span>{t("order.order_his")}</span>
      </div>
      <div className="order-list">
        <ul className="order-list__cnt">
          {
            data.orders.map((order:IOrderV2, index:number)=>(
              <OrderItem
                key={index}
                order={order}
              />
            ))
          }
        </ul>
      </div>
      <div className="order-pagination">
        <Pagination
          color="secondary"
          shape="rounded"
          count={data.lastPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Orders;
