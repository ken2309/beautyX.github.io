import React, { useEffect, useState } from "react";
import icon from "../../../constants/icon";
import CardItem from "../../CardItem";
import useFilterPro from "../../../utils/useFilterPro";
import { Product } from "../../../interface/product";
import { Pagination } from "@mui/material";
import scrollTop_2 from "../../../utils/scrollTop_2";
import { useLocation } from "react-router-dom";
import GridLoading from "../../Loading/GridLoading";
import InputProByMerSearch from "./InputProByMerSearch";

const cardStyle = {
  width: "100%",
};
interface ActiveFilter {
  id: number;
  title: string;
}
function ProductList(props: any) {
  const location = useLocation();
  const {
    t,
    products,
    setPage,
    loading,
    pageLength,
    org,
    mer_id,
    setProducts,
  } = props;
  const buttons = [
    { id: 1, title: t("Mer_de.popular") },
    { id: 2, title: t("Mer_de.selling") },
    { id: 3, title: t("Mer_de.ascending_price") },
    { id: 4, title: t("Mer_de.decrease_price") },
  ];
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>({
    id: 0,
    title: "",
  });
  // const [serviceSort, setServiceSort] = useState<Product[]>([]);
  // const [sort, setSort] = useState({
  //   _sortPrice: products,
  // });
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleSearchOnChange = (e: any) => {
  //   setSearchTerm(e.target.value);
  //   setActiveFilter({ id: 0, title: "" });
  // };
  // const productFilter = useFilterPro(searchTerm, products);
  // useEffect(() => {
  //   function handleSort() {
  //     setServiceSort(productFilter);
  //   }
  //   handleSort();
  // }, [sort, productFilter, serviceSort]);
  // const ascPrice = () => {
  //   const asc = productFilter.sort((a, b) => a.retail_price - b.retail_price);
  //   setSort({
  //     ...sort,
  //     _sortPrice: asc,
  //   });
  // };
  // const descPrice = () => {
  //   const desc = productFilter.sort((a, b) => b.retail_price - a.retail_price);
  //   setSort({
  //     ...sort,
  //     _sortPrice: desc,
  //   });
  // };
  const handleActiveFilter = (item: any) => {
    setActiveFilter(item);
    if (item.id === 1) {
      console.log("Phổ biến");
    } else if (item.id === 2) {
      console.log("Bán chạy");
    } else if (item.id === 3) {
      console.log("Giá thấp");
      // ascPrice();
    } else if (item.id === 4) {
      console.log("Giá cao");

      // descPrice();
    }
  };
  const pageChange = (event: any, value: any) => {
    setPage(value);
    scrollTop_2(500);
  };
  return (
    <div className="ser-list">
      <div className="flex-row-sp list-filter">
        <div className="flex-row list-filter__left">
          <span>{t("Mer_de.sort_by")}:</span>
          <div className="ser-sort__wrap">
            {buttons.map((item) => (
              <button
                style={
                  activeFilter.id === item.id
                    ? {
                        backgroundColor: "var(--purple)",
                        color: "var(--bg-gray)",
                      }
                    : {}
                }
                onClick={() => handleActiveFilter(item)}
                key={item.id}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-row list-filter__right">
          <InputProByMerSearch mer_id={mer_id} setProducts={setProducts} />
        </div>
      </div>
      <div className="flex-column ser-list__content">
        <ul className="ser-list__content-list">
          {loading === true ? (
            <GridLoading />
          ) : (
            products?.map((item: any, index: any) => (
              <li key={index} className="ser-list__content-list-item">
                <CardItem
                  org={org}
                  org_id={location.search.slice(1, location.search.length)}
                  name={item.product_name}
                  detail={item}
                  retail_price={item.retail_price}
                  special_price={item.special_price}
                  style={cardStyle}
                  is_type={1}
                />
              </li>
            ))
          )}
        </ul>
        <Pagination
          color="secondary"
          shape="rounded"
          count={pageLength}
          onChange={pageChange}
        />
      </div>
    </div>
  );
}

export default ProductList;
