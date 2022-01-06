import React, { useState } from 'react';
import ProductsTab from './ProductsTab/index';
import ServicesTab from './ServicesTab/index';
import ComboTab from './CombosTab/index';

function TabOrder(props: any) {
      const { order, org } = props;
      const [acTab, setAcTab] = useState<number>();
      const tabList = [
            { id: 1, title: 'Sản phẩm', count: order?.items_product?.length },
            { id: 2, title: 'Dịch vụ', count: order?.items_service?.length },
            { id: 3, title: 'Combo', count: order?.items_treatment_combo?.length }
      ]
      return (
            <>
                  <div className="flex-row order-de-tab">
                        {
                              tabList.map(item => (
                                    <div
                                          style={item.count === 0 ? { display: 'none' } : { display: 'block' }}
                                          key={item.id}
                                          className="order-de-tab__btn"
                                    >
                                          <button
                                                onClick={() => setAcTab(item.id)}
                                                style={item.id === acTab ? { backgroundColor: 'var(--purple)', color: 'var(--bgWhite)' } : {}}
                                          >{item.title}</button>
                                    </div>
                              ))
                        }
                  </div>
                  <ProductsTab
                        org={org}
                        tab_id={acTab}
                        products={order?.items_product}
                  />
                  <ServicesTab
                        org={org}
                        tab_id={acTab}
                        services={order?.items_service}
                  />
                  <ComboTab
                        org={org}
                        tab_id={acTab}
                        combos={order?.items_treatment_combo}
                  />
            </>
      );
}

export default TabOrder;