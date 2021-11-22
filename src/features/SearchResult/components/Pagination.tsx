import React from 'react';
import icon from '../../../constants/icon';

function Pagination(props:any) {
      const {current, setCurrent, listLength, list, resultList} = props;
      const prevClick = () => {
            if (current > 1) {
                  setCurrent(current - 1);
            }
      }
      const firstItem = resultList[0];
      const lastItem = resultList[resultList.length - 1]
      const perNumber = [];
      for (let i = 1; i <= Math.ceil(listLength / 3); i++) {
            perNumber.push(i)
      }
      const nextClick = () => {
            if (current < perNumber.length) {
                  setCurrent(current + 1);
            }
      }
      const handleChangPageClick=(number:any)=>{
            setCurrent(number)
      }
      return (
            <div className="result-pagination">
                  <div className="result-pagination__state">
                        <img onClick={prevClick} src={icon.pPrev} alt="" />
                        <ul>
                              {
                                    perNumber.map((item) => (
                                          <li
                                                style={
                                                      current === item ?
                                                            { backgroundColor: 'var(--purple)', color: 'var(--bg-gray)' }
                                                            :
                                                            {}
                                                }
                                                onClick={() => handleChangPageClick(item)}
                                                key={item}>
                                                {item}
                                          </li>
                                    ))
                              }
                        </ul>
                        <img onClick={nextClick} src={icon.pNext} alt="" />
                  </div>
                  <div className="result-pagination__current">
                        <span>
                              {list.indexOf(firstItem) + 1} - {list.indexOf(lastItem) + 1}
                        </span>
                        trong tổng số
                        <span>
                              {listLength}
                        </span>
                        kết quả
                  </div>
            </div>
      );
}

export default Pagination;