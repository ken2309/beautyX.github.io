import React,{useContext} from 'react';
import { Container } from '@mui/material';
import {AppContext} from '../../context/AppProvider'
import './detailTabMb.css'

interface IProps{
      activeTab:number,
      setActiveTab:(activeTab:number) => void
}

function DetailTabMb(props:IProps) {
      const {t} = useContext(AppContext)
      const { activeTab, setActiveTab } = props;
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
            <div className="mb-mer-detail__cnt">
                  <Container>
                        <ul className="mb-mer-detail__tab">
                              {
                                    tabList.map(item => (
                                          <li key={item.id}>
                                                <div
                                                      style={
                                                            activeTab === item.id ?
                                                                  { color: 'var(--purple)', borderBottom: 'solid 2px var(--purple)' }
                                                                  :
                                                                  {}
                                                      }
                                                      onClick={() => chooseTabClick(item.id)}
                                                      className="mb-mer-detail__tab-item"
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

export default DetailTabMb;