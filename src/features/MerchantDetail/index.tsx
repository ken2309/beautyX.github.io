import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Head from "../Head/index";
import "./merchantDetail.css";
import { Container } from "@mui/material";
import DetailHead from "./components/DetailHead";
import DetailMer from "./components/DetailMer";
import DetailBranchList from "./components/DetailBranchList";
import DetailSaleList from "./components/DetailSaleList";
import ServiceByMerchant from "../ServiceByMerchant/index";
import ProductByMerchant from "../ProductByMerchant/index";
import ComboByMerchant from "../ComboByMerchant/index";
import Footer from "../Footer";
import orgApi from "../../api/organizationApi";
import branchApi from "../../api/branchApi";
import { AppContext } from "../../context/AppProvider";
import DetailTab from "./components/DetailTab";
import DetailTabMb from "../../featuresMobile/DetailTabMb";
import MerchantMb from "../../featuresMobile/MerchantMb";
import Bottom from "../../featuresMobile/Bottom";
// view for mobile
import RecommendList from "../../featuresMobile/RecomendList";

const id_tab = 1;
function MerchantDetail(props: any) {
  const { t } = useContext(AppContext);
  const location = useLocation();
  const mer_id = location.search.slice(1, location.search.length);
  const [loading, setLoading] = useState(false);
  const [org, setOrg] = useState({});
  const [branches, setBranches] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    async function handleGetOrgById() {
      setLoading(true);
      if (location.state) {
        setOrg(location.state);
        setLoading(false);
        try {
          const resBranches = await branchApi.getBranchByOrg(mer_id);
          setBranches(resBranches.data.context);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const res = await orgApi.getOrgById(mer_id);
          setOrg(res.data.context);
          setBranches(res.data.context.branches);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
    }
    handleGetOrgById();
  }, [location.state, mer_id]);
  return (
    <div className="mb-cnt">
      <Head />
      <DetailHead
        t={t}
        loading={loading}
        merDetail={org}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <DetailTab t={t} setActiveTab={setActiveTab} activeTab={activeTab} />
      {/* for mobile */}
      <DetailTabMb setActiveTab={setActiveTab} activeTab={activeTab} />
      {/* ---------- */}
      <div style={{ backgroundColor: "var(--bg-gray)", paddingBottom: "92px" }}>
        <Container>
          <div
            style={
              id_tab === activeTab ? { display: "block" } : { display: "none" }
            }
          >
            <DetailMer t={t} merDetail={org} />
            {/* for mobile */}
            <MerchantMb branches={branches} />
            {/* ---------- */}
            <DetailBranchList branches={branches} />
            <DetailSaleList t={t} merDetail={org} />
            {/* for mobile */}
            <RecommendList
              org={org}
            />
            {/* ----- */}
          </div>
          <ServiceByMerchant activeTab={activeTab} mer_id={mer_id} org={org} />
          <ProductByMerchant mer_id={mer_id} activeTab={activeTab} org={org} />
          <ComboByMerchant org={org} org_id={mer_id} activeTab={activeTab} />
        </Container>
      </div>
      <Footer />
      <Bottom />
    </div>
  );
}

export default MerchantDetail;
