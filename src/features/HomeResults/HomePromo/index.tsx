import React, { useEffect, useState } from 'react';
import Head from '../../Head';
import HeadTitle from '../../HeadTitle';
import { Container } from '@mui/material';
import '../home-result.css'
import HomeTitleSection from '../../Homev2/components/HomeTitleSection/index';
import FilterServices from '../../FilterServices';
import servicePromoApi from '../../../api/servicePromoApi';
import ServicePromoItem from '../../ViewItemCommon/ServicePromoItem';
import { IServicePromo } from '../../../interface/servicePromo';
import {Pagination} from '@mui/material';
import scrollTop from '../../../utils/scrollTop';

function HomePromo(props: any) {
    const [dataSort, setDataSort] = useState('-discount_percent')
    const [data, setData] = useState({
        services: [],
        page: 1,
        lastPage: 1
    })
    async function getServicesPromo() {
        try {
            const res = await servicePromoApi.getServicesPromo({
                page: data.page,
                sort: dataSort
            });
            setData({
                ...data,
                services: res.data.data.hits,
                lastPage: res?.data.last_page
            })
        } catch (error) {
            console.log(error)
        }
    }
    async function getServicesPromoByLocation() {
        try {
            const res = await servicePromoApi.getServicesPromoLocation({
                page: data.page,
                sort: dataSort
            });
            setData({
                ...data,
                services: res.data.data.hits,
                lastPage: res?.data.last_page
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (dataSort === 'none') {
            getServicesPromoByLocation()
        } else {
            getServicesPromo()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.page, dataSort])
    const onPageChange=(e:any, value:any)=>{
        setData({
            ...data,
            page: value
        })
        scrollTop()
    }
    return (
        <>
            <Head />
            <HeadTitle
                title='Deal làm đẹp cực HOT'
            />
            <Container>
                <div className="home-result-ser-cnt">
                    <HomeTitleSection
                        title='Deal làm đẹp cực HOT'
                    />
                    <FilterServices
                        dataSort={dataSort}
                        setDataSort={setDataSort}
                        setData={setData}
                    />
                </div>
                <div className="home-promo-ser">
                    <ul className="ser-list">
                        {
                            data.services.map((item: IServicePromo, index: number) => (
                                <li
                                    key={index}
                                >
                                    <ServicePromoItem
                                        service={item}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Pagination
                    color="secondary"
                    shape="rounded"
                    count={data.lastPage}
                    onChange={onPageChange}
                />
            </Container>
        </>
    );
}

export default HomePromo;