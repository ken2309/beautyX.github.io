import React from 'react';

function OrgBranch(props:any) {
      const {branches} = props;
      return (
            <div
                  className='ser-choose-br'
            >
                  {/* <ul>
                        {
                              branches?.map((item:any, index:number)=>(
                                    <li
                                          key={index}
                                    >
                                          <span className="name">
                                                Tên chi nhánh : {item?.name}
                                          </span>
                                          <span className="address">
                                                Địa chỉ : {item?.full_address}
                                          </span>
                                    </li>
                              ))
                        }
                  </ul> */}
            </div>
      );
}

export default OrgBranch;