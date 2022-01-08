import React, { useContext } from "react";
import productsApi from "../../../api/productApi";
import icon from "../../../constants/icon";
import { AppContext } from "../../../context/AppProvider";
export default function InputProByMerSearch(props: any) {
  const { mer_id, setProducts } = props;
  const { t } = useContext(AppContext);
  function handerOnchange(e: any) {
    const { value } = e.target;
    async function handleFilterByKey() {
      const res = await productsApi.getBySearch({
        org_id: mer_id,
        searchKey: value,
      });
      setProducts(res.data.context.data);
    }
    handleFilterByKey();
  }
  return (
    <div className="flex-row list-filter__right">
      <input
        onChange={handerOnchange}
        type="text"
        placeholder={t("Mer_de.search_by_service")}
      />
      <button>
        <img src={icon.search} alt="" />
      </button>
    </div>
  );
}
