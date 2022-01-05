import React from "react";
import icon from "../../constants/icon";

export default function MerchantCommentItem() {
  return (
    <>
      <div className="comment-item">
        <div className="comment-user">
          <div className="comment-user__avatar">
            <img src="https://source.unsplash.com/random" alt="" />
          </div>
          <div className="comment-user__info">
            <span className="comment-user__name">Name User</span>
          </div>
        </div>
        <div className="comment-option">
          <div className="comment-option__like">
            <img src={icon.Favorite} alt="" />
            <span>0</span>
          </div>
          <img src={icon.phone} alt="" />
        </div>
      </div>
      <div className="comment-star__all">
        <img src={icon.star} alt="" />
        <img src={icon.star} alt="" />
        <img src={icon.star} alt="" />
        <img src={icon.star} alt="" />
        <img src={icon.star} alt="" />
      </div>
      <div className="comment-evalutes">
        <h3>Spectacular</h3>
        <span>12/2021</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          commodi, dolor soluta illum alias animi amet saepe eveniet inventore,
          magni cum minima deserunt aliquam, adipisci explicabo aliquid quasi
          omnis deleniti!
        </p>
      </div>
    </>
  );
}
