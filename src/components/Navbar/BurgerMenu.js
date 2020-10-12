import React from "react";
import { slide as Menu } from 'react-burger-menu';
export default function BurgerMenu (props) {
 console.log(props)
var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: props.burMenuButtonPosition,
    top: '10px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
      height: '100%',
    width: 'fit-content',  
  },
  bmMenu: {
    background: '#FFFFFF',
    padding: '2.5em 1.5em 0',
    width: '25vw',
      minWidth: '140px',
      maxWidth: '300px',
    fontSize: '1.15em',
      overflowY: 'hidden',
      marginTop: '2px',
      padding: '0px'
    
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
      width: 'fit-content',
    margin: 'auto'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
    return (
        <Menu styles ={ styles }>
            {props.children}
      </Menu>
    );
  }

