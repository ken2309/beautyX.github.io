import React, { useState } from "react";
import SectionTitle from "../../SectionTitle";
import icon from "../../../constants/icon";
import img from "../../../constants/img";
import { imgRotate } from "../../../utils/imgRotate";
import DetailPersonnel from "./DetailPersonnel";
import DetailInfoUtil from "./DetailInfoUtil";

const introText =
  "Với những thành phần thiên nhiên mang đến những tác dụng tốt cho làn da, được bào chế, pha trộn theo tỷ lệ vàng thích hợp cùng công nghệ hiện đại tiên tiến. Vì thế hiệu quả trị nám của dòng kem này được đánh giá khá tốt. Cụ thể như sau:Kem trị nám dùng cho ban ngày với thành phần Glycerol momonnostearate có tác dụng thẩm thấu nhanh, sâu vào tế bào da, ngăn chặn, ức chế sự hình thành melanin.Không gian sang trọng, tư vấn cũng ok, dịch vụ cũng khá ổn nhưng hơi đắt. Đánh giá 3 sao vì nhân viên mượn đt nói là check in gì đấy nhưng thật ra là tự đánh giá 5 sao...Xem thêm";
export const utilsList = [
  { icon: icon.car, text: "Bãi đỗ xe", count: "200m2" },
  { icon: icon.bed, text: "Giường", count: "200" },
  { icon: icon.door, text: "Phòng", count: "20" },
  { icon: icon.car, text: "Sức chứa", count: "20 người" },
];
export const staffList = [
  { avatar: img.nv, name: "Nguyễn Tuấn Anh", exp: 2, position: "CV tư vấn" },
  {
    avatar: img.nv,
    name: "Võ Thị Thanh Nhàn",
    exp: 2,
    position: "Kỹ thuật viên",
  },
  { avatar: img.nv, name: "Đoàn Minh Nhật", exp: 5, position: "BS tư vấn" },
  {
    avatar: img.nv,
    name: "Trần Vân Khánh",
    exp: 1,
    position: "Kỹ thuật nâng cao",
  },
  {
    avatar: img.nv,
    name: "Nguyễn Hoàng Phúc",
    exp: 2,
    position: "Kỹ thuật viên",
  },
];
function DetailInfo(props: any) {
  const { merDetail, t } = props;
  const [showViewMore, setShowViewMore] = useState(false);
  return (
    <div className="mer-detail__content-info">
      <div className="mer__content-info__introduction">
        <SectionTitle title={merDetail?.name} />
        <div
          style={
            showViewMore === true
              ? { height: "fit-content", boxShadow: "unset" }
              : {}
          }
          className="text"
        >
          {introText}
        </div>
        <span onClick={() => setShowViewMore(!showViewMore)}>
          <img
            style={showViewMore === true ? imgRotate : {}}
            src={icon.down}
            alt=""
          />
          {showViewMore === false ? t("Mer_de.view_more") : t("Mer_de.hide")}
        </span>
      </div>
      <div className="mer__content-info__util">
        <DetailInfoUtil utilsList={utilsList} />
      </div>
      <div className="mer__content-info__personnel">
        <DetailPersonnel list={staffList} />
      </div>
    </div>
  );
}

export default DetailInfo;
