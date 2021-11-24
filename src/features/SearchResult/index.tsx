import React, { useEffect, useState } from 'react';
import Header from '../Header/index';
import './SearchResult.css'
import {useLocation} from 'react-router-dom';
import Result from './components/Result';
import MapWrapper from './components/MapWrapper';
import {Container} from '@mui/material';
import Footer from '../Footer/index';
import {Organization} from '../../interface/organization';
import orgApi from '../../api/organizationApi';

function SearchResult(props:any) {
      const location = useLocation();
      const [chooseItem, setChooseItem] = useState();
      const params = location.search.slice(8, location.search.length)
      const keySearch = decodeURI(params)
      const [loading, setLoading] = useState(false);
      const [orgs, setOrgs] = useState<Organization[]>([])
      useEffect(() => {
            async function handleGetOrgs() {
                  setLoading(true)
                  try {
                        const res = await orgApi.getOrgByKeyword(keySearch);
                        setOrgs(res.data.context.data);
                        setLoading(false);
                  } catch (err) {
                        console.log(err)
                  }
            }
            handleGetOrgs()
      }, [keySearch])
      return (
            <div style={{
                  backgroundColor: 'var(--bg-gray)'
            }}>
                  <Header />
                  <Container>
                        <div className="result-content">
                              <Result
                                    keySearch={keySearch}
                                    resultList={orgs}
                                    setChooseItem={setChooseItem}
                                    loading={loading}
                              />
                              <MapWrapper
                                    chooseItem={chooseItem}
                                    width='50%'
                              />
                        </div>
                  </Container>
                  <Footer/>
            </div>
      );
}

export default SearchResult;