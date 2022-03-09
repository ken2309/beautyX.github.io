import React from 'react';
import './filter-services.css'

function FilterServices(props: any) {
    const { dataSort, setDataSort, setData } = props;
    const sortList = [
        { id: 2, title: 'Khuyến mãi HOT', query: '-discount_percent' },
        { id: 1, title: 'Gần bạn', query: 'none' },
        //{ id: 8, title: 'Dịch vụ HOT', query: '-modified_date' },
        { id: 3, title: 'Giá thấp', query: 'price' },
        { id: 4, title: 'Giá cao', query: '-price' },
        { id: 5, title: 'Bán chạy', query: '-bought_count' },
        { id: 6, title: 'Tên A-Z', query: 'service_name' },
        { id: 7, title: 'Tên Z-A', query: '-service_name' },
    ]
    const onChooseSortType = (sort: any) => {
        if (dataSort !== sort.query) {
            setDataSort(sort.query)
            setData({ services: [], lastPage: 1, page: 1 })
        }
    }
    return (
        <div className='filter-ser-cnt'>
            <ul className="flex-row filter-ser-list">
                {
                    sortList.map(item => (
                        <li
                            style={dataSort === item.query ?
                                {
                                    backgroundColor: 'var(--pink)',
                                    color: 'var(--red-cl)',
                                    border: 'solid 1px var(--red-cl)'
                                }
                                :
                                {}}
                            onClick={() => onChooseSortType(item)}
                            key={item.id}
                        >
                            {item.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FilterServices;