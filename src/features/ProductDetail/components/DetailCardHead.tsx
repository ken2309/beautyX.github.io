import React, { useContext } from 'react';
import icon from '../../../constants/icon';
import formatPrice from '../../../utils/formatPrice';
import { AppContext } from '../../../context/AppProvider'

function DetailCardHead(props: any) {
      const { t } = useContext(AppContext)
      const { org, product, old_price, discount, sale_price } = props;
      return (
            <div className="pr-detail-card-head">
                  <div className="product-cnt__right-head">
                        <h2>
                              {product?.product_name ? product?.product_name : product?.service_name}
                        </h2>
                        <span>{org?.name} | {t('Search_result.opening')}</span>
                        <div className="flex-row product-cnt__right-head__rate">
                              <span>90</span>
                              {t('pr.purchases')}
                              <span>4.5</span>
                              <img src={icon.star} alt="" />
                              <span>250</span>
                              <img src={icon.chatAll} alt="" />
                        </div>
                  </div>
                  <div className="product-cnt__right-price">
                        <span
                              style={old_price === 0 ? { display: 'none' } : {}}
                              className="price-old"
                        >
                              {formatPrice(old_price)} đ
                        </span>
                        <div className="price__discount-sale">
                              <span style={old_price === 0 ? { display: 'none' } : {}} >Giảm {100 - discount} %</span>
                              <span
                                    style={old_price === 0 ? { color: 'var(--purple)' } : {}}
                              >
                                    {formatPrice(sale_price)} đ
                              </span>
                        </div>
                  </div>
            </div>
      );
}

export default DetailCardHead;