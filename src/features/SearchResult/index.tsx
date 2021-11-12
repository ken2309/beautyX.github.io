import React from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import {useLocation} from 'react-router-dom'

function SearchResult(props:any) {
      const location = useLocation();
      console.log(location)
      const params = location.search.slice(8, location.search.length)
      console.log(decodeURI(params));
      return (
            <div>
                  <Header/>
                  SearchResult
                  <Footer/>
            </div>
      );
}

export default SearchResult;