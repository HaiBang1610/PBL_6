/* eslint-disable jsx-a11y/anchor-is-valid */
import Background from '../components/Background';
import Instargrams from '../components/Instargrams';
import Item from '../components/Item';
import Silce from '../components/Silce';
import Layout from '../layouts/Layout';
import goodsApi from '../api/goodsApi';
import { useEffect, useState } from 'react';

const Home = () => {
    // const Slice = require('../components/Silce')

    const [goodsOfFlashSale, setGoodsOfFlashSale] = useState([]);
    const [goodsOfHotTrend, setGoodsOfHotTrend] = useState([]);

    useEffect(() => {
        goodsApi.getAllGoodsSaleOff().then((res) => setGoodsOfFlashSale(res));
        goodsApi.getAllGoodsHotTrend().then((res) => setGoodsOfHotTrend(res));
    }, []);

    return (
        <Layout>
            <div className='fullwidth-template'>
                <Background />

                <div className='section-001'>
                    <div className='container'>
                        <div className='akasha-heading style-01'>
                            <div className='heading-inner'>
                                <h3 className='title'>FLASH SALE </h3>
                            </div>
                        </div>
                        <div className='akasha-products style-04'>
                            <div className='response-product product-list-grid row auto-clear equal-container better-height '>
                                {goodsOfFlashSale.map((ele, index) => (
                                    <Item key={index} item={ele} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='akasha-heading style-01'>
                            <div className='heading-inner'>
                                <h3 className='title'>Hot Trend </h3>
                            </div>
                        </div>
                        <div className='akasha-products style-04'>
                            <div className='response-product product-list-grid row auto-clear equal-container better-height '>
                                {goodsOfHotTrend.map((ele, index) => (
                                    <Item key={index} item={ele} />
                                ))}
                            </div>

                            {/* <div className='shop-all'>
                                <a target=' _blank' href='#'>
                                    Discovery All
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <Instargrams /> */}
            </div>
        </Layout>
    );
};

export default Home;
