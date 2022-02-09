import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import parse from "html-react-parser";
import React from "react";
import ReactPlayer from "react-player";
import icon from "../../../constants/icon";

const Transition_up = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Transition_right = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function HomeBannerPopup(props: any) {
  const { open, setOpen, data } = props;

  const checkType = (data: any) => {
    switch (data?.type) {
      // case "VIDEO":
      //   return (
      //     <div className="banner-video">
      //       <ReactPlayer
      //         controls
      //         width={"100%"}
      //         height={"100%"}
      //         url={`${data?.url}`}
      //       />
      //     </div>
      //   );
      case "HTML":
        return (
          <>
            <div className="html-template">
              <button
                onClick={() => setOpen(false)}
                className="html-template__btn"
              >
                <img src={icon.chevronLeft} alt="" />
              </button>
            </div>
            <div className="popup-banner">{parse(`${data?.htmlTemplate}`)}</div>
          </>
        );
      default:
        break;
    }
  };
  return (
    <Dialog
      TransitionComponent={Transition_right}
      fullWidth={true}
      fullScreen={data?.type === "HTML" ? true : false}
      open={open}
      onClose={() => setOpen(false)}
    >
      {checkType(data)}
    </Dialog>
  );
}
