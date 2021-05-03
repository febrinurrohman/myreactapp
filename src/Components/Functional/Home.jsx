import React from 'react';
import Produk from '../Class/Produk';
// import Blog from './Blog';

const Home = () => {
    return (
        // <div>
        //     <Blog 
        //         tanggal="21 April 2021" 
        //         judul="Blockchain" 
        //         summary="Lorem ipsum dolor sit amet."
        //     />
        //     <Blog
        //         tanggal="22 April 2021"
        //         judul="Javascript"
        //         summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit nulla laoreet quam rhoncus accumsan."
        //     />
        // </div>

        <div>
            <Produk nama="MacBook Pro 2018" harga="20000000" stock="5" />
            <Produk nama="MacBook Pro 2019" harga="30000000" stock="10" />
            <Produk nama="MacBook Pro 2020" harga="40000000" stock="15" />
        </div>
    );
};

export default Home;