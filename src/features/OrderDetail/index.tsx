import React, { useContext, useState } from "react";
import "./orderDetail.css";
import ButtonCus from "../../components/ButtonCus";
import formatPrice from "../../utils/formatPrice";
import TabOrder from "./components/TabOrder";
import { Dialog, Slide } from "@mui/material";
import icon from "../../constants/icon";
import { TransitionProps } from "@mui/material/transitions";
//import slugify from "../../utils/formatUrlString";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";
import scrollTop from "../../utils/scrollTop";

const view = window.screen.width;
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction={view < 767 ? "left" : "up"} ref={ref} {...props} />;
});

function OrderDetail(props: any) {
  const history = useHistory();
  const { t } = useContext(AppContext);
  const { open, setOpen, org, order, countItem } = props;
  const [acTab, setAcTab] = useState();
  const handleDetailMerchant = () => {
    scrollTop();
    history.push({
      pathname: `/org/${org.subdomain}`,
      search: `${org.id}`,
      state: org,
    });
  };
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullScreen={view > 768 ? false : true}
      TransitionComponent={Transition}
    >
      <div className="order-de">
        <div className="flex-row-sp order-de__head">
          <span className="flex-row order-de__head-title">
            <img onClick={() => setOpen(false)} src={icon.chevronLeft} alt="" />
            {t("order.order_de")}
          </span>
          <div className="flex-row order-de__head-date">
            <span className="flex-row date">
              {t("booking.date")} Order: <h4>01-01-2000</h4>
            </span>
            <span className="flex-row time">
              {t("order.time")}: <h4>20-00-00</h4>
            </span>
          </div>
        </div>
        <div className="order-de__count">
          <span className="flex-row count">
            {t("pr.total")}:
            <h4>
              {" "}
              {formatPrice(order?.amount)}đ ({countItem} item)
            </h4>
          </span>
        </div>
        <div className="flex-row order-de__org">
          <img
            src={"https://picsum.photos/650/976?random=1" + org?.id}
            alt=""
            className="order-de__org-img"
          />
          <div className="order-de__org-cnt">
            <span className="name">{org?.name}</span>
            <span className="address">{org?.full_address}</span>
            <ButtonCus
              onClick={handleDetailMerchant}
              text={t("order.view_org")}
              backColor="var(--purple)"
              padding="6px 8px"
              color="var(--bgWhite)"
              borderRadius="14px"
              width="fit-content"
            />
          </div>
        </div>
        <TabOrder
          org={org}
          order={order}
          acTab={acTab}
          setAcTab={setAcTab}
          open={open}
        />
      </div>
    </Dialog>
  );
}

export default OrderDetail;
