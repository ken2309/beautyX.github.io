import React, { useContext } from 'react';
import './filter-orgs.css';
import { Checkbox } from '@mui/material'
import { AppContext } from '../../context/AppProvider';
import scrollTop from '../../utils/scrollTop';

const tags = ['Nail', 'Phòng khám', 'Salon', 'Spa', 'Thẩm mỹ viện']

function FilterOrgs(props: any) {
    const {
        orgFilter,
        setOrgFilter,
        setData,
        handleOrgsByKeyword,

        hideTags, hideProvinces
    } = props;
    const { provinces } = useContext(AppContext);
    const onChooseTags = (tag_item: any) => {
        if (setData) {
            setData({
                orgs: [],
                page: 1,
                lastPage: 1
            })
            const isChoose = orgFilter.tags.includes(tag_item)
            if (isChoose) {
                setOrgFilter({
                    ...orgFilter,
                    tags: orgFilter.tags.filter((i: any) => i !== tag_item)
                })
            } else {
                setOrgFilter({
                    ...orgFilter,
                    tags: [...orgFilter.tags, tag_item]
                })
            }
        }
    }
    const onChooseProvince = (provinceCode: any) => {
        if (setData) {
            setData({
                orgs: [],
                page: 1,
                lastPage: 1
            })
            setOrgFilter({
                ...orgFilter,
                province_code: provinceCode
            })
            scrollTop()
        }
    }
    const onChangeMinPrice = (e: any) => {
        setOrgFilter({
            ...orgFilter,
            min_price: parseInt(e.target.value)
        })
    }
    const onChangeMaxPrice = (e: any) => {
        setOrgFilter({
            ...orgFilter,
            max_price: parseInt(e.target.value)
        })
    }
    const onApplyFilter = () => {
        if (orgFilter.min_price > -1 && orgFilter.max_price >= 0 && orgFilter.min_price <= orgFilter.max_price) {
            if (handleOrgsByKeyword) {
                setData({
                    orgs: [],
                    page: 1,
                    lastPage: 1
                })
                handleOrgsByKeyword()
            }
        }
    }
    // console.log(orgFilter)
    return (
        <div className="se-re-cnt__left-sort">
            <span className="se-re-cnt__left-sort__title">
                Bộ lọc tìm kiếm
            </span>
            <div className="re-sort-org">
                {
                    hideTags ?
                        <></>
                        :
                        <div className="re-sort-org__item">
                            <span className="title">
                                Danh mục
                            </span>
                            <div className="list">
                                <ul className="list-tags">
                                    {
                                        tags.map((item: string, index: number) => (
                                            <li
                                                key={index}
                                                onClick={() => onChooseTags(item)}
                                            >
                                                <div>
                                                    <Checkbox
                                                        checked={orgFilter.tags.includes(item) === true ? true : false}
                                                        sx={{
                                                            color: "#7161BA",
                                                            "&.Mui-checked": {
                                                                color: "#7161BA",
                                                            },
                                                            marginLeft: '-10px'
                                                        }} />
                                                </div>
                                                {item}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                }
                {
                    hideProvinces ?
                        <></>
                        :
                        <div className="re-sort-org__item">
                            <span className="title">
                                Khu vực
                            </span>
                            <div className="list list-provinces">
                                <ul className="list-tags">
                                    {
                                        provinces.map((item: any, index: number) => (
                                            <li
                                                onClick={() => onChooseProvince(item.province_code)}
                                                key={index}
                                            >
                                                <div className="province-item">
                                                    {
                                                        orgFilter.province_code === item.province_code ?
                                                            <div></div>
                                                            :
                                                            <></>
                                                    }
                                                </div>
                                                {item.name}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                }
                <div className="re-sort-org__item">
                    <span className="title">
                        Khoảng giá
                    </span>
                    <div className="flex-row-sp list range-price">
                        <input
                            onChange={onChangeMinPrice}
                            type="number"
                            placeholder='đ Từ...'
                        />
                        <input
                            onChange={onChangeMaxPrice}
                            type="number"
                            placeholder='đ Đến...'
                        />
                    </div>
                    {
                        orgFilter.min_price <= -1 || orgFilter.max_price < 0 || orgFilter.min_price > orgFilter.max_price ?
                            <span className='price-err'>Khoảng giá không hợp lệ</span>
                            :
                            <></>
                    }
                </div>
                <button
                    onClick={onApplyFilter}
                    className="apply-btn"
                >
                    Áp dụng khoảng giá
                </button>
            </div>
        </div>
    );
}

export default FilterOrgs;