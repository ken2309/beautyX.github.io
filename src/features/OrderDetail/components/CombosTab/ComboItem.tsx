import React, { useEffect, useState } from 'react';
import { Combo } from '../../../../interface/combo';
import formatPrice from '../../../../utils/formatPrice';
import ButtonCus from '../../../../components/ButtonCus';
import comboApi from '../../../../api/comboApi';

function ComboItem(props: any) {
      const { combotItem, org, open } = props;
      const [combo, setCombo] = useState<Combo>()
      useEffect(() => {
            async function handleGetComDet() {
                  try {
                        const res = await comboApi.getComboDetail({
                              org_id: org.id,
                              com_id: combotItem.productable_id
                        })
                        setCombo(res.data.context)
                  } catch (error) {
                        console.log(error)
                  }
            }
            if(open === true){
                  handleGetComDet();     
            }
      }, [combotItem.productable_id, org.id, open])
      return (
            <li>
                  <div className="order-de-list__item">
                        <img
                              src={"https://picsum.photos/650/976?random=1" + combo?.id}
                              alt=""
                              className="order-de-pr-item__img"
                        />
                        <div className="order-de-pr-item__cnt">
                              <div className="item-detail">
                                    <span className="flex-row-sp item-name">
                                          {combo?.name}
                                          <span>
                                                x {combotItem.quantity}
                                          </span>
                                    </span>
                                    <span className="item-org__name">
                                          {org.name}
                                    </span>
                              </div>
                              <div className="flex-row-sp item-bottom">
                                    <span className="price">
                                          {formatPrice(combo?.price)} đ
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

export default ComboItem;