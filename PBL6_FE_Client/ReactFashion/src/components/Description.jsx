/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Description = () => {
    return (
        <div className="akasha-tabs akasha-tabs-wrapper">
            <ul className="tabs dreaming-tabs" role="tablist">
                <li className="description_tab active" id="tab-title-description" role="tab" aria-controls="tab-description">
                    <a href="#tab-description">Description</a>
                </li>
                <li className="additional_information_tab" id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
                    <a href="#tab-additional_information">Additional information</a>
                </li>
                <li className="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                    <a href="#tab-reviews">Reviews (0)</a>
                </li>
            </ul>
            <div className="akasha-Tabs-panel akasha-Tabs-panel--description panel entry-content akasha-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
                <h2>Description</h2>
                    <picture>
                        <source media="(max-width: 480px)" srcSet="//theme.hstatic.net/200000201725/1000749045/14/banner-product-qc-mobile.jpg?v=517" />
                        <source media="(min-width: 481px)" srcSet="//theme.hstatic.net/200000201725/1000749045/14/banner-product-qc.jpg?v=517" />
                    </picture>

            </div>
            <div className="akasha-Tabs-panel akasha-Tabs-panel--additional_information panel entry-content akasha-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information">
                <h2>Additional information</h2>
                <table className="shop_attributes">
                    <tbody>
                        <tr>
                            <th>Color</th>
                            <td><p>Blue, Pink, Red, Yellow</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="akasha-Tabs-panel akasha-Tabs-panel--reviews panel entry-content akasha-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
                <div id="reviews" className="akasha-Reviews">
                    <div id="comments">
                        <h2 className="akasha-Reviews-title">Reviews</h2>
                        <p className="akasha-noreviews">There are no reviews yet.</p>
                    </div>
                    <div id="review_form_wrapper">
                        <div id="review_form">
                            <div id="respond" className="comment-respond">
                                <span id="reply-title" className="comment-reply-title">Be the first to review “T-shirt with skirt”</span>
                                <form id="commentform" className="comment-form">
                                    <p className="comment-notes"><span id="email-notes">Your email adchair will not be published.</span>
                                        Required fields are marked <span className="required">*</span></p>
                                    <p className="comment-form-author">
                                        <label htmlFor="author">Name&nbsp;<span className="required">*</span></label>
                                        <input id="author" name="author" defaultValue size={30} required type="text" /></p>
                                    <p className="comment-form-email"><label htmlFor="email">Email&nbsp;
                                        <span className="required">*</span></label>
                                        <input id="email" name="email" defaultValue size={30} required type="email" /></p>
                                    <div className="comment-form-rating"><label htmlFor="rating">Your rating</label>
                                        <p className="stars">
                                            <span>
                                                <a className="star-1" href="#">1</a>
                                                <a className="star-2" href="#">2</a>
                                                <a className="star-3" href="#">3</a>
                                                <a className="star-4" href="#">4</a>
                                                <a className="star-5" href="#">5</a>
                                            </span>
                                        </p>
                                        <select title="product_cat" name="rating" id="rating" required style={{ display: 'none' }}>
                                            <option value>Rate…</option>
                                            <option value={5}>Perfect</option>
                                            <option value={4}>Good</option>
                                            <option value={3}>Average</option>
                                            <option value={2}>Not that bad</option>
                                            <option value={1}>Very poor</option>
                                        </select></div>
                                    <p className="comment-form-comment"><label htmlFor="comment">Your
                                        review&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols={45} rows={8} required defaultValue={""} /></p><input name="wpml_language_code" defaultValue="en" type="hidden" />
                                    <p className="form-submit"><input name="submit" id="submit" className="submit" defaultValue="Submit" type="submit" /> <input name="comment_post_ID" defaultValue={27} id="comment_post_ID" type="hidden" />
                                        <input name="comment_parent" id="comment_parent" defaultValue={0} type="hidden" />
                                    </p></form>
                            </div>{/* #respond */}
                        </div>
                    </div>
                    <div className="clear" />
                </div>
            </div>
        </div>
    );
};

export default Description;