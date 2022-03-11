import React from 'react';
import { imgTag } from '../../../../constants/img';
import '../../home-se.css';
import HomeTitleSection from '../HomeTitleSection/index';
import { useHistory } from 'react-router-dom'

function HomeTags(props: any) {
    const history = useHistory()
    const tags = [
        { id: 1, title: 'Nail', img: imgTag.nails },
        { id: 2, title: 'Phòng khám', img: imgTag.nhaKhoa },
        { id: 3, title: 'Salon', img: imgTag.hairSalon },
        { id: 4, title: 'Spa', img: imgTag.spa },
        { id: 5, title: 'Thẩm mỹ viện', img: imgTag.skinCare },
        { id: 6, title: 'Message Center', img: imgTag.message },
        //{ id: 7, title: 'Yoga', img: imgTag.yoga },
    ]
    const gotoDetail = (tag: string) => {
        history.push({
            pathname: '/danh-muc/',
            search: `${tag}`
        })
    }
    return (
        <>
            <HomeTitleSection
                title='Danh mục'
            />
            <div className='home-tags'>
                <ul className="home-tags-list">
                    {
                        tags.map(item => (
                            <li
                                onClick={() => gotoDetail(item.title)}
                                key={item.id}
                            >
                                <div className="flex-column tag-item-cnt">
                                    <img src={item.img} alt="" />
                                    <span>{item.title}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default HomeTags;