import React from 'react';

function OrgBranch(props:any) {
      const {branches, openBranches, setChooseBranch} = props;
      return (
            <div
                  style={
                        openBranches === true ?
                              { opacity: 1, top: '50px', visibility: 'visible' }
                              :
                              { opacity: 0, top: '80px', visibility: 'hidden' }
                  }
                  className='ser-choose-br'
            >
                  <ul>
                        {
                              branches?.map((item: any, index: number) => (
                                    <li
                                          key={index}
                                          onClick={() => setChooseBranch(item)}
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
                  </ul>
            </div>
      );
}

export default OrgBranch;