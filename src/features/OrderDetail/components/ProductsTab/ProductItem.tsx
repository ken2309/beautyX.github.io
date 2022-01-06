import React, { useEffect, useState } from 'react';
import productsApi from '../../../../api/productApi';
import { Product } from '../../../../interface/product';
import formatPrice from '../../../../utils/formatPrice';
import ButtonCus from '../../../../components/ButtonCus';

function ProductItem(props: any) {
      const { productItem, org } = props;
      const [product, setProduct] = useState<Product>();
      useEffect(() => {
            async function handleGetPrDetail() {
                  try {
                        const res = await productsApi.getDetailById({
                              org_id: org.id,
                              id: productItem.productable_id
                        })
                        setProduct(res.data.context)
                  } catch (error) {
                        console.log(error)
                  }
            }
            handleGetPrDetail()
      }, [org.id, productItem.productable_id])
      return (
            <li>
                  <div className="order-de-list__item">
                        <img
                              src={"https://picsum.photos/650/976?random=1" + product?.id}
                              alt=""
                              className="order-de-pr-item__img"
                        />
                        <div className="order-de-pr-item__cnt">
                              <div className="item-detail">
                                    <span className="flex-row-sp item-name">
                                          {product?.product_name}
                                          <span>
                                                x {productItem.quantity}
                                          </span>
                                    </span>
                                    <span className="item-org__name">
                                          {org.name}
                                    </span>
                              </div>
                              <div className="flex-row-sp item-bottom">
                                    <span className="price">
                                          {formatPrice(product?.retail_price)} đ
                                    </span>
                                    <div className="flex-row item-button">
                                          <ButtonCus
                                                text='Xem thông tin'
                                                padding='4px 8px'
                                                color='var(--purple)'
                                                backColor='var(--bgGray)'
                                                borderRadius='12px'
                                                margin='0px 16px 0px 0px'
                                          />
                                          <ButtonCus
                                                text='Pre-Order'
                                                padding='4px 8px'
                                                color='var(--bgWhite)'
                                                backColor='var(--purple)'
                                                borderRadius='12px'
                                          />
                                    </div>
                              </div>
                        </div>
                  </div>
            </li>
      );
}

export default ProductItem;