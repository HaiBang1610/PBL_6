import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Description from '../components/Description';
import InfoProduct from '../components/InfoProduct';
import Layout from '../layouts/Layout';
import { useParams } from 'react-router-dom';
import goodsApi from '../api/goodsApi';

const ProductDetail = () => {
    const { productId } = useParams();
    const [goodsDetail, setGoodsDetail] = useState({});

    useEffect(() => {
        goodsApi.getGoodsById(productId).then((res) => setGoodsDetail(res));
    }, []);

    return (
        <Layout>
            <div>
                <div className='banner-wrapper no_background'>
                    <div className='banner-wrapper-inner'>
                        <nav className='akasha-breadcrumb'>
                            <Link to='/'>Home</Link>
                            <i className='fa fa-angle-right' />
                            <Link to='/category'>Shop</Link>
                            <i className='fa fa-angle-right' />
                            Single Product
                        </nav>
                    </div>
                </div>
                <div className='single-thumb-vertical main-container shop-page no-sidebar'>
                    <div className='container'>
                        <div className='row'>
                            <div className='main-content col-md-12'>
                                <div className='akasha-notices-wrapper' />
                                <div
                                    id='product-27'
                                    className='post-27 product type-product status-publish has-post-thumbnail product_cat-table product_cat-new-arrivals product_cat-lamp product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-variable has-default-attributes'>
                                    <InfoProduct info={goodsDetail} />
                                    {/* <Description /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetail;
