import React from 'react';
import './CardItem.css';
import icon from '../../constants/icon';
import formatPrice from '../../utils/formatPrice';
import {useHistory} from 'react-router-dom';
import scrollTop from '../../utils/scrollTop';
import slugify from '../../utils/formatUrlString';

//note: product : is_type = 1, service: is_type = 2
function CardItem(props:any) {
      const {
            detail,
            style,
            name,
            retail_price,
            special_price,
            org_id,
            org_name,
            org
      } = props;
      const history = useHistory();
      const discount = 100 - (special_price / retail_price * 100)
      const gotoDetail = () => {
            scrollTop()
            // const param = {
            //       org: org_id,
            //       id: detail.id
            // }
            // const search = JSON.stringify(param);
            //console.log(org_id)
            if (detail.is_product === true) {
                  const is_type = 1;
                  history.push({
                        pathname: `/Product-detail/${slugify(name)}`,
                        search: `${org_id},${detail.id},${is_type}`,
                        state: org
                  })
            } else {
                  const is_type = 2;
                  history.push({
                        pathname: `/Service-detail/${slugify(name)}`,
                        search: `${org_id},${detail.id},${is_type}`,
                        state: org
                  })
            }
      }
      return (
            <div 
                  onClick={gotoDetail}
                  style={{ width: style?.width }} 
                  className="card"
            >
                  <div
                        style={special_price < 0 ? { display: 'none' } : {}}
                        className="card-discount">
                        Giảm {discount.toFixed()}%
                  </div>
                  <img src={"https://picsum.photos/650/976?random=" + detail.id} alt="" className="card-img" />
                  <div className="card-info">
                        <div className="card-name">
                              {detail.id} - {name}
                        </div>
                        <span className="card-spa-name">
                              {org_name}
                        </span>
                        <div className="flex-row-sp card-price">
                              <span className="flex-row card-price__detail">
                                    <h4
                                          style={special_price < 0 ?
                                                {
                                                      textDecoration: 'none',
                                                      fontSize: '20px',
                                                      lineHeight: '24px',
                                                      fontWeight: "bold",
                                                      color: 'var(--purple)'
                                                }
                                                :
                                                {}
                                          }
                                    >{formatPrice(retail_price)} đ</h4>
                                    <h3
                                          style={special_price < 0 ? { display: 'none' } : {}}
                                    >
                                          {formatPrice(special_price)} đ
                                    </h3>
                              </span>
                              <span className="flex-row card-price__star">
                                    4.5
                                    <img src={icon.star} alt="" />
                              </span>
                        </div>
                        <span
                              style={special_price < 0 ? { display: 'none' } : {}}
                              className="card-date"
                        >
                              HSD: 20-01-2022
                        </span>
                  </div>
                  {/* <button onClick={handleAddCart} >Add cart</button> */}
            </div>
      );
}

export default CardItem;