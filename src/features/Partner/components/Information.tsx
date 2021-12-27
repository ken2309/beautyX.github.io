import React from "react";
import img from "../../../constants/img";
import { partnerStyle } from "../style";

export default function Information() {
  const parner = partnerStyle();

  return (
    <div className={parner.partnerInfor}>
      <h1 className={parner.partnerTitle}>
        Booking Flatform Myspa <br /> Nền tảng kinh doanh online ngành làm đẹp
      </h1>
      <div className={parner.parnerImg}>
        <img src={img.Partner} alt="" />
      </div>
      <div className={parner.partnerDesc}>
        <p>
          Booking Online hiện đang là xu hướng kinh doanh trong thời đại số, khi
          người dùng dành phần lớn thời gian hàng ngày để truy cập, tìm hiểu và
          sử dụng các dịch vụ trên internet. Ngành dịch vụ làm đẹp như spa,
          salon, clinic, thẩm mỹ viện cũng không ngoại lệ,. <br /> Học cách
          thích nghi với thời đại chuyển đổi số 4.0 sẽ giúp doanh nghiệp tiếp
          cận được lượng lớn khách hàng tiềm năng, tăng doanh thu, giảm chi phí.
          Ngay từ bây giờ, hãy trở thành đối tác của Myspa để sở hữu những lợi
          ích sau:
        </p>
      </div>
      <div className={parner.partnerList}>
        <ul className={parner.partnerItem}>
          <li>
            📌 Bán sản phẩm, dịch vụ ngay trên nền tảng, chủ động tiếp cận khách
            hàng.
          </li>
          <li>
            📌 Khách hàng tự đặt lịch liệu trình, hạn chế việc sai sót thông tin
            đặt hẹn
          </li>
        </ul>
        <ul className={parner.partnerItem}>
          <li>
            📌 Tính năng tìm kiếm theo khu vực giúp doanh nghiệp trở thành lựa
            chọn ưu tiên khi khách hàng tìm kiếm địa điểm gần nhà.
          </li>
          <li>
            📌 Hỗ trợ doanh nghiệp kết nối trực tiếp với khách hàng, tư vấn,
            chốt lịch hẹn
          </li>
        </ul>
        <ul className={parner.partnerItem}>
          <li>
            📌 Đơn giản hóa việc cập nhât trạng thái lịch hẹn trước, trong và
            sau khi khách hàng sử dụng dịch vụ thông qua giao diện cho khách
            hàng
          </li>
          <li>
            📌 Là nơi để doanh nghiệp đăng tải các hình ảnh, thông tin, đánh
            giá, tăng khả năng quảng bá cho thương hiệu
          </li>
        </ul>
        <ul className={parner.partnerItem}>
          <li>
            📌 Tạo nên một cộng đồng làm đẹp, để doanh nghiệp và khách hàng đều
            có thể chia sẻ và trao đổi những kinh nghiệm cho nhau
          </li>
          <li>
            📌 Tạo nên một cộng đồng làm đẹp, để doanh nghiệp và khách hàng đều
            có thể chia sẻ và trao đổi những kinh nghiệm cho nhau
          </li>
        </ul>
      </div>
    </div>
  );
}
