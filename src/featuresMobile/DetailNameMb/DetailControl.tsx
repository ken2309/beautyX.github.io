import React from 'react';
import { Dialog, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import DetailCard from '../../features/ProductDetail/components/DetailCard';
import icon from '../../constants/icon';

const Transition = React.forwardRef(function Transition(
      props: TransitionProps & {
            children: React.ReactElement;
      },
      ref: React.Ref<unknown>,
) {
      return <Slide direction="up" ref={ref} {...props} />;
});

function DetailControl(props: any) {
      const { open, setOpen, detail, is_type, org } = props;
      return (
            <Dialog
                  fullScreen
                  open={open}
                  TransitionComponent={Transition}
            >
                  <div className="mb-de-control">
                        <div className="mb-de-control_x">
                              <img onClick={() => setOpen(false)} src={icon.closeCircle} alt="" />
                        </div>
                        <DetailCard
                              product={detail}
                              is_type={is_type}
                              org={org}
                        />
                  </div>
            </Dialog>
      );
}

export default DetailControl;