import React from 'react';
import { Link } from 'react-router-dom'
import './button.styles.scss';

const Button = ({label}) => {
    return ( 
        <>
        <Link to='/products' className='ecommerce-button'>{label}</Link>
        </>
     );
}
 
export default Button;