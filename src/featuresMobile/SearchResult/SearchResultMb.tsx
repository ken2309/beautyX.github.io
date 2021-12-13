import React, { useState } from 'react';
import icon from '../../constants/icon';
import SearchFilter from './SearchFilter';
import './SearchResultMb.css'

function SearchResultMb(props:any) {
      const {setCurPage} = props;
      const [openFilter, setOpenFilter] = useState(false);
      return (
            <>
                  <div className="re-mb-search">
                        <div className="re-mb-search__cnt">
                              <div 
                                    onClick={()=>setOpenFilter(true)}
                                    className="flex-row re-mb-search__cnt-inp"
                              >
                                    <img src={icon.searchPurple} alt="" />
                                    <span className="re-mb-search__cnt-inp__text">
                                          Nhập tên hoặc vị trí cơ sở làm đẹp
                                    </span>
                              </div>
                              <div className="re-mb-search__cnt-pin">

                              </div>
                        </div>
                  </div>
                  <SearchFilter
                        setCurPage={setCurPage}
                        openFilter={openFilter}
                        setOpenFilter={setOpenFilter}
                  />
            </>
      );
}

export default SearchResultMb;