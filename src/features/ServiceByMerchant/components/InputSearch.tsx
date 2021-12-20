import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppProvider';
import icon from '../../../constants/icon'

function InputSearch(props: any) {
      const { t } = useContext(AppContext)
      const { searchTerm, handleSearchOnChange } = props;
      return (
            <div className="flex-row list-filter__right">
                  <input
                        value={searchTerm}
                        onChange={handleSearchOnChange}
                        type="text"
                        placeholder={t('Mer_de.search_by_service')}
                  />
                  <button><img src={icon.search} alt="" /></button>
            </div>
      );
}

export default InputSearch;