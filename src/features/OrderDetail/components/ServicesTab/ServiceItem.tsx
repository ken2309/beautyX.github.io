import React, { useEffect, useState, useContext } from "react";
import { Service } from "../../../../interface/service";
import serviceApi from "../../../../api/serviceApi";
import ButtonCus from "../../../../components/ButtonCus";
import formatPrice from "../../../../utils/formatPrice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../../../redux/cartSlice";
import slugify from "../../../../utils/formatUrlString";
import {AppContext} from '../../../../context/AppProvider'

function ServiceItem(props: any) {
  const {t} = useContext(AppContext)
  const { serviceItem, org, open } = props;
  const [service, setService] = useState<Service>();
  const history = useHistory();
  const dispatch = useDispatch();
  const is_type = 2;
  const values = {
    id: service?.id,
    org_id: org.id,
    org_name: org.name,
    cart_id: parseInt(`${is_type}${org.id}${service?.id}`), //is_type + org_id + id
    name: service?.service_name,
    quantity: 1,
    is_type: is_type,
    isConfirm: true,
    price: service?.price,
  };
  const handleAddCart = () => {
    const action = addCart(values);
    history.push({
      pathname: `/Cart`,
    });
    dispatch(action);
  };
  const handleDetailService = () => {
    history.push({
      pathname: `/Service-detail/${slugify(service?.service_name)}`,
      search: `${org.id},${serviceItem?.productable_id},${is_type}`,
      state: org,
    });
  };
  useEffect(() => {
    async function handleGetSerDetail() {
      try {
        const res = await serviceApi.getDetailById({
          org_id: org.id,
          ser_id: serviceItem.productable_id,
        });
        setService(res.data.context);
      } catch (error) {
        console.log(error);
      }
    }
    if (open === true) {
      handleGetSerDetail();
    }
  }, [org.id, serviceItem.productable_id, open]);
  return (
    <li>
      <div className="order-de-list__item">
        <img
          src={"https://picsum.photos/650/976?random=1" + service?.id}
          alt=""
          className="order-de-pr-item__img"
        />
        <div className="order-de-pr-item__cnt">
          <div className="item-detail">
            <span className="flex-row-sp item-name">
              {service?.service_name}
              <span>x {serviceItem.quantity}</span>
            </span>
            <span className="item-org__name">{org.name}</span>
          </div>
          <div className="flex-row-sp item-bottom">
            <span className="price">{formatPrice(service?.price)} đ</span>
            <div className="flex-row item-button">
              <ButtonCus
                onClick={handleDetailService}
                text={t('order.watch_info')}
                padding="4px 8px"
                color="var(--purple)"
                backColor="var(--bgGray)"
                borderRadius="12px"
                margin="0px 16px 0px 0px"
              />
              <ButtonCus
                onClick={handleAddCart}
                text="Pre-Order"
                padding="4px 8px"
                color="var(--bgWhite)"
                backColor="var(--purple)"
                borderRadius="12px"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ServiceItem;
