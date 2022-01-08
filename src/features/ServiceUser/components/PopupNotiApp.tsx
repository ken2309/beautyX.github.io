import React from 'react';
import { Dialog } from '@mui/material';
import icon from '../../../constants/icon'

function PopupNotiApp(props: any) {
      const { open, setOpen, errCode } = props;
      return (
            <Dialog
                  open={open}
                  onClose={() => setOpen(false)}
            >
                  <div className="flex-column-sp ser-book-noti">
                        {
                              errCode === 200 ?
                                    <>
                                          <img src={icon.success} alt="" />
                                          <span className="flex-column-sp ser-book-noti__title">
                                                Đặt hẹn thành công
                                          </span>
                                          <span className="ser-book-noti__text">
                                                Bạn có thể xem lại sản phẩm/dịch vụ và đặt hẹn
                                                <h4 style={{ color: 'var(--purple)', cursor: 'pointer' }} >tại đây</h4>
                                          </span>
                                    </>
                                    :
                                    <>
                                          <span className="flex-column-sp ser-book-noti__title">
                                                Đặt hẹn thất bại
                                          </span>
                                          <span className="ser-book-noti__text">
                                                Có lỗi xảy ra trong quá trình đặt hẹn
                                                <h4 style={{ color: 'var(--purple)', cursor: 'pointer' }} >
                                                      (Mã lỗi {errCode})
                                                </h4>
                                          </span>
                                    </>
                        }
                  </div>
            </Dialog>
      );
}

export default PopupNotiApp;