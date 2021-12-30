import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/index';
import CardItem from '../CardItem/index';
import Carousel from 'react-elastic-carousel';

const saleList = [
      { id: 1, name: 'Liệu trình ngăn ngừa lão hóa da, dưỡng da', retail_price: 880000, special_price: 780000 },
      { id: 2, name: 'Massage Thái Lan, giảm đau xương khớp', retail_price: 360000, special_price: 300000 },
      { id: 3, name: 'Chăm sóc da mặt bằng đất sét tự nhiên', retail_price: 3900000, special_price: 290000 },
      { id: 4, name: 'Liệu pháp lưng vai', retail_price: 253000, special_price: 230000 },
      { id: 5, name: 'Liệu trình ngăn ngừa lão hóa da, dưỡng da', retail_price: 980000, special_price: 780000 },
      { id: 6, name: 'Liệu trình ngăn ngừa lão hóa da, dưỡng da', retail_price: 1080000, special_price: 780000 },
]
interface SaleList {
      id: number,
      name: string,
      retail_price: number,
      special_price: number
}
const cardStyle = {
      width: '272px'
}
const buttons = [{ id: 1, text: 'Sắp hết hạn' }, { id: 2, text: 'Giảm nhiều' }]

function RecommendList(props: any) {
      const { org, list, is_type } = props;
      const title = `Ưu đãi của "${org?.name}"`;
      const [activeBtn, setActiveBtn] = useState();
      const [productSort, setProductSort] = useState<SaleList[]>([]);
      const [sort, setSort] = useState({
            _sortPrice: saleList
      })
      useEffect(() => {
            async function handleSort() {
                  setProductSort(saleList)
            }
            handleSort();
      }, [sort, productSort])
      const sortPrice = () => {
            const sortAsc = saleList.sort((a, b) => (b.retail_price / b.special_price) - (a.retail_price / a.special_price))
            setSort({
                  ...sort,
                  _sortPrice: sortAsc
            })
      }
      const sortClick = (item: any) => {
            setActiveBtn(item);
            if (item.id === 1) {

            } else if (item.id === 2) {
                  sortPrice()
            }
      }
      return (
            <>
                  <div className="flex-row-sp mer-sale-head">
                        <SectionTitle
                              title={title}
                        />
                        <div className="flex-row mer-sale-head__sort">
                              Sắp xếp theo:
                              {
                                    buttons.map((item, index) => (
                                          <button
                                                style={activeBtn === item ?
                                                      { backgroundColor: 'var(--purple)', color: 'var(--bg-gray)' }
                                                      :
                                                      {}}
                                                onClick={() => sortClick(item)}
                                                key={index}
                                          >{item.text}</button>
                                    ))
                              }
                        </div>
                  </div>
                  <div className="mer-sale-list">
                        <Carousel
                              children={list.map((item:any) =>
                                    <
                                          CardItem key={item.id}
                                          is_type={is_type}
                                          style={cardStyle}
                                          detail={item}
                                          name={item.product_name}
                                          org_name={org.name}
                                          org_id={org.id}
                                          retail_price={item.retail_price}
                                          special_price={item.special_price}
                                    />)
                              }
                              isRTL={false}
                              itemsToShow={4}
                              showArrows={false}
                        />

                  </div>
            </>
      );
}

export default RecommendList;