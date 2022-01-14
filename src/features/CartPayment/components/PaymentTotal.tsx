import React, { useContext, useState } from "react";
import { Container } from "@mui/material";
import formatPrice from "../../../utils/formatPrice";
import ButtonCus from "../../../components/ButtonCus";
import PopupSuccess from "../../PopupSuccess/index";
import { AppContext } from "../../../context/AppProvider";
import order from '../../../api/orderApi';
import { Cart } from '../../../interface/cart'

const useInPayment: boolean = true;
function PaymentTotal(props: any) {
  const { t } = useContext(AppContext);
  const { 
      methodList, 
      value, 
      list, 
      carts, 
      userInfo, 
      profile, 
      chooseE_wall,
      products,
      services,
      combos 
    } =props;
  const pmMethod = methodList.find((item: any) => item.method === value);
  const [popup, setPopup] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const org_id = list[0].org_id;

  const productsPost = products.map((item: Cart) => ({ id: item.id, quantity: item.quantity }))
  const servicesPost = services.map((item: Cart) => ({ id: item.id, quantity: item.quantity }))
  const combosPost = combos.map((item:Cart) => ({id:item.id, quantity: item.quantity}))

  const params = {
    products: productsPost,
    services: servicesPost,
    treatment_combo: combosPost,
    payment_method_id: chooseE_wall?.id,
    prepay_cards: [],
    branch_id: 0,
    coupon_code: "string",
    description: "string"
  };
 
  async function handlePostOrder(org_id: number, params: object) {
    try {
      const response = await order.postOrder(org_id, params);
      console.log(response)
      const payUrl = await response.data.context.payment_gateway.extra_data.payUrl;
      //const deepUrl = await response.data.context.payment_gateway.extra_data.deeplinkMiniApp;
      const newWindow = window.open(`${payUrl}`, '_blank', 'noopener,noreferrer')
      setDisableBtn(true)
      if (newWindow) newWindow.opener = null
    } catch (err) {
      console.log(err)
      setDisableBtn(false)
    }
  }
  const handleSubmitPayment = () => {
    if (disableBtn === false) {
      if (profile) {
        if (value && userInfo && chooseE_wall?.id === 1) {
          //console.log(params)
          handlePostOrder(org_id, params)
        } else {
          console.log("Trang web chỉ chấp nhận thanh toán qua ví điện tử Momo");
        }
      }
    }
  };
  return (
    <div className="payment-total">
      <Container>
        <div className="flex-row payment-total__head">
          <span>{t("pr.enter_sale_code")}</span>
          <input type="text" placeholder={t("pr.enter_sale_code")} />
        </div>
        <div className="flex-row payment-total__body">
          <div className="payment-total__body-item">
            <p>{t("pm.payment_method")}</p>
            <p>{t("pr.total")}</p>
            <p>{t("pm.discounts")}</p>
            <p>{t("pm.payment_total")}</p>
          </div>
          <div className="payment-total__body-item">
            <p style={{ color: "var(--text-black)" }}>
              {pmMethod
                ? `${pmMethod?.title}: ${chooseE_wall?.name_key}`
                : t("pm.choose_payment_method")}
            </p>
            <p>{formatPrice(carts.cartAmount)} đ</p>
            <p>0 đ</p>
            <p>{formatPrice(carts.cartAmount)} đ</p>
          </div>
        </div>
        <div className="flex-row-sp payment-total__body-submit">
          <span>{t("pm.enter_to_payment")}</span>
          <ButtonCus
            text={t("pm.payment_2")}
            color="var(--purple)"
            border="solid 1px var(--purple)"
            borderRadius="16px"
            onClick={handleSubmitPayment}
            opacity={disableBtn === false ? '1' : '0.4'}
          />
        </div>
      </Container>
      <PopupSuccess
        popup={popup}
        setPopup={setPopup}
        useInPayment={useInPayment}
        title={t("pm.payment_success")}
      />
    </div>
  );
}

export default PaymentTotal;
