import React, { useContext, useEffect, useState } from "react";
import order from "../../api/orderApi";
import "./order.css";
import { Order } from "../../interface/order";
import { Pagination } from "@mui/material";
import OrderItem from "./components/OrderItem";
import HeadTitle from "../HeadTitle";
import { AppContext } from "../../context/AppProvider";

interface IData {
  orders: Order[],
  page: number,
  pageCount: number
}

function Orders() {
  const { t } = useContext(AppContext);
  const [data, setData] = useState<IData>({
    orders: [],
    page: 1,
    pageCount: 1
  })
  useEffect(() => {
    async function handleGetOrders() {
      try {
        const response = await order.getOrder(data.page);
        setData({
          ...data,
          orders: response.data.context.data,
          pageCount: response.data.context.last_page
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
          {data.orders.map((item: Order, index: number) => (
            <OrderItem key={index} order={item} />
          ))}
        </ul>
      </div>
      <div className="order-pagination">
        <Pagination
          color="secondary"
          shape="rounded"
          count={data.pageCount}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Orders;
