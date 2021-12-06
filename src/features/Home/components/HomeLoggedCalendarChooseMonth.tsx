import React, {useContext, useState, useEffect} from "react";
import "dayjs/locale/vi";
import icon from "../../../constants/icon";
import { AppContext } from '../../../context/AppProvider'

interface IChooseMonth {
  Class: string;
  handlePrev: any;
  handleNext: any;
  dayObj: any;
}
export default function HomeLoggedCalendarChooseMonth(props: IChooseMonth) {
  const { language } = useContext(AppContext)
  const [locale, setLocale] = useState(language)
  const { handlePrev, handleNext, dayObj } = props;
  useEffect(() => {
    if (language === 'vn') {
      setLocale('vi')
    }
    else if (language === 'en') {
      setLocale('en')
    }
  }, [language])
  return (
    <div className={props.Class}>
      <div className="calendar-mounth">
        <div onClick={handlePrev} className="calendar-mounth__prev">
          <img className="calendar-mounth__icon" src={icon.pPrev} alt="" />
        </div>
        <span className="calendar-mounth__time text-white-color">
          {/* chỉ span này tiếng việt thêm .locale("vi") */}
          {(dayObj.locale(locale).format("MMMM - YYYY"))}
        </span>
        <div onClick={handleNext} className="calendar-mounth__next">
          <img className="calendar-mounth__icon" src={icon.pNext} alt="" />
        </div>
      </div>
    </div>
  );
}
