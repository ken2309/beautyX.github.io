import React, { useState } from 'react';
import SectionTitle from '../../SectionTitle';
import icon from '../../../constants/icon';
import {imgRotate} from '../../../utils/imgRotate'

function DetailDesc(props:any) {
      const {product} = props;
      const [viewMore, setViewMore] = useState(false);
      return (
            <div className="product-desc">
                  <SectionTitle
                        title={product.product_name}
                  />
                  <div 
                        style={viewMore === true ? {height:'fit-content', boxShadow:'unset'}:{}}
                        className="product-desc__text"
                  >
                        Với những thành phần thiên nhiên mang đến những tác
                        dụng tốt cho làn da, được bào chế, pha trộn theo tỷ
                        lệ vàng thích hợp cùng công nghệ hiện đại tiên tiến.
                        Vì thế hiệu quả trị nám của dòng kem này được đánh giá
                        khá tốt. Cụ thể như sau: CÔNG DỤNG: Kem trị nám dùng cho ban
                        ngày với thành phần Glycerol momonnostearate có tác
                        dụng thẩm thấu nhanh, sâu vào tế bào da,
                        ngăn chặn, ức chế sự hình thành melanin.
                  </div>
                  <span
                        onClick={() => setViewMore(!viewMore)}
                        className="flex-row product-desc__more"
                  >
                        <img style={viewMore === true ? imgRotate : {}} src={icon.down} alt="" />
                        {viewMore === true ? 'Ẩn bớt' : 'Xem thêm'}
                  </span>
            </div>
      );
}

export default DetailDesc;