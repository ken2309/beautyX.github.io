import React from 'react';
import {headerStyle} from '../style'

function Menu(props:any) {
      const menu = headerStyle();
      return (
            <div className={menu.menuBox}>
                  Menu box
            </div>
      );
}

export default Menu;