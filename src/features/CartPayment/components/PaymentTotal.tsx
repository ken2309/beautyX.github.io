import React, { useContext, useState } from 'react';
import { Container } from '@mui/material';
import formatPrice from '../../../utils/formatPrice';
import ButtonCus from '../../../components/ButtonCus';
import PopupSuccess from '../../PopupSuccess/index';
import { AppContext } from '../../../context/AppProvider';
//import {useHistory} from 'react-router-dom'

interface ItemOrder {
  id: number;
  quantity: number;
}

const useInPayment: boolean = true;
function PaymentTotal(props: any) {
  const { t } = useContext(AppContext);
  const { methodList, value, list, carts, userInfo, profile, chooseE_wall } =
    props;
  const pmMethod = methodList.find((item: any) => item.method === value);
  const [popup, setPopup] = useState(false);
  const org_id = list[0].org_id;
  const products = list.filter((item: any) => item.is_type === 1);
  const services = list.filter((item: any) => item.is_type === 2);
  const combos = list.filter((item: any) => item.is_type === 3);

  const productsPost: ItemOrder[] = [];
  const servicesPost: ItemOrder[] = [];
  const combosPost: ItemOrder[] = [];

  for (var item of products) {
    const product = { id: item.id, quantity: item.quantity };
    productsPost.push(product);
  }
  for (var itemService of services) {
    const service = { id: itemService.id, quantity: itemService.quantity };
    servicesPost.push(service);
  }
  for (var itemCombo of combos) {
    const combo = { id: itemCombo.id, quantity: itemCombo.quantity };
    combosPost.push(combo);
  }
  const params = {
    org_id: org_id,
    products: productsPost,
    services: servicesPost,
    prepay_cards: [],
    treatment_combo: combosPost,
    payment_method_id: chooseE_wall?.id,
  };
  const handleSubmitPayment = () => {
    if (profile) {
      if (value && userInfo && chooseE_wall) {
        console.log(params);
      } else {
        console.log("Trang web chỉ chấp nhận thanh toán qua ví điện tử Momo");
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
