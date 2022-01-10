import React, { useContext, useState } from 'react';
import ProductsTab from './ProductsTab/index';
import ServicesTab from './ServicesTab/index';
import ComboTab from './CombosTab/index';
import {AppContext} from '../../../context/AppProvider'

function TabOrder(props: any) {
      const { order, org, open } = props;
      const {t} = useContext(AppContext)
      const tabList = [
            { id: 1, title: t('Mer_de.products'), count: order?.items_product?.length },
            { id: 2, title: t('Mer_de.services'), count: order?.items_service?.length },
            { id: 3, title: 'Combo', count: order?.items_treatment_combo?.length }
      ]
      const tabArr = [];
      for( var tab of tabList){
            if(tab.count > 0){
                  tabArr.push(tab)
            }
      }
      const [acTab, setAcTab] = useState<number>(tabArr[0].id);
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
                                          >{item.title} ({item.count}) </button>
                                    </div>
                              ))
                        }
                  </div>
                  {/* <AllTab
                        org={org}
                        order={order}
                        tab_id={acTab}
                  /> */}
                  <ProductsTab
                        org={org}
                        open={open}
                        tab_id={acTab}
                        products={order?.items_product}
                  />
                  <ServicesTab
                        org={org}
                        open={open}
                        tab_id={acTab}
                        services={order?.items_service}
                  />
                  <ComboTab
                        org={org}
                        open={open}
                        tab_id={acTab}
                        combos={order?.items_treatment_combo}
                  />
            </>
      );
}

export default TabOrder;