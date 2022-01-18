import React, { useContext, useEffect, useState } from "react";
import "./searchResult.css";
import { useLocation } from "react-router-dom";
import Result from "./components/Result";
import MapWrapper from "./components/MapWrapper";
import { Container } from "@mui/material";
import Footer from "../Footer/index";
import { IOrganization } from "../../interface/organization";
import orgApi from "../../api/organizationApi";
import { AppContext } from "../../context/AppProvider";
import Head from "../Head";
import Bottom from "../../featuresMobile/Bottom";
import HeadTitle from "../HeadTitle";
// import img from '../../constants/img';

function SearchResult(props: any) {
  const { t } = useContext(AppContext);
  const location = useLocation();
  const [chooseItem, setChooseItem] = useState();
  const params = location.search.slice(8, location.search.length);
  const keySearch = decodeURI(params);
  const [loading, setLoading] = useState(false);
  const [orgs, setOrgs] = useState<IOrganization[]>([]);
  // const [orgsLength, setOrgsLength] = useState();
  const [totalItem, setTotalItem] = useState();
  const [total, setTotal] = useState();
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    async function handleGetOrgs() {
      setLoading(true);
      try {
        const res = await orgApi.getOrgByKeyword({
          page: curPage,
          keySearch: keySearch,
        });
        setTotalItem(res.data.context.last_page);
        setOrgs(res.data.context.data);
        setTotal(res.data.context.total);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    handleGetOrgs();
  }, [keySearch, curPage]);
  return (
    <div
      style={{
        backgroundColor: "var(--bg-gray)",
      }}
    >
      <HeadTitle title={`${t("Search_result.text_result")} : ${keySearch}`} />
      <Head />
      <Container className="result-section_map">
        {
          // orgs.length === 0 ?
          //       <div className="flex-column result-null">
          //             <span className="result-null__title">
          //                   {t('Search_result.no_result_title')}
          //             </span>
          //             <span className="result-null__text">
          //                  {t('Search_result.sorry')}
          //             </span>
          //             <img src={img.resultNull} alt="" />
          //       </div>
          //       :
          <div className="result-content">
            <Result
              t={t}
              keySearch={keySearch}
              totalItem={totalItem}
              setCurPage={setCurPage}
              resultList={orgs}
              setChooseItem={setChooseItem}
              loading={loading}
              total={total}
            />
            <MapWrapper chooseItem={chooseItem} width="50%" />
          </div>
        }
      </Container>
      <Footer />
      <Bottom />
    </div>
  );
}

export default SearchResult;
