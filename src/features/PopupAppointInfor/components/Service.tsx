import React from "react";
import icon from "../../../constants/icon";

const service = [
  { id: 1, name: "Dịch vụ 1" },
  { id: 2, name: "Dịch vụ 2" },
  { id: 3, name: "Dịch vụ 3" },
];
interface ChooseService {
  id: number;
  name: string;
}
export default function Service(props: any) {
  const { openService, setOpenService, setOpenStaff } = props;
  const [chooseService, setChooseService] = React.useState<ChooseService>({
    id: 0,
    name: "",
  });
  const openServiceClick = () => {
    if (openService === true) {
      setOpenService(false);
    } else {
      setOpenService(true);
      setOpenStaff(false);
    }
  };
  const handleSetChooseService = (service: any) => {
    setChooseService(service);
    setOpenService(false);
  };
  return (
    <div className="appointInfor-booked__service">
      <div className="service-label">
        <p>Vui lòng lựa chọn dịch vụ muốn đặt hẹn</p>
      </div>
      <div onClick={openServiceClick} className="service-wrap">
        <div className="service-input">
          <span className="service-input__place">
            {chooseService.name.length === 0 ? "Service 1" : chooseService.name}
          </span>
        </div>
        <div className="service-input__btn">
          <img src={icon.ArrowDownWhite} alt="" />
        </div>
        {/* drop down */}
        <div
          style={
            openService === true ? { display: "block" } : { display: "none" }
          }
          className="drop-category"
        >
          <ul>
            {service.map((item) => (
              <li
                style={
                  item === chooseService
                    ? {
                        color: "var(--bg-color)",
                        backgroundColor: "var(--purple)",
                      }
                    : {}
                }
                onClick={() => handleSetChooseService(item)}
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
