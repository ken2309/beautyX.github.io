import React, { useContext, useState, KeyboardEvent } from "react";
import ButtonCus from "../../../components/ButtonCus/index";
import icon from "../../../constants/icon";
import HomeFilterForm from "./HomeFilterForm";
import { AppContext } from "../../../context/AppProvider";
import { useHistory } from "react-router-dom";
import scrollTop from "../../../utils/scrollTop";

function HomeFilter(props: any) {
  const { styleFilter, setCurPage, setOpenFilter, forcusMb } = props;
  const { t } = useContext(AppContext);
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const handleOnSearchChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const searchFunc = () => {
    history.push({
      pathname: "/Search-result/",
      search: `?search=${searchText}`,
    });
    if (setCurPage) {
      setCurPage(1);
      if (setOpenFilter) {
        setOpenFilter(false);
      }
    }
  };

  const handleSearchClick = () => {
    // history.push(`/Search-result/${searchText}`)
    searchFunc();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" || event?.nativeEvent.keyCode === 13) {
      searchFunc();
      scrollTop();
    }
  };
  return (
    <div
      style={{
        position: styleFilter?.position,
        width: styleFilter?.width,
        boxShadow: styleFilter?.boxShadow,
        padding: styleFilter?.padding,
      }}
      className="home-banner__filter"
    >
      <div className="home__filter-search-box">
        <input
          autoFocus={forcusMb === true ? true : false}
          onKeyDown={handleKeyDown}
          onChange={handleOnSearchChange}
          value={searchText}
          className="input-search"
          type="text"
          placeholder={t("Home.Filter_form_input")}
        />
        <ButtonCus
          disabled={searchText.length === 0 ? true : false}
          onClick={handleSearchClick}
          imgIcon={icon.search}
          backColor="var(--purple)"
          borderRadius="0px 20px 20px 0px"
        />
      </div>
      <HomeFilterForm />
    </div>
  );
}

export default HomeFilter;
