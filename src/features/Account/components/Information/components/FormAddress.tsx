import icon from "../../../../../constants/icon";

export default function FormAddress(props: any) {
  const { formik } = props;
  return (
    <>
      <div className="title_section text-color-purple">
        <h1 className="title">Địa chỉ giao hàng</h1>
        <span className="subtitle cursor-pointer">Thêm địa điểm khác</span>
      </div>
      <hr className="purple_line" />
      <div className="form-address">
        <div className="form-account__wraper">
          <div style={{ width: "100%", padding: "24px 0 8px 0" }}>
            <div className="form-account__label">
              <span>Địa chỉ 1</span>
              <div className="delete-address">
                <span>Mặc định</span>
                <img src={icon.TrashOrange} alt="" />
              </div>
            </div>
            <div className="form-account__wrapinput">
              <input
                className="form-account__input"
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="Địa chỉ"
                type="text"
                name="address"
                id="address"
              />
            </div>
            {formik.errors.address && formik.touched.address && (
              <p className="err-text">{formik.errors.address}</p>
            )}
          </div>
        </div>
        <div style={{ paddingTop: "0px" }} className="form-account__wraper">
          <div style={{ width: "100%", padding: "8px 0 8px 0" }}>
            <div className="form-account__label">
              <span>Địa chỉ 2</span>
              <div className="delete-address">
                <span>Mặc định</span>
                <img src={icon.TrashOrange} alt="" />
              </div>
            </div>
            <div className="form-account__wrapinput">
              <input
                className="form-account__input"
                // value={formikPartner.values.Name}
                // onChange={formikPartner.handleChange}
                placeholder="Địa chỉ"
                type="text"
                name="Name"
                id="Name"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
