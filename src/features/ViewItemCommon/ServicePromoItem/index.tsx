import React from 'react';
import './service-promo-item.css';
import { IServicePromo } from '../../../interface/servicePromo';
import icon from '../../../constants/icon';
import formatPrice from '../../../utils/formatPrice';
import { useHistory } from 'react-router-dom';
import slugify from '../../../utils/formatUrlString'

interface IProps {
    service: IServicePromo
}

function ServicePromoItem(props: IProps) {
    const { service } = props;
    const history = useHistory()
    const org = {
        id: service.org_id,
        name: service.org_name,
        latitude: service.org_latitude,
        longitude: service.org_longitude,
        address: service.org_full_address,
        full_address: service.org_full_address
    }
    const gotoDetail = () => {
        const name = service.service_name
        history.push({
            pathname: `/service-detail/${slugify(service.service_name)}`,
            search: `${org.id},${service.service_id},2`,
            state: { org, service, name }
        })
    }
    return (
        <div onClick={gotoDetail} className='ser-pro-item'>
            <div className="ser-img-cnt">
                <img className='ser-img' src={service?.image_url ? `${service.image_url}` : `${service?.org_image}`} alt="" />
                <div className="ser-promo">
                    {
                        service.discount_percent > 0 ?
                            <div className="ser-promo__percent">
                                Giảm <br /> {Math.round(service?.discount_percent)} %
                            </div>
                            :
                            <div></div>
                    }
                    <div className="flex-row ser-promo__bot">
                        <div className="flex-row ser-promo__bot-start">
                            {service?.rating}
                            <img src={icon.star} alt="" />
                        </div>
                        <div className="ser-promo__bot-bought">
                            Lượt mua
                            <span>{service?.bought_count}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ser-pro-item__cnt">
                <span className="ser-name">
                    {service?.service_name}
                </span>
                <div className="ser-price">
                    {
                        service?.special_price === -1 ?
                            <span style={{ color: 'var(--purple)' }}>{formatPrice(service?.price)}đ</span>
                            :
                            <>
                                <span>{formatPrice(service?.special_price)}đ</span>
                                <span>{formatPrice(service?.price)}đ</span>
                            </>
                    }
                </div>
                {
                    service._geoDistance ?
                        <div className="flex-row ser-distance">
                            <div></div>
                            <span>khoảng cách:
                                {
                                    service._geoDistance < 1000 ?
                                        `${service._geoDistance}(m)`
                                        :
                                        `${Math.round(service._geoDistance / 1000)}(km)`
                                }
                            </span>
                        </div>
                        :
                        <></>
                }
                <span className="ser-org-address">
                    <img src={icon.mapPinRed} alt="" />
                    {service?.org_district_name},{service?.org_province_name}
                </span>
            </div>
        </div>
    );
}

export default ServicePromoItem;