import React, { useState } from 'react';
import ButtonCus from '../../../components/ButtonCus/index';
import icon from '../../../constants/icon';
import HomeFilterForm from './HomeFilterForm';
import {useHistory} from 'react-router-dom'

function HomeFilter(props:any) {
      const {styleFilter} = props;
      const history = useHistory();
      const [searchText, setSearchText] = useState("");
      const handleOnSearchChange=(e:any)=>{
            setSearchText(e.target.value)
      }
      const handleSearchClick=()=>{
            // history.push(`/Search-result/${searchText}`)
            history.push({
                  pathname: "/Search-result/",
                  search:`?search=${searchText}`
            })
      }
      return (
            <div 
                  style={{
                        position: styleFilter?.position,
                        width: styleFilter?.width,
                        boxShadow: styleFilter?.boxShadow,
                        padding: styleFilter?.padding
                  }}
                  className="home-banner__filter"
            >
                  <div className="home__filter-search-box">
                        <input 
                              onChange={handleOnSearchChange}
                              value={searchText}
                              className="input-search" 
                              type="text"
                              placeholder='Tên doanh nghiệp/Sản phẩm/Dịch vụ'
                        />
                        <ButtonCus
                              onClick={handleSearchClick}
                              imgIcon={icon.search}
                              backColor='var(--purple)'
                              borderRadius='0px 20px 20px 0px'
                        />
                  </div>
                  <HomeFilterForm/>
            </div>
      );
}

export default HomeFilter;