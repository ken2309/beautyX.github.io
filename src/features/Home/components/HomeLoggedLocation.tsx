import React, { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import SectionTitle from "../../SectionTitle/index";
import HomeLoggedLocationItem from "./HomeLoggedLocationItem";

const dataLocation = [
  {
    id: 1,
    name: "spa 1",
  },
  {
    id: 2,
    name: "spa 2",
  },
  {
    id: 3,
    name: "spa 3",
  },
  {
    id: 4,
    name: "spa 4",
  },
  {
    id: 5,
    name: "spa 5",
  },
];
export default function HomeLoggedLocation() {
  const { t } = useContext(AppContext)
  return (
    <div className="homelogged-location">
      <SectionTitle title={t('Home.favorite_list')} textAlign="left" />
      <div className="homelogged-location__list">
        {dataLocation.map((item, i) => (
          <HomeLoggedLocationItem key={i} />
        ))}
      </div>
    </div>
  );
}
