import React, { useEffect, useState } from 'react';
import comboApi from '../../api/comboApi';
import {Container} from '@mui/material';
import ComboItem from './components/ComboItem';
import {Pagination} from '@mui/material'
import'./ComboByMerchant.css'

const tab_id = 4
function ComboByMerchant(props: any) {
      const { org, activeTab } = props;
      const [combos, setCombos] = useState([])
      const [page, setPage] = useState(1)
      const [pageTotal, setPageTotal] = useState(0);
      useEffect(() => {
            async function handleGetCombos() {
                  try {
                        const res = await comboApi.getByOrg_id({
                              org_id: org.id, page: page
                        });
                        setCombos(res.data.context.data);
                        setPageTotal(res.data.context.last_page);
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetCombos();
      }, [org.id, page])
      const pageChange=(e:any, value:any)=>{
            setPage(value);
      }
      return (
            <div
                  style={tab_id === activeTab ? { display: 'block' } : { display: 'none' }}
            >
                  <Container>
                        <div className="flex-column cmb-cnt">
                              <ul className="cmb-list">
                                    {
                                          combos.map((item: any) => (
                                                <ComboItem
                                                      key={item.id}
                                                      detail={item}
                                                      org={org}
                                                />
                                          ))
                                    }
                              </ul>
                              <Pagination
                                    color='secondary'
                                    shape="rounded"
                                    count={pageTotal}
                                    onChange={pageChange}
                              />
                        </div>
                  </Container>
            </div>
      );
}

export default ComboByMerchant;