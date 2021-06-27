import React from "react";
import classNames from "classnames";


const Footer = ({color='white'}) => {
  const classes = classNames({
    'flex': true,
    'flex-col': true,
    'text-center': true,
    'w-screen': true,
    'p-8': true,
    'font-bold': true,
    'text-black': color === 'black' ? true : false,
    'text-white': color === 'white' ? true : false

  });
  return (
    <div className={classes}>
      <span>Made with &hearts;, Ant Digital</span>
    </div>
  )
}
export default Footer