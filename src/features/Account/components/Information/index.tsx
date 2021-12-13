import React, { useState } from "react";
import ButtonCus from "../../../../components/ButtonCus";
import DialogChangePass from "./components/DialogChangePass";
import DialogNewPass from "./components/DialogNewPass";
import Form from "./components/Form";
import FormAddress from "./components/FormAddress";
import "./style.css";
function Information(props: any) {
  const [openChangePass, setOpenChangePass] = useState(false);
  const [openNewPass, setOpenNewPass] = React.useState(false);

  // Open Change Pass
  const handleOpenChange = () => {
    setOpenChangePass(true);
  };

  // Open New Pass
  const handleOpenNewPass = () => {
    setOpenNewPass(true);
  };

  return (
    <div className="info_section">
      <Form />
      <FormAddress />
      <div className="btn-success">
        <ButtonCus
          onClick={handleOpenChange}
          text="Thay đổi mật khẩu"
          fontSize="14px"
          lineHeight="20px"
          color="var(--purple)"
          border="solid 1px var(--purple)"
          borderRadius="26px"
          backColor="transparent"
        />
        <ButtonCus
          // onClick={formikPartner.handleSubmit}
          text="Lưu thay đổi"
          fontSize="14px"
          lineHeight="20px"
          color="#ffffff"
          border="solid 1px var(--purple)"
          borderRadius="26px"
          backColor="var(--purple"
        />
      </div>
      <DialogChangePass
        openChangePass={openChangePass}
        setOpenChangePass={setOpenChangePass}
        handleOpenNewPass={handleOpenNewPass}
      />
      <DialogNewPass
        openNewPass={openNewPass}
        setOpenNewPass={setOpenNewPass}
      />
    </div>
  );
}
export default Information;
