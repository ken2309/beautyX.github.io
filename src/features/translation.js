import React from 'react';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next'

function Test(props) {
      const { t } = useTranslation();
      function handleClick(lang) {
            i18next.changeLanguage(lang)
          }
      return (
            <div>
                  <button onClick={() => handleClick('vn')} >
                        Vietnam
                  </button>
                  <button onClick={() => handleClick('en')} >
                        English
                  </button>
                  <h3>{t('Thanks.1')}</h3>
                  <h3>{t('Why.1')}</h3>
                  <span>{t('Header.1')}</span>
            </div>
      );
}

export default Test;