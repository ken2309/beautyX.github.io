import React from 'react';
import '../merchantDetail.css';
import { Container } from '@mui/material'

function DetailTab(props: any) {
      const { t, activeTab, setActiveTab } = props;
      const tabList = [
            { id: 1, name: t('Mer_de.about') },
            { id: 2, name: t('Mer_de.services') },
            { id: 3, name: t('Mer_de.products') },
            { id: 4, name: 'Combo' },
            { id: 5, name: t('Mer_de.sale') }
      ]
      const chooseTabClick = (id: any) => {
            setActiveTab(id)
      }
      return (
            <div className="mer-detail__cnt">
                  <Container>
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
                  </Container>
            </div>
      );
}

export default DetailTab;