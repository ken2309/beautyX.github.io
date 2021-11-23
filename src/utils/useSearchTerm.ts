import { useEffect, useState } from 'react';

interface Services {
      id: number, product_name: string, is_product: boolean, retail_price: number, special_price: number
}
function useSearchTerm(searchTerm: any, list: any) {
      const [listBySearchTerm, setListBySearchTerm] = useState<Services[]>([])
      useEffect(() => {
            async function handleSearchTerm() {
                  const result = list.filter((item: { [x: string]: { toString: () => string; }; }) => {
                        return Object.keys(item).some(key =>
                              item[key]?.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
                        )
                  })
                  setListBySearchTerm(result);
            }
            handleSearchTerm()
      }, [list, searchTerm])
      return listBySearchTerm
}

export default useSearchTerm;