import React, { useEffect, useState } from 'react';
import comboApi from '../../api/comboApi';
import {Container} from '@mui/material';
import ComboItem from './components/ComboItem';
import {Pagination} from '@mui/material';
import GridLoading2 from '../Loading/GridLoading2';
import scrollTop_2 from '../../utils/scrollTop_2';
import'./comboByMerchant.css'

const tab_id = 4
function ComboByMerchant(props: any) {
      const { org, org_id, activeTab } = props;
      const [combos, setCombos] = useState([])
      const [page, setPage] = useState(1)
      const [pageTotal, setPageTotal] = useState(0);
      const [loading, setLoading] = useState(false)
      useEffect(() => {
            async function handleGetCombos() {
                  setLoading(true)
                  try {
                        const res = await comboApi.getByOrg_id({
                              org_id: org_id, page: page
                        });
                        setCombos(res.data.context.data);
                        setPageTotal(res.data.context.last_page);
                        setLoading(false)
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetCombos();
      }, [ org_id, page])
      const pageChange = (e: any, value: any) => {
            setPage(value);
            scrollTop_2(500)
      }
      return (
            <div
                  style={tab_id === activeTab ? { display: 'block' } : { display: 'none' }}
            >
                  <Container>
                        <div className="flex-column cmb-cnt">
                              <ul className="cmb-list">
                                    {
                                          loading === true ?
                                                <GridLoading2 />
                                                :
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