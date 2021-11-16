import React from 'react';
import './CardItem.css';
import icon from '../../constants/icon';
import formatPrice from '../../utils/formatPrice'

function CardItem(props:any) {
      const { detail, style } = props;
      const discount = 100 - (detail.salePrice / detail?.oldPrice * 100)
      return (
            <div style={{ width: style?.width }} className="card">
                  <div
                        style={discount === 0 ? { display: 'none' } : {}}
                        className="card-discount">
                        Giảm {discount.toFixed()}%
                  </div>
                  <img src={"https://picsum.photos/650/976?random=" + detail.id} alt="" className="card-img" />
                  <div className="card-info">
                        <div className="card-name">
                              {detail.name}
                        </div>
                        <span className="card-spa-name">
                              Kanessa Beauty  Spa
                        </span>
                        <div className="flex-row-sp card-price">
                              <span className="flex-row card-price__detail">
                                    <h4
                                          style={discount === 0 ?
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
                                    >{formatPrice(detail.oldPrice)} đ</h4>
                                    <h3
                                          style={discount === 0 ? { display: 'none' } : {}}
                                    >
                                          {formatPrice(detail.salePrice)} đ
                                    </h3>
                              </span>
                              <span className="flex-row card-price__star">
                                    4.5
                                    <img src={icon.star} alt="" />
                              </span>
                        </div>
                        <span className="card-date">
                              HSD: 20-01-2022
                        </span>
                  </div>
            </div>
      );
}

export default CardItem;