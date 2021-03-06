import React, { useState, useEffect, useRef } from 'react';
import HeadTitle from '../HeadTitle';
import Head from '../Head';
import './cart-status.css';
import { Container, CircularProgress } from '@mui/material';
import useCountDown from '../../utils/useCountDown';
import { useLocation, useHistory } from 'react-router-dom';
import paymentGatewayApi from '../../api/paymentGatewayApi';
import { useSelector } from 'react-redux';
import formatPrice from '../../utils/formatPrice'


function CartPaymentStatus() {
    const sec = useCountDown(600);
    const [dataStatus, setDataStatus] = useState<boolean>(false);
    const carts = useSelector((state: any) => state.carts);
    const list = carts.cartList.filter((item: any) => item.isConfirm === true);
    const services = list.filter((item: any) => item.is_type === 2);
    const location = useLocation();
    const history = useHistory();
    const res: any = location?.state;
    console.log(res)
    const intervalRef = useRef<any>();
    const deep_link = res.payment_gateway.extra_data.deeplink;
    const transaction_uuid = res?.payment_gateway?.transaction_uuid;
    console.log(transaction_uuid)
    console.log(deep_link)
    // const handleOpenAppByDeepLink = () => {
    //     if (deep_link) {
    //         const newWindow = window.open(`${deep_link}`, '_blank', 'noopener,noreferrer')
    //         if (newWindow) newWindow.opener = null
    //     }
    // }
    async function handleGetPaymentStatus() {
        try {
            const res_status = await paymentGatewayApi.getStatus({
                paymentId: transaction_uuid,
            })
            const status = res_status.data.context.status;
            console.log(status)
            switch (status) {
                case "PAID":
                    return setDataStatus(true);
                default:
                    break;
            }
        } catch (error) {
            console.log(error)
        }
    }
    const timerRender = [0];
    const setInter = () => {
        timerRender[0] = 150;
        intervalRef.current = setInterval(() => {
            // console.log(timerRender[0]);
            if (timerRender[0] > 0) {
                timerRender[0] -= 1;
                // (status === true)?getStatus(true):getStatus()
                handleGetPaymentStatus();
            } else {
                return clearInterval(intervalRef.current);
            }
        }, 4000);
    };
    //======== end
    useEffect(() => {
        if (transaction_uuid) {
            setInter();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transaction_uuid]);



    return (
        <>
            <HeadTitle
                title={dataStatus === true ? 'Thanh to??n th??nh c??ng' : 'Thanh to??n ????n h??ng'}
            />
            <Head />
            <Container>
                <div
                    className='pm-st-cnt'
                >
                    <div className="pm-st-cnt__body">
                        <span className="title">
                            Th??ng tin ????n h??ng
                        </span>
                        <div className="body-item">
                            <span className="body-item__title">
                                Nh?? cung c???p
                            </span>
                            <span className="body-item__text">
                                C??ng ty c??? ph???n MYSPA
                            </span>
                        </div>
                        <div className="body-item">
                            <span className="body-item__title">
                                M?? t???
                            </span>
                            <span className="body-item__text">
                                Thanh to??n ????n h??ng
                            </span>
                        </div>
                        <div className="body-item">
                            <span className="body-item__title">
                                S??? ti???n
                            </span>
                            <span className="body-item__text">
                                {formatPrice(res?.payment_gateway?.amount)}??
                            </span>
                        </div>
                        {
                            dataStatus === false ?
                                <div className="pm-st-cnt__body-status">
                                    {
                                        sec <= 0 ?
                                            <span>????n h??ng ???? h???t h???n</span>
                                            :
                                            <>
                                                <span className="st-title">
                                                    ??ang ch??? thanh to??n
                                                </span>
                                                <div className="st-process">
                                                    <CircularProgress />
                                                </div>
                                                <div className="st-time-out">
                                                    <span>????n h??ng s??? h???t h???n sau : </span>
                                                    <span>
                                                        {`0${Math.floor(sec / 60)}`.slice(-2)}:
                                                        {`0${sec - Math.floor(sec / 60) * 60}`.slice(-2)}
                                                    </span>
                                                </div>
                                            </>
                                    }
                                </div>
                                :
                                <>
                                    <div className="st-time__success">
                                        <span className='st-time__success-title'>
                                            Thanh to??n th??nh c??ng
                                        </span>
                                        <div className="control">
                                            {
                                                services.length > 0 &&
                                                <button
                                                    onClick={() => history.push('/goi-dich-vu')}
                                                >
                                                    ?????t h???n ngay
                                                </button>
                                            }
                                            <button
                                                onClick={() => history.push('/Home')}
                                            >
                                                V??? trang ch???
                                            </button>
                                        </div>
                                    </div>
                                </>
                        }
                        {/* <button
                            onClick={handleOpenAppByDeepLink}
                        >
                            M??? v?? MOMO
                        </button> */}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default CartPaymentStatus;