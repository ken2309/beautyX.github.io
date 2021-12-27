import React from 'react';
import { Slide, Dialog } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import BackButton from '../../components/BackButton';
import HomeFilter from '../../features/Home/components/HomeFilter'

const Transition = React.forwardRef(function Transition(
      props: TransitionProps & {
            children: React.ReactElement;
      },
      ref: React.Ref<unknown>,
) {
      return <Slide direction="up" ref={ref} {...props} />;
});

function SearchFilter(props: any) {
      const { openFilter, setOpenFilter, setCurPage } = props;
      return (
            <Dialog
                  fullScreen
                  open={openFilter}
                  TransitionComponent={Transition}
            >
                  <div className="mb-filter">
                        <BackButton
                              setOpenFilter={setOpenFilter}
                        />
                        <HomeFilter
                              setCurPage={setCurPage}
                              setOpenFilter={setOpenFilter}
                        />
                  </div>
            </Dialog>
      );
}

export default SearchFilter;