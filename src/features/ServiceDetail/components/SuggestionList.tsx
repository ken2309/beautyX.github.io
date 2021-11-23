import React from 'react';
import SectionTitle from '../../SectionTitle';
import icon from '../../../constants/icon';
import formatPrice from '../../../utils/formatPrice';
import {Service} from '../../../interface/service'

function SuggestionList(props:any) {
      const {listServices, product } = props;
      const suggestions = listServices.filter((item: any) => item.id !== product.id)
      const arr: Service[] = []
      const handlePushSuggest = (item: any) => {
            // arr.push(item);
      }
      console.log(arr);
      return (
            <div className="suggest-cnt">
                  <SectionTitle title="Gợi ý đi kèm" />
                  <span className="suggest-cnt__title">
                        Hãy chọn thêm những sản phẩm/dịch vụ khác phù hợp với bạn
                  </span>
                  <ul className="suggest-cnt__list">
                        {
                              suggestions.map((item:any) => (
                                    <li key={item.id} style={{ padding: '12px 0px' }}>
                                          <div className="flex-row-sp suggest-cnt__list-tem">
                                                <img
                                                      src={"https://picsum.photos/650/976?random=" + item.id}
                                                      alt=""
                                                      className="suggest-cnt__list-tem__img"
                                                />
                                                <div className="suggest-cnt__list-tem__detail">
                                                      <div className="flex-row-sp suggest-cnt__list-tem__top">
                                                            <span>{item.product_name}</span>
                                                            <span>
                                                                  {
                                                                        item.special_price > 0 ?
                                                                              formatPrice(item.special_price)
                                                                              :
                                                                              formatPrice(item.retail_price)
                                                                  }
                                                            </span>
                                                      </div>
                                                      <div className="flex-row-sp suggest-cnt__list-tem__bot">
                                                            <div className="flex-row">
                                                                  <span>200</span>
                                                                  lượt mua
                                                                  <span>4.5</span>
                                                                  <img src={icon.star} alt="" />
                                                                  69
                                                                  <img src={icon.chatAll} alt="" />
                                                            </div>
                                                            <span
                                                                  style={item.special_price < 0 ? { display: 'none' } : {}}
                                                                  className="suggest__retail-pr"
                                                            >
                                                                  {formatPrice(item.retail_price)}
                                                            </span>
                                                      </div>
                                                </div>
                                                <img 
                                                      onClick={()=>handlePushSuggest(item)}
                                                      className="suggest-cnt__list-tem__btn" 
                                                      src={icon.plus} alt=""
                                                />
                                          </div>
                                    </li>
                              ))
                        }
                  </ul>
            </div>
      );
}

export default SuggestionList;