/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import goodsApi from '../api/goodsApi';

const SideBar = ({ onNameSearch, onQueryChange, onClear }) => {
    const [categories, setCategories] = useState([]);
    const [query, setQuery] = useState({
        idCategory: 0,
        startPrice: -1,
        endPrice: 0,
    });

    const handleNameSearch = (e) => {
        onNameSearch(e.target.value);
    };

    const handlePriceChange = (startPrice, endPrice) => {
        const queryTempt = { ...query, startPrice, endPrice };
        onQueryChange(queryTempt);
        setQuery(queryTempt);
    };

    const handleCategoryChange = (idCategory) => {
        const queryTempt = { ...query, idCategory };
        onQueryChange(queryTempt);
        setQuery(queryTempt);
    };

    const handleClear = () => {
        const queryTempt = { idCategory: 0, startPrice: -1, endPrice: 0 };
        // onQueryChange(queryTempt);
        setQuery(queryTempt);
        onClear();
    };
    useEffect(() => {
        goodsApi.getAllCategories().then((res) => {
            setCategories(res);
        });
    }, []);

    return (
        <div id='widget-area' className='widget-area shop-sidebar'>
            <div
                id='akasha_product_search-2'
                className='widget akasha widget_product_search'>
                <form className='akasha-product-search'>
                    <input
                        id='akasha-product-search-field-0'
                        className='search-field'
                        placeholder='Search products…'
                        name='s'
                        type='search'
                        onChange={handleNameSearch}
                    />
                </form>
            </div>
            <div
                id='akasha_product_categories-3'
                className='widget akasha widget_product_categories'>
                <button onClick={handleClear}>Clear Filter</button>
                <h2 className='widgettitle'>
                    Price
                    <span className='arrow' />
                </h2>
                <ul className='product-categories'>
                    <li className='cat-item cat-item-22'>
                        <input
                            type='radio'
                            value='0'
                            name='price'
                            checked={query.startPrice === 0}
                            onClick={() => handlePriceChange(0, 100000)}
                        />
                        <span
                            style={{
                                margin: '15px',
                                color: 'black',
                                fontWeight: '500',
                            }}>
                            {' '}
                            Dưới 100.000 đ
                        </span>
                    </li>

                    <li className='cat-item cat-item-22'>
                        <input
                            type='radio'
                            value='1'
                            name='price'
                            checked={query.startPrice === 100000}
                            onClick={() => handlePriceChange(100000, 300000)}
                        />
                        <span
                            style={{
                                margin: '15px',
                                color: 'black',
                                fontWeight: '500',
                            }}>
                            {' '}
                            Từ 100.000 đ - 300.000 đ
                        </span>
                    </li>

                    <li className='cat-item cat-item-22'>
                        <input
                            type='radio'
                            name='price'
                            checked={query.startPrice === 300000}
                            onClick={() => handlePriceChange(300000, 500000)}
                        />
                        <span
                            style={{
                                margin: '15px',
                                color: 'black',
                                fontWeight: '500',
                            }}>
                            {' '}
                            Từ 300.000 đ - 500.000 đ
                        </span>
                    </li>

                    <li className='cat-item cat-item-22'>
                        <input
                            type='radio'
                            name='price'
                            checked={query.startPrice === 500000}
                            onClick={() =>
                                handlePriceChange(500000, 100000000000000)
                            }
                        />
                        <span
                            style={{
                                margin: '15px',
                                color: 'black',
                                fontWeight: '500',
                            }}>
                            {' '}
                            Trên 500.000 đ
                        </span>
                    </li>
                </ul>
            </div>

            <div
                id='akasha_product_categories-3'
                className='widget akasha widget_product_categories'>
                <h2 className='widgettitle'>
                    Product categories
                    <span className='arrow' />
                </h2>
                <ul className='product-categories'>
                    {categories.map((ele, index) => (
                        <li key={index} className='cat-item cat-item-22'>
                            <input
                                type='radio'
                                value='Dưới 100.000 đ'
                                name='category'
                                checked={query.idCategory === ele.idCategory}
                                onClick={() =>
                                    handleCategoryChange(ele.idCategory)
                                }
                            />
                            <span
                                style={{
                                    margin: '15px',
                                    color: 'black',
                                    fontWeight: '500',
                                }}>
                                {ele.categoryName}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
