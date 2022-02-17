import React, { useContext, useState } from 'react';
import icon from '../../../constants/icon';
import ButtonCus from '../../../components/ButtonCus/index';
import { AppContext } from '../../../context/AppProvider'
import { useHistory } from 'react-router-dom';
import { IProvince } from '../../../interface/provinces';
import { ITag } from '../../../interface/tags'

interface IRangePrice {
      id: number,
      min: number,
      max: number,
      title: string,
}
function HomeFilterForm(props: any) {
      const { hiddenFilter } = props;
      const rangePrices = [
            { id: 1, min: 0, max: 1000000, title: 'Dưới 1 triệu' },
            { id: 2, min: 1000000, max: 4000000, title: 'Từ 1 - 4 triệu' },
            { id: 3, min: 4000000, max: 8000000, title: 'Từ 4 - 8 triệu' },
            { id: 4, min: 8000000, max: 12000000, title: 'Từ 8 - 12 triệu' },
            { id: 5, min: 12000000, max: 20000000, title: 'Từ 12 - 20 triệu' },
            { id: 6, min: 20000000, max: 500000000, title: 'Trên 20 triệu' },
      ]
      const history = useHistory();
      const { t, tags, provinces } = useContext(AppContext);
      const [chooseCate, setChooseCate] = useState<ITag[]>([]);
      const [chooseLocal, setChooseLocal] = useState<IProvince>()
      const [choosePrice, setChoosePrice] = useState<IRangePrice>()
      const [openItem, setOpenItem] = useState({
            cate: false,
            province: false,
            prices: false
      })

      const openCateClick = () => {
            if (openItem.cate === true) {
                  setOpenItem({ ...openItem, cate: false })
            } else {
                  setOpenItem({
                        cate: true,
                        province: false,
                        prices: false
                  })
            }
      }
      const openLocalClick = () => {
            if (openItem.province === true) {
                  setOpenItem({ ...openItem, province: false })
            } else {
                  setOpenItem({
                        cate: false,
                        province: true,
                        prices: false
                  })
            }
      }
      const openRangePriceClick = () => {
            if (openItem.prices === true) {
                  setOpenItem({ ...openItem, prices: false })
            } else {
                  setOpenItem({
                        cate: false,
                        province: false,
                        prices: true
                  })
            }
      }
      const handleSetChooseCate = (cate: ITag) => {
            const isChoose = chooseCate.includes(cate);
            if (isChoose) {
                  setChooseCate(chooseCate.filter((item: ITag) => item !== cate))
            } else {
                  setChooseCate([...chooseCate, cate])
            }
      }
      const handleChooseLocal = (local: IProvince) => {
            setChooseLocal(local)
      }
      const handleChoosePrice = (price: IRangePrice) => {
            setChoosePrice(price)
      }
      const handleSubmitFilter = () => {
            if (hiddenFilter) {
                  hiddenFilter()
            }
            const tagsName = chooseCate.map((item: ITag) => item.name)
            const filterValues = {
                  tags: tagsName.length === 0 ? '' : tagsName.join('|'),
                  province_code: chooseLocal ? chooseLocal.province_code : '',
                  minPrice: choosePrice ? choosePrice.min : '',
                  maxPrice: choosePrice ? choosePrice.max : ''
            }
            // console.log(filterValues)
            history.push({
                  pathname: '/search-result/',
                  state: filterValues
            })
      }
      return (
            <div className='filter-form'>
                  <ul className="filter-form__box">
                        <li
                              className="filter-form__li"
                        >
                              <div
                                    className="filter-form__item"
                                    onClick={openCateClick}
                              >
                                    <div className="filter-form__item-left">
                                          <img src={icon.dashboard} alt="" />
                                          <div
                                                className="list__tag"
                                          >
                                                {chooseCate.length === 0 ? t('Home.Filter_category')
                                                      :
                                                      chooseCate.map((item: ITag, index: number) => (
                                                            <span key={index}>{item.name},</span>
                                                      ))
                                                }
                                          </div>
                                    </div>
                                    <img src={icon.down_2} alt="" />
                              </div>
                              <div
                                    style={
                                          openItem.cate === true ?
                                                { visibility: 'visible', opacity: 1, marginTop: '10px' }
                                                :
                                                { visibility: 'hidden', opacity: 0, marginTop: '30px' }
                                    }
                                    className="drop-category"
                              >
                                    <ul>
                                          {
                                                tags && tags.map((item: ITag) => (
                                                      <li
                                                            style={
                                                                  chooseCate.includes(item) ?
                                                                        { color: 'var(--bg-color)', backgroundColor: 'var(--purple)' }
                                                                        :
                                                                        {}
                                                            }
                                                            onClick={() => handleSetChooseCate(item)}
                                                            key={item.id}
                                                      >
                                                            {item.name}
                                                      </li>
                                                ))
                                          }
                                    </ul>
                              </div>
                        </li>
                        <li
                              onClick={openLocalClick}
                              className="filter-form__li"
                        >
                              <div className="filter-form__item">
                                    <div className="filter-form__item-left">
                                          <img src={icon.location} alt="" />
                                          <span>
                                                {chooseLocal ? chooseLocal?.name : t('Home.Filter_location')}
                                          </span>
                                    </div>
                                    <img src={icon.down_2} alt="" />
                              </div>
                              <div
                                    style={
                                          openItem.province === true ?
                                                { visibility: 'visible', opacity: 1, marginTop: '10px' }
                                                :
                                                { visibility: 'hidden', opacity: 0, marginTop: '30px' }
                                    }
                                    className="drop-category"
                              >
                                    <ul>
                                          {
                                                provinces.map((item: IProvince, index: number) => (
                                                      <li
                                                            style={
                                                                  item === chooseLocal ?
                                                                        { color: 'var(--bg-color)', backgroundColor: 'var(--purple)' }
                                                                        :
                                                                        {}
                                                            }
                                                            onClick={() => handleChooseLocal(item)}
                                                            key={index}
                                                      >
                                                            {item.name}
                                                      </li>
                                                ))
                                          }
                                    </ul>
                              </div>
                        </li>
                        <li
                              onClick={openRangePriceClick}
                              className="filter-form__li"
                        >
                              <div className="filter-form__item">
                                    <div className="filter-form__item-left">
                                          <img src={icon.location} alt="" />
                                          <span>
                                                {choosePrice ? choosePrice.title : t('Home.Filter_price')}
                                          </span>
                                    </div>
                                    <img src={icon.down_2} alt="" />
                              </div>
                              <div
                                    style={
                                          openItem.prices === true ?
                                                { visibility: 'visible', opacity: 1, marginTop: '10px' }
                                                :
                                                { visibility: 'hidden', opacity: 0, marginTop: '30px' }
                                    }
                                    className="drop-category"
                              >
                                    <ul>
                                          {
                                                rangePrices.map((item: IRangePrice, index: number) => (
                                                      <li
                                                            style={
                                                                  item === choosePrice ?
                                                                        { color: 'var(--bg-color)', backgroundColor: 'var(--purple)' }
                                                                        :
                                                                        {}
                                                            }
                                                            onClick={() => handleChoosePrice(item)}
                                                            key={index}
                                                      >
                                                            {item.title}
                                                      </li>
                                                ))
                                          }
                                    </ul>
                              </div>
                        </li>
                  </ul>
                  <ButtonCus
                        text={t('Home.Filter_search_title')}
                        fontSize='20px'
                        lineHeight='24px'
                        color='var(--bg-color)'
                        backColor='var(--purple)'
                        borderRadius='40px'
                        onClick={handleSubmitFilter}
                  />
            </div>
      );
}

export default HomeFilterForm;