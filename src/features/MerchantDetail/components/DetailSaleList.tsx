import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle';
import CardItem from '../../CardItem/index';
import Carousel from 'react-elastic-carousel';

const saleList = [
      { id: 1, name: 'Liệu trình ngăn ngừa lão hóa da, dưỡng da', oldPrice: 880000, salePrice: 780000 },
      { id: 2, name: 'Massage Thái Lan, giảm đau xương khớp', oldPrice: 360000, salePrice: 300000 },
      { id: 3, name: 'Chăm sóc da mặt bằng đất sét tự nhiên', oldPrice: 3900000, salePrice: 290000 },
      { id: 4, name: 'Liệu pháp lưng vai', oldPrice: 253000, salePrice: 230000 },
      { id: 5, name: 'Liệu trình ngăn ngừa lão hóa da, dưỡng da', oldPrice: 980000, salePrice: 780000 },
      { id: 6, name: 'Liệu trình ngăn ngừa lão hóa da, dưỡng da', oldPrice: 1080000, salePrice: 780000 },
]
interface SaleList {
      id: number,
      name: string,
      oldPrice: number,
      salePrice: number
}
const cardStyle={
      width:'272px'
}
const buttons = [{ id: 1, text: 'Sắp hết hạn' }, { id: 2, text: 'Giảm nhiều' }]
function DetailSaleList(props:any) {
      const { merDetail } = props;
      const title = `Ưu đãi của "${merDetail.name}"`;
      const [activeBtn, setActiveBtn] = useState();
      const [productSort, setProductSort] = useState<SaleList[]>([]);
      const [sort, setSort] = useState({
            _sortPrice: saleList
      })
      useEffect(()=>{
            async function handleSort(){
                  setProductSort(saleList)
            }
            handleSort();
      },[sort, productSort])
      const sortPrice=()=>{
            const sortAsc = saleList.sort((a,b)=> (b.oldPrice / b.salePrice) - (a.oldPrice / a.salePrice))
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
                              children={productSort.map(item => <CardItem key={item.id} style={cardStyle} detail={item} />)}
                              isRTL={false}
                              itemsToShow={4}
                              showArrows={false}
                        />
                         
                  </div>
            </>
      );
}

export default DetailSaleList;