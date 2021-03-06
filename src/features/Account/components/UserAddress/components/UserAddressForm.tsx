import React, { useEffect, useContext, useState } from 'react';
import { IProvince } from '../../../../../interface/provinces';
import { IDistrict, IWard } from '../../../../../interface/district';
import provincesApi from '../../../../../api/provinceApi';
import { AppContext } from '../../../../../context/AppProvider';

interface IDataAdd {
    districts: IDistrict[],
    wards: IWard[]
}
const $ = document.querySelector.bind(document);
const onToggleProvince = () => {
    $('.us_address-cnt .from-label__list-province')?.classList.toggle('lis-province-ac')
    $('.us_address-cnt .from-label__list-district')?.classList.remove('lis-province-ac')
    $('.us_address-cnt .from-label__list-ward')?.classList.remove('lis-ward-ac')
}
const onToggleDistrict = () => {
    $('.us_address-cnt .from-label__list-district')?.classList.toggle('lis-province-ac')
    $('.us_address-cnt .from-label__list-province')?.classList.remove('lis-province-ac')
    $('.us_address-cnt .from-label__list-ward')?.classList.remove('lis-ward-ac')
}
const onToggleWard = () => {
    $('.us_address-cnt .from-label__list-ward')?.classList.toggle('lis-ward-ac')
    $('.us_address-cnt .from-label__list-province')?.classList.remove('lis-province-ac')
    $('.us_address-cnt .from-label__list-district')?.classList.remove('lis-province-ac')
}
function UserAddressForm(props: any) {
    const { provinces } = useContext(AppContext);
    const { address, setAddress, handleSubmitForm } = props;
    const [dataAdd, setDataAdd] = useState<IDataAdd>({
        districts: [],
        wards: []
    })

    //
    async function getListDistrict(province_code: number | null, district_code: number | null) {
        try {
            const resDistricts = await provincesApi.getDistricts(province_code);
            const resWards = await provincesApi.getWards(district_code);
            setDataAdd({
                ...dataAdd,
                districts: resDistricts.data.context.data,
                wards: resWards?.data.context.data
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (address.province.code) {
            getListDistrict(address.province.code, address.district.code)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address.province.code, address.district.code])
    //
    const toggleDistrict = () => {
        if (address.province.code) {
            onToggleDistrict()
        }
    }
    const onChooseProvince = (province: IProvince) => {
        if (province.province_code !== address.province.code) {
            setAddress({
                ...address,
                district: { code: null, name: null },
                ward: { code: null, name: null },
                province: { code: province.province_code, name: province.name }
            })
        } else {
            setAddress({
                ...address,
                province: {
                    code: province.province_code,
                    name: province.name
                }
            })
        }
    }
    const onChooseDistrict = (district: IDistrict) => {
        if (district.district_code !== address.district.code) {
            setAddress({
                ...address,
                district: {
                    code: district.district_code,
                    name: district.name
                },
                ward: { code: null, name: null },
            })
        } else if (address.province.code) {
            setAddress({
                ...address,
                district: {
                    code: district.district_code,
                    name: district.name
                }
            })
        }
    }
    const onChooseWard = (ward: IWard) => {
        if (address.district.code) {
            setAddress({
                ...address,
                ward: {
                    code: ward.ward_code,
                    name: ward.name
                }
            })
        }
    }

    const onSubmitForm = () => {
        if (handleSubmitForm) {
            handleSubmitForm()
        }
    }
    return (
        <div
            className='us_address-cnt'
        >
            <span className="title">
                Th??m m???i ?????a ch???
            </span>
            <div className="form">
                <div
                    onClick={onToggleProvince}
                    className="from-label"
                >
                    <span className="text-bold from-label_title">
                        T???nh / Th??nh ph???
                    </span>
                    <div className="from-label_ip">
                        {
                            address.province.name ?
                                <span
                                    style={{ color: 'var(--black)', fontWeight: 'bold' }}
                                >
                                    {address.province.name}
                                </span>
                                :
                                <span>
                                    Vui l??ng ch???n t???nh/th??nh ph???
                                </span>
                        }
                    </div>
                    <div className="from-label__list-province">
                        <ul>
                            {
                                provinces.map((item: IProvince, index: number) => (
                                    <li
                                        className='province-item'
                                        style={item.province_code === address.province.code ?
                                            { color: 'var(--purple)' } : { color: 'var(--black)' }}
                                        onClick={() => onChooseProvince(item)}
                                        key={index}
                                    >
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div
                    onClick={toggleDistrict}
                    className="from-label"
                >
                    <span className="text-bold from-label_title">
                        Qu???n / Huy???n
                    </span>
                    <div className="from-label_ip">
                        {
                            address.district.name ?
                                <span
                                    style={{ color: 'var(--black)', fontWeight: 'bold' }}
                                >
                                    {address.district.name}
                                </span>
                                :
                                <span>
                                    Vui l??ng ch???n qu???n / huy???n
                                </span>
                        }
                    </div>
                    <div className="from-label__list-district">
                        <ul>
                            {
                                dataAdd.districts.map((item: IDistrict, index: number) => (
                                    <li
                                        className='province-item'
                                        style={item.province_code === address.province.code ?
                                            { color: 'var(--purple)' } : { color: 'var(--black)' }}
                                        onClick={() => onChooseDistrict(item)}
                                        key={index}
                                    >
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div
                    onClick={onToggleWard}
                    className="from-label"
                >
                    <span className="text-bold from-label_title">
                        X?? / Ph?????ng
                    </span>
                    <div className="from-label_ip">
                        {
                            address.ward.name ?
                                <span
                                    style={{ color: 'var(--black)', fontWeight: 'bold' }}
                                >
                                    {address.ward.name}
                                </span>
                                :
                                <span>
                                    Vui l??ng ch???n X?? / Ph?????ng
                                </span>
                        }
                    </div>
                    <div className="from-label__list-ward">
                        <ul>
                            {
                                dataAdd.wards?.map((item: IWard, index: number) => (
                                    <li
                                        className='province-item'
                                        style={item.province_code === address.province.code ?
                                            { color: 'var(--purple)' } : { color: 'var(--black)' }}
                                        onClick={() => onChooseWard(item)}
                                        key={index}
                                    >
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="from-label">
                    <span className="text-bold from-label_title">
                        ?????a ch??? nh???n h??ng
                    </span>
                    <div className="from-label_ip">
                        <input
                            onChange={(e) => setAddress({ ...address, short_address: e.target.value })}
                            type="text"
                            placeholder='Vui l??ng nh???p ?????a ch??? c???a b???n'
                        />
                    </div>
                </div>
                <div className="form-btn">
                    <button onClick={onSubmitForm}>
                        Th??m m???i ?????a ch???
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserAddressForm;