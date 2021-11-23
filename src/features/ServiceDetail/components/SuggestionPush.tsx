import React from 'react';

function SuggestionPush(props:any) {
      return (
            <div className="product-cnt__right-body-item suggest-card">
                  <span>Dịch vụ gợi ý đi kèm</span>
                  <ul className="suggest-card__list">
                        <li>
                              <div className="flex-row-sp suggest-card__list-item">
                                    <span className="suggest-card__list-name">Sản phẩm 1</span>
                                    <div className="flex-row suggest-card__list-quantity">
                                          <button>-</button>
                                          <h5>1</h5>
                                          <button>+</button>
                                          <span>1000.0000</span>
                                    </div>
                              </div>
                        </li>
                        <li>
                              <div className="flex-row-sp suggest-card__list-item">
                                    <span className="suggest-card__list-name">Sản phẩm 1</span>
                                    <div className="flex-row suggest-card__list-quantity">
                                          <button>-</button>
                                          <h5>1</h5>
                                          <button>+</button>
                                          <span>1000.0000</span>
                                    </div>
                              </div>
                        </li>
                        <li>
                              <div className="flex-row-sp suggest-card__list-item">
                                    <span className="suggest-card__list-name">Sản phẩm 1 </span>
                                    <div className="flex-row suggest-card__list-quantity">
                                          <button>-</button>
                                          <h5>1</h5>
                                          <button>+</button>
                                          <span>1000.0000</span>
                                    </div>
                              </div>
                        </li>
                  </ul>
            </div>
      );
}

export default SuggestionPush;