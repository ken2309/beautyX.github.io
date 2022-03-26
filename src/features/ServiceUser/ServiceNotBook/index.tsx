import React, { useEffect, useState } from 'react';
import servicesUserApi from '../../../api/servicesUser';
import { IServiceUser } from '../../../interface/servicesUser';
import TreatmentCardItem from './TreatmentCardItem'

interface IData {
      services_user: IServiceUser[],
      page: number,
      totalPage: number
}

function ServiceNotBook(props: any) {
      const { tab_id } = props;
      const [data, setData] = useState<IData>({
            services_user: [],
            page: 1,
            totalPage: 1
      })

      async function handleGetServicesUser() {
            const session = await window.sessionStorage.getItem("_WEB_TK");
            const local = await localStorage.getItem("_WEB_TK")
            try {
                  const res = await servicesUserApi.getServices(session, local);
                  setData({
                        ...data,
                        services_user: res.data.context.data,
                        totalPage: res.data.context.last_page
                  })
            } catch (error) {
                  console.log(error);
            }
      }
      useEffect(() => {
            handleGetServicesUser()
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      //console.log(data)
      return (
            <div
                  style={tab_id === 1 ? { display: 'block' } : { display: 'none' }}
            >
                  <div className="my-ser-book">
                        <ul className="my-ser-book__list">
                              {
                                    data.services_user.map((item: IServiceUser, index: number) => (
                                          <li
                                                key={index}
                                          >
                                                <TreatmentCardItem
                                                      card_items={item}
                                                />
                                          </li>
                                    ))
                              }
                        </ul>
                  </div>
            </div>
      );
}

export default ServiceNotBook;