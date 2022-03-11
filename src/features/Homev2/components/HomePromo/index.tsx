import React, { useEffect, useState } from 'react';
import HomeTitleSection from '../HomeTitleSection/index';
import FilterServices from '../../../FilterServices';
import { IServicePromo } from '../../../../interface/servicePromo';
import servicePromoApi from '../../../../api/servicePromoApi';
import ServicePromoItem from '../../../ViewItemCommon/ServicePromoItem';
import icon from '../../../../constants/icon';
import { useHistory } from 'react-router-dom'

interface IData {
    services: IServicePromo[],
    lastPage: number,
    page: 1
}

function HomePromo(props: any) {
    //const [services, setServices] = useState<IServicePromo[]>([])
    const history = useHistory();
    const [data, setData] = useState<IData>({
        services: [],
        lastPage: 1,
        page: 1
    })
    const [dataSort, setDataSort] = useState('-discount_percent')
    async function getServicesPromo() {
        try {
            const res = await servicePromoApi.getServicesPromo({
                page: data.page,
                sort: dataSort
            });
            setData({
                ...data,
                services: res.data.data.hits
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
                services: res.data.data.hits
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
    }, [dataSort])
    return (
        <div
            className='home-se-promo'
        >
            <div className="flex-row-sp home-se-promo__header">
                <HomeTitleSection
                    title='Deal làm đẹp cực HOT'
                />
                <button
                    onClick={() => history.push('/deal-lam-dep-cuc-HOT')}
                >
                    <img src={icon.chevronRightBlack} alt="" />
                </button>
            </div>
            <FilterServices
                dataSort={dataSort}
                setDataSort={setDataSort}
                setData={setData}
            />
            <div className="home-promo-ser">
                <ul className="ser-list">
                    {
                        data.services.slice(0, 12).map((item: IServicePromo, index: number) => (
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
        </div>
    );
}

export default HomePromo;