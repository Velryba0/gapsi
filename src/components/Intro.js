import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import useGetUsersHook from '../hooks/useGetUsersHook';

import Button from '../common/Button';

import './intro.styles.scss';

const Intro = () => {

    const [user, loading] = useGetUsersHook();

    return ( 
        <div className='ecommerce-intro-container'>
            <div className='column'>
                <div className='row ecommerce-intro-row'>
                    <p className='ecomerce-intro-container-title'>e-Commerce Gapsi</p>
                    <div className='ecommerce-intro-menu'>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className='row ecommerce-intro-row-2'>
                    <div className='column ecommerce-intro-column'>
                        <img src=''/>
                        <h1 className='ecommerce-intro-container-subtitle'>{!loading ? user.welcome : ''}</h1>
                        <Button label='Continuar'/>
                        <div>{!loading ? user.version : ''}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Intro;