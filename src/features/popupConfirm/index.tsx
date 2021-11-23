import React from 'react';
import {Dialog} from '@mui/material';
import './PopupConfirm.css';
import ButtonCus from '../../components/ButtonCus';

function PopupConfirm(props: any) {
      const { openConfirm, setOpenConfirm, handleRemoveItemCart } = props;
      const handleCancel = () => {
            setOpenConfirm(false);
      };
      const handleAccept=()=>{
            if(handleRemoveItemCart){
                  handleRemoveItemCart()
            }
            setOpenConfirm(false);
      }
      return (
                  <Dialog
                        open={openConfirm}
                        onClose={handleCancel}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                  >
                        <div className="flex-column pop-confirm">
                              <p className="pop-confirm__head">Thông báo</p>
                              <span className="pop-confirm__title">
                                    Bạn có muốn xóa sản phẩm khỏi giỏ hàng không ?
                              </span>
                              <div className="flex-row-sp pop-confirm__title-btn">
                                    <ButtonCus
                                          text="Đồng ý"
                                          color="var(--bg-gray)"
                                          backColor="var(--purple)"
                                          border="solid 1px var(--purple)"
                                          borderRadius="16px"
                                          margin="0px 12px"
                                          onClick={handleAccept}
                                    />
                                    <ButtonCus
                                          text="Hủy"
                                          color="var(--purple)"
                                          backColor="var(--bg-gray)"
                                          border="solid 1px var(--purple)"
                                          borderRadius="16px"
                                          margin="0px 12px"
                                          onClick={handleCancel}
                                    />
                              </div>
                        </div>
                  </Dialog>
      );
}

export default PopupConfirm;