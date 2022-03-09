import React, { useContext, useState } from 'react';
import Head from '../Head';
import HeadTitle from '../HeadTitle';
import { useLocation } from 'react-router-dom'
import { AppContext } from '../../context/AppProvider';
import './search-results.css';
import { Container } from '@mui/material';
import FilterOrgs from '../FilterOrgs';
import TabService from './components/TabService';
import Footer from '../Footer';
import TabOrgs from './components/TabOrgs';
import orgApi from '../../api/organizationApi';

function SearchResults(props: any) {
    const { t } = useContext(AppContext)
    const location = useLocation();
    const searchKey = decodeURI(location.search.slice(1, location.search.length));
    const tabs = [
        { id: 1, title: 'Dịch vụ', count: 1 },
        { id: 2, title: 'Sản phẩm', count: 1 },
        { id: 3, title: 'Doanh nghiệp', count: 1 },
        { id: 4, title: 'Khu vực', count: 1 },
    ]
    const [acTab, setAcTab] = useState(tabs[0].id);
    const onActiveTab = (tab: any) => {
        setAcTab(tab.id)
    }
    //filter for org
    const [data, setData] = useState({
        orgs: [],
        page: 1,
        lastPage: 1
    })
    const [orgFilter, setOrgFilter] = useState({
        tags: [],
        province_code: 0,
        min_price: 0,
        max_price: 0
    })
    async function handleOrgsByKeyword() {
        try {
            const res = await orgApi.getOrgByKeyword({
                keyword: searchKey,
                page: data.page,
                tags: orgFilter.tags,
                province: orgFilter.province_code,
                price: {
                    min: orgFilter.min_price,
                    max: orgFilter.max_price
                }
            })
            setData({
                ...data,
                orgs: res.data.context.data,
                lastPage: res.data.context.last_page
            })
        } catch (error) {
            console.log(error)
        }
    }
    //
    return (
        <>
            <HeadTitle title={`${t("Search_result.text_result")} : ${searchKey}`} />
            <Head />
            <Container>
                <div className="se-re-cnt">
                    <div className="se-re-cnt__left">
                        <div className="se-re-cnt__left-top">
                            <ul className="se-re-cnt__left-list">
                                {
                                    tabs.map(item => (
                                        <li
                                            style={acTab === item.id ?
                                                { backgroundColor: 'var(--purple)', color: 'var(--bgWhite)' } : {}
                                            }
                                            onClick={() => onActiveTab(item)}
                                            key={item.id}
                                        >
                                            {item.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {
                            acTab === 3 ?
                                <FilterOrgs
                                    orgFilter={orgFilter}
                                    setOrgFilter={setOrgFilter}
                                    setData={setData}
                                    handleOrgsByKeyword={handleOrgsByKeyword}
                                />
                                :
                                <></>
                        }
                    </div>
                    <div className="se-re-cnt__right">
                        <span className="se-re-cnt-title">
                            Kết quả tìm kiếm cho từ khóa : "{searchKey}"
                        </span>
                        <TabService
                            keyword={searchKey}
                            acTab={acTab}
                        />
                        <TabOrgs
                            orgFilter={orgFilter}
                            keyword={searchKey}
                            acTab={acTab}
                            data={data}
                            setData={setData}
                            handleOrgsByKeyword={handleOrgsByKeyword}
                        />
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default SearchResults;