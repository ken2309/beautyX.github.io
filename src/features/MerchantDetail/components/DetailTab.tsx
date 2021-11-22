import React from 'react';
import '../MerchantDetail.css'

const tabList = [
      { id: 1, name: 'Về chúng tôi' },
      { id: 2, name: 'Dịch vụ' },
      { id: 3, name: 'Sản phẩm' },
      { id: 4, name: 'Combo' },
      { id: 5, name: 'Ưu đãi' }
]
function DetailTab(props:any) {
      const { activeTab, setActiveTab } = props;
      const chooseTabClick=(id:any)=>{
            setActiveTab(id)
      }
      return (
            <ul className="mer-detail__tab">
                  {
                        tabList.map(item => (
                              <li key={item.id}>
                                    <div
                                          style={
                                                activeTab === item.id ?
                                                      { color: 'var(--bg-gray)', borderBottom: 'solid 2px var(--text-op)' }
                                                      :
                                                      {}
                                          }
                                          onClick={() => chooseTabClick(item.id)}
                                          className="mer-detail__tab-item"
                                    >
                                          {item.name}
                                    </div>
                              </li>
                        ))
                  }
            </ul>
      );
}

export default DetailTab;