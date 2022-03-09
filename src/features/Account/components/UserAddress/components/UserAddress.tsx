import React, {useState } from 'react';
import '../user_address.css';
//import SectionTitle from '../../../SectionTitle';
import userAddressApi from '../../../../../api/userAddressApi';
import UserAddressForm from './UserAddressForm';
import {useHistory} from 'react-router-dom'

interface IAddress {
    province: {
        code: null | number,
        name: null | string
    },
    district: {
        code: null | number,
        name: null | string
    },
    ward: {
        code: null | number,
        name: null | string,
    },
    short_address: string
}

function UserAddress(props: any) {
    const history = useHistory();
    const [address, setAddress] = useState<IAddress>({
        province: { code: null, name: null },
        district: { code: null, name: null },
        ward: { code: null, name: null },
        short_address: ''
    })

    async function handlePostUserAddress(values: any) {
        try {
            await userAddressApi.postAddress(values)
            history.goBack()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitForm = () => {
        if (
            address.district.code &&
            address.province.code &&
            address.ward.code &&
            address.short_address.length > 0
        ) {
            const values = {
                address: `${address.short_address},${address.ward.name},${address.district.name},${address.province.name}`
            }
            handlePostUserAddress(values)
        }
    }

    return (
        <UserAddressForm
            address={address}
            setAddress={setAddress}
            handleSubmitForm={handleSubmitForm}
        />
    );
}

export default UserAddress;