import React from 'react';
import { Dialog, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import Orders from '../../../features/Orders';
import Head from '../../../features/Head'

const Transition = React.forwardRef(function Transition(
      props: TransitionProps & {
            children: React.ReactElement<any, any>;
      },
      ref: React.Ref<unknown>,
) {
      return <Slide direction="left" ref={ref} {...props} />;
});

function OrderMb(props: any) {
      const { openOrder, setOpenOrder } = props;
      return (
            <Dialog
                  fullScreen
                  open={openOrder}
                  TransitionComponent={Transition}
            >
                  <div className="mb-order">
                        <Head
                              setCloseDialog={setOpenOrder}
                        />
                        <Orders />
                  </div>
            </Dialog>
      );
}

export default OrderMb;