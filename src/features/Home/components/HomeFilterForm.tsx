import React, { useContext, useState } from 'react';
import icon from '../../../constants/icon';
import ButtonCus from '../../../components/ButtonCus/index';
import { AppContext } from '../../../context/AppProvider'
import { useHistory } from 'react-router-dom'

const locals = [
      { id: 1, province_code: 11, name: 'Vị trí 1' },
      { id: 2, province_code: 9, name: 'Vị trí 5' },
      { id: 3, province_code: 8, name: 'Vị trí 4' },
]
interface ChooseCate {
      id:number,
      name: string
}
interface ChooseLocal {
      id: number,
      province_code: number,
      name:string
}
function HomeFilterForm(props: any) {
      const history = useHistory();
      const { t, tags } = useContext(AppContext);
      const [chooseCate, setChooseCate] = useState<ChooseCate>({ id: 0, name: '' });
      const [chooseLocal, setChooseLocal] = useState<ChooseLocal>({ id: 0, province_code: 0, name: '' })
      const [openCate, setOpenCate] = useState(false)
      const [openLocal, setOpenLocal] = useState(false)
      const openCateClick = () => {
            if (openCate === true) {
                  setOpenCate(false);
            } else {
                  setOpenCate(true)
                  setOpenLocal(false)
            }
      }
      const openLocalClick=()=>{
            if(openLocal === true){
                  setOpenLocal(false)
            }else{
                  setOpenLocal(true)
                  setOpenCate(false)
            }
      }
      const handleSetChooseCate=(cate:any)=>{
            setChooseCate(cate)
            setOpenCate(false);
      }
      const handleChooseLocal=(local: any)=>{
            setChooseLocal(local)
      }
      const handleSubmitFilter=()=>{
            const filterValues={
                  category: chooseCate.name,
                  province_code: chooseLocal.province_code
            }
            history.push({
                  pathname:'/search-result/',
                  state:filterValues
            })
      }
      return (
            <div className='filter-form'>
                  <ul className="filter-form__box">
                        <li 
                              onClick={openCateClick}
                              className="filter-form__li"
                        >
                              <div
                                    className="filter-form__item"
                              >
                                    <div className="filter-form__item-left">
                                          <img src={icon.dashboard} alt="" />
                                          <span>
                                                {chooseCate.name.length === 0 ? t('Home.Filter_category') : chooseCate.name}
                                          </span>
                                    </div>
                                    <img src={icon.down_2} alt="" />
                              </div>
                              <div 
                                    style={openCate === true ? { display: 'block' } : { display: 'none' }}
                                    className="drop-category"
                              >
                                    <ul>
                                          {
                                                tags && tags.map((item: any) => (
                                                      <li
                                                            style={
                                                                  item === chooseCate ?
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
                                                {chooseLocal.name.length === 0 ? t('Home.Filter_location') : chooseLocal.name}
                                          </span>
                                    </div>
                                    <img src={icon.down_2} alt="" />
                              </div>
                              <div 
                                    style={openLocal === true ? { display: 'block' } : { display: 'none' }}
                                    className="drop-category"
                              >
                                    <ul>
                                          {
                                                locals.map(item =>(
                                                      <li
                                                            style={
                                                                  item === chooseLocal ?
                                                                        { color: 'var(--bg-color)', backgroundColor: 'var(--purple)' }
                                                                        :
                                                                        {}
                                                            }
                                                            onClick={() => handleChooseLocal(item)}
                                                            key={item.id}
                                                      >
                                                            {item.name}
                                                      </li>
                                                ))
                                          }
                                    </ul>
                              </div>
                        </li>
                        <li className="filter-form__li">
                              <div className="filter-form__item">
                                    <div className="filter-form__item-left">
                                          <img src={icon.Ticket} alt="" />
                                          <span>{t('Home.Filter_price')}</span>
                                    </div>
                                    <img src={icon.down_2} alt="" />
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