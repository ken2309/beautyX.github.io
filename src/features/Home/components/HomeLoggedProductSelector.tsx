import React from "react";
import icon from "../../../constants/icon";

const enterprise = [
  { id: 0, name: "Tất cả doanh nghiệp" },
  { id: 1, name: "Doanh nghiệp 1" },
  { id: 2, name: "Doanh nghiệp 2" },
  { id: 3, name: "Doanh nghiệp 3" },
];

export default function HomeLoggedProductSelector() {
  const [openEnterprise, setOpenEnterprise] = React.useState(false);
  const [chooseEnterprise, setChooseEnterprise] = React.useState({
    id: 0,
    name: "Tất cả doanh nghiệp",
  });
  const openEnterpriseClick = () => {
    if (openEnterprise === true) {
      setOpenEnterprise(false);
    } else {
      setOpenEnterprise(true);
    }
  };
  const handleChooseEnterprise = (item: any) => {
    setChooseEnterprise(item);
  };
  return (
    <div className="product-select">
      <div onClick={openEnterpriseClick} className="product-select__wrap">
        <div className="product-select__input">
          <span className="color-purple">{chooseEnterprise.name}</span>
        </div>
        <div className="product-select__btn">
          <img src={icon.ArrowDownWhite} alt="" />
        </div>
        {/* drop down */}
        <div
          style={
            openEnterprise === true ? { display: "block" } : { display: "none" }
          }
          className="drop-all__enterprise"
        >
          <ul>
            {enterprise.map((item) => (
              <li
                style={
                  item === chooseEnterprise
                    ? {
                        color: "var(--bg-color)",
                        backgroundColor: "var(--purple)",
                      }
                    : {}
                }
                onClick={() => handleChooseEnterprise(item)}
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        {/* end drop down */}
      </div>
    </div>
  );
}
