import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppProvider";
import SectionTitle from "../../../SectionTitle/index";
import HomeLoggedLocationItem from "./HomeLoggedLocationItem";
import orgProApi from "../../../../api/productApi";
export default function HomeLoggedLocation() {
  const { t } = useContext(AppContext);
  const [org, setSetOrg] = useState([]);
  useEffect(() => {
    async function handleGetOrgs() {
      try {
        const res = await orgProApi.getByOrgId({ org_id: 1 });
        setSetOrg(res.data.context.data);
      } catch (error) {
        console.log(error);
      }
    }
    handleGetOrgs();
  }, []);

  return (
    <div className="homelogged-location">
      <SectionTitle title={t("Home.favorite_list")} textAlign="left" />
      <div className="homelogged-location__list">
        {org.map((item, i) => (
          <HomeLoggedLocationItem key={i} org={item} />
        ))}
      </div>
    </div>
  );
}
