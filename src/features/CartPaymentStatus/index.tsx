import React from 'react';
import HeadTitle from '../HeadTitle';
import Head from '../Head';
import './cart-status.css';
import { Container, CircularProgress } from '@mui/material';
import useCountDown from '../../utils/useCountDown';
import { useLocation } from 'react-router-dom';


function CartPaymentStatus() {
    //const sec = useCountDown(600);
    const sec = 1
    const location = useLocation();
    const res: any = location?.state;
    console.log(res)
    const deep_link = res.payment_gateway.extra_data.deeplink;
    console.log(deep_link)
    const handleOpenAppByDeepLink = () => {
        if (deep_link) {
            const newWindow = window.open(`${deep_link}`, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
        }
    }

    return (
        <>
            <HeadTitle
                title='Thanh toán đơn hàng'
            />
            <Head />
            <Container>
                <div
                    className='pm-st-cnt'
                >
                    <div className="pm-st-cnt__body">
                        <span className="title">
                            Thông tin đơn hàng
                        </span>
                        <div className="body-item">
                            <span className="body-item__title">
                                Nhà cung cấp
                            </span>
                            <span className="body-item__text">
                                Công ty cổ phần MYSPA
                            </span>
                        </div>
                        <div className="body-item">
                            <span className="body-item__title">
                                Mô tả
                            </span>
                            <span className="body-item__text">
                                Thanh toán đơn hàng
                            </span>
                        </div>
                        <div className="body-item">
                            <span className="body-item__title">
                                Số tiền
                            </span>
                            <span className="body-item__text">
                                2.800.000
                            </span>
                        </div>
                        <div className="pm-st-cnt__body-status">
                            {
                                sec <= 0 ?
                                    <span>Đơn hàng đã hết hạn</span>
                                    :
                                    <>
                                        <span className="st-title">
                                            Đang chờ thanh toán
                                        </span>
                                        <div className="st-process">
                                            <CircularProgress />
                                        </div>
                                        <div className="st-time-out">
                                            <span>Đơn hàng sẽ hết hạn sau : </span>
                                            <span>
                                                {`0${Math.floor(sec / 60)}`.slice(-2)}:
                                                {`0${sec - Math.floor(sec / 60) * 60}`.slice(-2)}
                                            </span>
                                        </div>
                                    </>
                            }
                        </div>
                        <button
                            onClick={handleOpenAppByDeepLink}
                        >
                            Mở ví MOMO
                        </button>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default CartPaymentStatus;