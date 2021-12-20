import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import { Dialog, Slide } from '@mui/material';
import BackButton from '../../components/BackButton';
import MapWrapper from './components/MapWrapper';
import MapCard from './components/MapCard'
import './Map.css'

const Transition = React.forwardRef(function Transition(
      props: TransitionProps & {
            children: React.ReactElement;
      },
      ref: React.Ref<unknown>,
) {
      return <Slide direction="left" ref={ref} {...props} />;
});

function Map(props: any) {
      const { openMap, setOpenMap, list } = props;
      return (
            <Dialog
                  fullScreen
                  open={openMap}
                  TransitionComponent={Transition}
            >
                  <BackButton
                        setOpenFilter={setOpenMap}
                  />
                  <div className="mb-map">
                        <MapWrapper />
                        <MapCard
                              list={list}
                        />
                  </div>
            </Dialog>
      );
}

export default Map;