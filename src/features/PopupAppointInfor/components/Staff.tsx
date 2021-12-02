import React, { useContext } from "react";
import icon from "../../../constants/icon";
import { AppContext } from "../../../context/AppProvider";

const staff = [
  { id: 1, name: "Nhân viên 1" },
  { id: 2, name: "Nhân viên 2" },
  { id: 3, name: "Nhân viên 3" },
];

interface ChooseStaff {
  id: number;
  name: string;
}
export default function Staff(props: any) {
  const { t } = useContext(AppContext)
  const { openStaff, setOpenStaff, setOpenService } = props;
  const [chooseStaff, setChooseStaff] = React.useState<ChooseStaff>({
    id: 0,
    name: "",
  });
  const openStaffClick = () => {
    if (openStaff === true) {
      setOpenStaff(false);
    } else {
      setOpenStaff(true);
      setOpenService(false);
    }
  };

  const handleChooseStaff = (staff: any) => {
    setChooseStaff(staff);
  };
  return (
    <div className="appointInfor-staff">
      <div className="service-label">
        <p>
          {t('booking.staff')}{" "}
          <span className="color-gray">({t('booking.optional')})</span>
        </p>
        <div onClick={openStaffClick} className="service-wrap">
          <div className="service-input">
            <span className="color-gray">{t('booking.search_staff')}</span>
          </div>
          <div className="service-input__btn">
            <img src={icon.ArrowDownWhite} alt="" />
          </div>
          {/* drop down */}
          <div
            style={
              openStaff === true ? { display: "block" } : { display: "none" }
            }
            className="drop-category"
          >
            <ul>
              {staff.map((item) => (
                <li
                  style={
                    item === chooseStaff
                      ? {
                          color: "var(--bg-color)",
                          backgroundColor: "var(--purple)",
                        }
                      : {}
                  }
                  onClick={() => handleChooseStaff(item)}
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
    </div>
  );
}
