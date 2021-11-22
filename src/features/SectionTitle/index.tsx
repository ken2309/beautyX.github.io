import React from 'react';
import './SectionTitle.css'

function SectionTitle(props:any) {
      const {title, textAlign} = props;
      return (
            <div 
                  style={{textAlign:textAlign}}
                  className="section-title"
            >
                  {title}
            </div>
      );
}

export default SectionTitle;