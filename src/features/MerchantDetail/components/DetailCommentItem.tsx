import React from 'react';
import icon from '../../../constants/icon';
import img from '../../../constants/img';

function DetailCommentItem(props:any) {
      const {comment} = props;
      // console.log(comment.rateStar)
      // const starArr: any[] = [];
      // for (let i = 0; i < comment.rateStar; i++) {
      //       starArr.push(`<li><img src={icon.star} alt="" /></li>`)
      // }
      // const starString = starArr.toString();
      // var doc = new DOMParser().parseFromString(starString, "text/xml");
      return (
            <li className="mer-detail-cmt__box-li">
                  <div className="mer-detail-cmt__box-item">
                        <div className="flex-row-sp cmt-head">
                              <div className="flex-row-sp cmt-head__user">
                                    <img src={img.Avatar} alt="" />
                                    <span>
                                          <p>{comment.name}</p>
                                          <ul>
                                                <li>
                                                      <img src={icon.star} alt="" />
                                                </li>
                                                <li>
                                                      <img src={icon.star} alt="" />
                                                </li>
                                                <li>
                                                      <img src={icon.star} alt="" />
                                                </li>
                                                <li>
                                                      <img src={icon.star} alt="" />
                                                </li>
                                          </ul>
                                    </span>
                              </div>
                              <h3 className="date">{comment.date}</h3>
                        </div>
                        <div className="cmt-text">
                              {comment.text}
                              <button>
                                    ...Xem thêm
                              </button>
                        </div>
                  </div>
            </li>
      );
}

export default DetailCommentItem;