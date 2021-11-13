import React from 'react';
import {useLocation} from 'react-router-dom';
import Header from '../Header/index';
import './MerchantDetail.css';
import DetailHead from './components/DetailHead'

function MerchantDetail(props:any) {
      const location = useLocation();
      //const mer_id = location.search.slice(4, location.search.length);
      console.log(location)
      const merDetail = location.state
      console.log(merDetail)
      return (
            <div>
                  <Header/>
                  <DetailHead
                        merDetail={merDetail}
                  />
            </div>
      );
}

export default MerchantDetail;