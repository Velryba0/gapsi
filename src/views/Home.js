import React from 'react';
import useGetProductsHook from '../hooks/useGetProductsHook';

import Intro from '../components/Intro';

const Home = () => {

    const [result, loading] = useGetProductsHook();

    console.log(result)
    console.log(loading)
    return (
       <>
        <Intro />
       </>
    )
}

export default Home;