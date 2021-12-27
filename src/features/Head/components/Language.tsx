import React from 'react';
import LanguageBox from './LanguageBox';


function Language(props: any) {
      const {
            openLang,
            // unit,
            // setUnit
      } = props;
      return (
            <div
                  style={openLang === true ?
                        { top: '3rem', opacity: '1', visibility: 'visible' }
                        :
                        { top: '5rem', opacity: '0', visibility: 'hidden' }}
                  className="flex-row hd-lang-box"
            >
                  <LanguageBox />
            </div>
      );
}

export default Language;