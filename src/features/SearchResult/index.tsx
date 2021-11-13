import React, { useEffect, useState } from 'react';
import Header from '../Header/index';
//import Footer from '../Footer/index';
import './SearchResult.css'
import {useLocation} from 'react-router-dom';
import Result from './components/Result';
import MapWrapper from './components/MapWrapper';
import {Container} from '@mui/material';
import Footer from '../Footer/index'

const resultList = [
      {
            id:1,
            name:'Mommy Spa & Salon',
            address:'16 Phạm Đình Toái, Phường 6, Quận 3, Thành phố Hồ Chí Minh',
            lat:10.7759115,
            long:106.6836594
      },
      {
            id:2,
            name:'Seoul Spa SaiGon',
            address:'611/15 đường Điện Biên Phủ, phường 1, quận 3, thành phố Hồ Chí Minh',
            lat:10.7691247,
            long:106.6745348
      },
      {
            id:3,
            name:'Bay Spa & Massage',
            address:'40B Phạm Ngọc Thạch, phường 6, quận 3, thành phố Hồ Chí Minh',
            lat:10.7853707,
            long:106.6915498
      },
      {
            id:4,
            name:'Mommy',
            address:'16 Phạm Đình Toái, Phường 6, Quận 3, Thành phố Hồ Chí Minh',
            lat:10.7759115,
            long:106.6836594
      },
      {
            id:5,
            name:'Spa SaiGon',
            address:'611/15 đường Điện Biên Phủ, phường 1, quận 3, thành phố Hồ Chí Minh',
            lat:10.7691247,
            long:106.6745348
      },
      {
            id:6,
            name:'Massage',
            address:'40B Phạm Ngọc Thạch, phường 6, quận 3, thành phố Hồ Chí Minh',
            lat:10.7853707,
            long:106.6915498
      },
      {
            id:7,
            name:'Spa SaiGon',
            address:'611/15 đường Điện Biên Phủ, phường 1, quận 3, thành phố Hồ Chí Minh',
            lat:10.7691247,
            long:106.6745348
      },
      {
            id:8,
            name:'Massage',
            address:'40B Phạm Ngọc Thạch, phường 6, quận 3, thành phố Hồ Chí Minh',
            lat:10.7853707,
            long:106.6915498
      },
]
interface ResultList {
      id: number,
      name: string,
      address: string,
      lat: number,
      long: number
}
function SearchResult(props:any) {
      const location = useLocation();
      console.log(location);
      const [chooseItem, setChooseItem] = useState();
      const params = location.search.slice(8, location.search.length)
      const keySearch = decodeURI(params)
      // pagination demo ---
      const [current, setCurrent] = useState(1)
      const [listLength, setListLength] = useState(0);
      const limit = 3;
      const [pageCurrentList, setPageCurrentList] = useState<ResultList[]>([])
      useEffect(()=>{
            async function handlePagination(){
                  if(resultList){
                        const indexOfLast = current * limit;
                        const indexOfFirst = indexOfLast - limit;
                        const currentPage = resultList.slice(indexOfFirst, indexOfLast);
                        //console.log(currentPage)
                        setPageCurrentList(currentPage);
                        setListLength(resultList.length)
                  }
            }
            handlePagination()
      },[current])
      //---
      return (
            <div style={{
                  backgroundColor: 'var(--bg-gray)'
            }}>
                  <Header />
                  <Container>
                        <div className="result-content">
                              <Result
                                    keySearch={keySearch}
                                    resultList={pageCurrentList}
                                    setChooseItem={setChooseItem}
                                    setCurrent={setCurrent}
                                    current={current}
                                    listLength={listLength}
                                    list={resultList}
                              />
                              <MapWrapper
                                    chooseItem={chooseItem}
                              />
                        </div>
                  </Container>
                  <Footer/>
            </div>
      );
}

export default SearchResult;