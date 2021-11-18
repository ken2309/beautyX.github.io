import React from "react";
import img from "../../constants/img";
import icon from "../../constants/icon";
import { partnerStyle } from "./style";
import Header from "../Header";
import ButtonCus from "../../components/ButtonCus";
import Checkbox from "@mui/material/Checkbox";

export default function Partner() {
  const parner = partnerStyle();
  return (
    <div>
      <Header />
      <section className={parner.partner}>
        <div className={parner.container}>
          <div className={parner.content}>
            {/* infomation */}
            <div className={parner.partnerInfor}>
              <h1 className={parner.partnerTitle}>
                Booking Flatform Myspa <br /> Nền tảng kinh doanh online ngành
                làm đẹp
              </h1>
              <div className={parner.parnerImg}>
                <img src={img.Partner} alt="" />
              </div>
              <div className={parner.partnerDesc}>
                <p>
                  Booking Online hiện đang là xu hướng kinh doanh trong thời đại
                  số, khi người dùng dành phần lớn thời gian hàng ngày để truy
                  cập, tìm hiểu và sử dụng các dịch vụ trên internet. Ngành dịch
                  vụ làm đẹp như spa, salon, clinic, thẩm mỹ viện cũng không
                  ngoại lệ,. <br /> Học cách thích nghi với thời đại chuyển đổi
                  số 4.0 sẽ giúp doanh nghiệp tiếp cận được lượng lớn khách hàng
                  tiềm năng, tăng doanh thu, giảm chi phí. Ngay từ bây giờ, hãy
                  trở thành đối tác của Myspa để sở hữu những lợi ích sau:
                </p>
              </div>
              <div className={parner.partnerList}>
                <ul className={parner.partnerItem}>
                  <li>
                    📌 Bán sản phẩm, dịch vụ ngay trên nền tảng, chủ động tiếp
                    cận khách hàng.
                  </li>
                  <li>
                    📌 Khách hàng tự đặt lịch liệu trình, hạn chế việc sai sót
                    thông tin đặt hẹn
                  </li>
                </ul>
                <ul className={parner.partnerItem}>
                  <li>
                    📌 Tính năng tìm kiếm theo khu vực giúp doanh nghiệp trở
                    thành lựa chọn ưu tiên khi khách hàng tìm kiếm địa điểm gần
                    nhà.
                  </li>
                  <li>
                    📌 Hỗ trợ doanh nghiệp kết nối trực tiếp với khách hàng, tư
                    vấn, chốt lịch hẹn
                  </li>
                </ul>
                <ul className={parner.partnerItem}>
                  <li>
                    📌 Đơn giản hóa việc cập nhât trạng thái lịch hẹn trước,
                    trong và sau khi khách hàng sử dụng dịch vụ thông qua giao
                    diện cho khách hàng
                  </li>
                  <li>
                    📌 Là nơi để doanh nghiệp đăng tải các hình ảnh, thông tin,
                    đánh giá, tăng khả năng quảng bá cho thương hiệu
                  </li>
                </ul>
                <ul className={parner.partnerItem}>
                  <li>
                    📌 Tạo nên một cộng đồng làm đẹp, để doanh nghiệp và khách
                    hàng đều có thể chia sẻ và trao đổi những kinh nghiệm cho
                    nhau
                  </li>
                  <li>
                    📌 Tạo nên một cộng đồng làm đẹp, để doanh nghiệp và khách
                    hàng đều có thể chia sẻ và trao đổi những kinh nghiệm cho
                    nhau
                  </li>
                </ul>
              </div>
            </div>
            {/* end infomation*/}

            {/* form */}
            <div className={parner.partnerRegis}>
              <h2 className={parner.partnerRegisTitle}>
                Trở thành đối tác Myspa để kinh doanh hiệu quả hơn trong giai
                đoạn chuyển đối số
              </h2>
              <form action="#" className={parner.form}>
                <div className={parner.wrapInput}>
                  <img className={parner.inputImgName} src={icon.User} alt="" />
                  <input
                    className={parner.inputName}
                    placeholder="Họ và tên"
                    type="name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className={parner.wrapInput}>
                  <img
                    className={parner.inputImgName}
                    src={icon.Phone}
                    alt=""
                  />
                  <input
                    className={parner.inputName}
                    placeholder="Số điện thoại"
                    type="name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className={parner.wrapInput}>
                  <img
                    className={parner.inputImgName}
                    src={icon.Message}
                    alt=""
                  />
                  <input
                    className={parner.inputName}
                    placeholder="Email"
                    type="name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className={parner.wrapInput}>
                  <img
                    className={parner.inputImgName}
                    src={icon.Buildings}
                    alt=""
                  />
                  <input
                    className={parner.inputName}
                    placeholder="Tên doanh nghiệp"
                    type="name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className={parner.wrapInput}>
                  <img
                    className={parner.inputImgName}
                    src={icon.Location}
                    alt=""
                  />
                  <input
                    className={parner.inputName}
                    placeholder="Địa chỉ"
                    type="name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className={parner.wrapInput}>
                  <img
                    className={parner.inputImgName}
                    src={icon.Storefront}
                    alt=""
                  />
                  <input
                    className={parner.inputName}
                    placeholder="Số lượng chi nhánh"
                    type="name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className={parner.checkbox}>
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#7161BA",
                      "&.Mui-checked": {
                        color: "#7161BA",
                      },
                    }}
                  />
                  <div className={parner.checkboxText}>
                    <p>
                      Tôi đã đọc và đồng ý với
                      <a href={" "}> Điều khoản & Điều kiện của Myspa</a>
                    </p>
                  </div>
                </div>
                <div className={parner.btnWrap}>
                  <ButtonCus
                    text="Đăng kí ngay"
                    fontSize="14px"
                    lineHeight="20px"
                    color="#ffffff"
                    border="solid 1px var(--purple)"
                    borderRadius="26px"
                    backColor="var(--purple"
                  />
                </div>
              </form>
            </div>
            {/* end form */}
          </div>
        </div>
      </section>
    </div>
  );
}
