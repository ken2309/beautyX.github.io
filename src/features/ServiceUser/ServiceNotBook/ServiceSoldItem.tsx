import { Checkbox } from '@mui/material';
import React, { useContext } from 'react';
import icon from '../../../constants/icon';
import { AppContext } from '../../../context/AppProvider';
import { IServiceSold, IUser_Service, IServiceUser } from '../../../interface/servicesUser';
import ServiceItem from './ServiceItem';
import { useDispatch } from 'react-redux';
import { addService } from '../../../redux/servicesBookSlice';
import {IOrganization} from '../../../interface/organization'

interface IProps {
    service_sold: IServiceSold,
    card_items: IServiceUser,
    org: IOrganization | undefined
}

function ServiceSoldItem(props: IProps) {
    const dispatch = useDispatch();
    const { service_sold, card_items, org } = props;
    const order_id = card_items.items[0]?.order_id;
    const handleServiceBook = (service: any) => {
        const action = addService({
            ...service,
            ser_book_id: parseInt(`${order_id}${service.id}`),
            org_id: card_items?.organization_id,
            order_id: order_id,
            org: org
        });
        dispatch(action)
    }
    return (
        <>
            {
                service_sold?.services?.map((service: IUser_Service, index: number) => (
                    <ServiceItem
                        key={index}
                        service={service}
                        order_id={order_id}
                        handleServiceBook={handleServiceBook}
                    />
                ))
            }
        </>
    );
}

export default ServiceSoldItem;