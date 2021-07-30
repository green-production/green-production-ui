import React, { Component } from "react";
import photoSeating from 'assets/images/photo_seating.jpg'
import photoLight from 'assets/images/photo_lighting.jpg'
import Core from "../../services/core";
import "./index.scss";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
            search: ''
        };
    }

    onClick(e) {
        e.preventDefault()
    }

    componentDidMount() {}

    render() {
        return (
            <div className="listing-section">
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-1"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Orange</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious oranges!</p>
                        <label for="item-1-quantity">Quantity:</label>
                        <input type="text" name="item-1-quantity" id="item-1-quantity" value="1" />
                        <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-2"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Apple</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious apples!</p>
                        <label for="item-2-quantity">Quantity:</label>
                        <input type="text" name="item-2-quantity" id="item-2-quantity" value="1" />
                        <button type="button" name="item-2-button" id="item-2-button">Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-3"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Passionfruit</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious passionfruit!</p>
                        <label for="item-3-quantity">Quantity:</label>
                        <input type="text" name="item-3-quantity" id="item-3-quantity" value="1" />
                        <button type="button" name="item-3-button" id="item-3-button">Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-4"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Pineapple</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious pineapples!</p>
                        <label for="item-4-quantity">Quantity:</label>
                        <input type="text" name="item-4-quantity" id="item-4-quantity" value="1" />
                        <button type="button" name="item-4-button" id="item-4-button">Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-5"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Mango</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious mangos!</p>
                        <label for="item-5-quantity">Quantity:</label>
                        <input type="text" name="item-5-quantity" id="item-5-quantity" value="1" />
                        <button type="button" name="item-5-button" id="item-5-button">Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-6"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Coconut</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious coconuts!</p>
                        <label for="item-6-quantity">Quantity:</label>
                        <input type="text" name="item-6-quantity" id="item-6-quantity" value="1" />
                        <button type="button" name="item-6-button" id="item-6-button">Add to Cart</button>
                    </div>
                </div>
                {/* <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-7"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Banana</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious bananas!</p>
                        <label for="item-7-quantity">Quantity:</label>
                        <input type="text" name="item-7-quantity" id="item-7-quantity" value="1" />
                        <button type="button" name="item-7-button" id="item-7-button">Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-8"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Plum</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious plums!</p>
                        <label for="item-8-quantity">Quantity:</label>
                        <input type="text" name="item-8-quantity" id="item-8-quantity" value="1" />
                        <button type="button" name="item-8-button" id="item-8-button">Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-9"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Avocado</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious avocados!</p>
                        <label for="item-9-quantity">Quantity:</label>
                        <input type="text" name="item-9-quantity" id="item-9-quantity" value="1" />
                        <button type="button" name="item-9-button" id="item-9-button">Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-10"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Lemon</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious lemons!</p>
                        <label for="item-10-quantity">Quantity:</label>
                        <input type="text" name="item-10-quantity" id="item-10-quantity" value="1" />
                            <button type="button" name="item-10-button" id="item-10-button">Add to Cart</button>
                    </div>
                </div> */}

                <div className="cart-section">
                    <div className="table-heading">
                        <h2 className="cart-product">Product</h2>
                        <h2 className="cart-price">Price</h2>
                        <h2 className="cart-quantity">Quantity</h2>
                        <h2 className="cart-total">Total</h2>
                    </div>

                    <div className="table-content">
                        <div className="cart-product">
                            <div className="cart-image-box">
                                <div className="cart-images" id="image-10"></div>
                            </div>
                            <h2 className="cart-item">Lemon</h2>
                            <p className="cart-description">A bag of lemons</p>
                        </div>
                        <div className="cart-price">
                            <h3 className="price">$4.99</h3>
                        </div>
                        <div className="cart-quantity">
                            <input type="text" name="cart-1-quantity" id="cart-1-quantity" value="1" />
                        </div>
                        <div className="cart-total">
                            <h3 className="price">$4.99</h3>
                            <button type="button" className="remove" name="remove-1" id="remove-1">x</button>
                        </div>
                    </div>

                    <div className="table-content">
                        <div className="cart-product">
                            <div className="cart-image-box">
                                <div className="cart-images" id="image-7"></div>
                            </div>
                            <h2 className="cart-item">Banana</h2>
                            <p className="cart-description">A bag of bananas</p>
                        </div>
                        <div className="cart-price">
                            <h3 className="price">$4.99</h3>
                        </div>
                        <div className="cart-quantity">
                            <input type="text" name="cart-1-quantity" id="cart-1-quantity" value="1" />
                        </div>
                        <div className="cart-total">
                            <h3 className="price">$4.99</h3>
                            <button type="button" className="remove" name="remove-2" id="remove-2">x</button>
                        </div>
                    </div>

                    <div className="table-content">
                        <div className="cart-product">
                            <div className="cart-image-box">
                                <div className="cart-images" id="image-3"></div>
                            </div>
                            <h2 className="cart-item">Passionfruit</h2>
                            <p className="cart-description">A bag of passionfruit</p>
                        </div>
                        <div className="cart-price">
                            <h3 className="price">$4.99</h3>
                        </div>
                        <div className="cart-quantity">
                            <input type="text" name="cart-1-quantity" id="cart-1-quantity" value="1" />
                        </div>
                        <div className="cart-total">
                            <h3 className="price">$4.99</h3>
                            <button type="button" className="remove" name="remove-3" id="remove-3">x</button>
                        </div>
                    </div>

                    <div className="coupon">
                        <input type="text" name="coupon" id="coupon" placeholder="COUPON CODE" />
                        <button type="button" name="coupon" id="coupon">Submit</button>
                    </div>

                    <div className="checkout">
                        <button type="button" name="update" id="update">Update</button>
                        <button type="button" name="checkout" id="checkout">Checkout</button>
                        <div className="final-cart-total">
                            <h3 className="price">$14.97</h3>
                        </div>
                    </div>

                    <div className="keep-shopping">
                        <button type="button" name="keep-shopping" id="keep-shopping">Keep Shopping</button>
                    </div>

                </div>
            </div>
            // <div className="dashboard">
            //     <section className="main">
            //         <aside>
            //             <div className="content trending">
            //                 <h3><a href="javascript:void(0)" onClick={this.onClick}>What&apos;s trending</a></h3>
            //                 <p>Lorem ipsum dolor sit amet, consect etuer adipiscing elit. <a href="http://codifydesign.com">Morbi commodo</a>, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.</p>
            //             </div>
            //         </aside>

            //         <aside>
            //             <div className="content find-it">
            //                 <h3><a href="javascript:void(0)" onClick={this.onClick}>Where to find it</a></h3>
            //                 <p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Lorem ipsum dolor sit amet, consect.</p>
            //             </div>
            //         </aside>

            //         <aside>
            //             <div className="content tools">
            //                 <h3><a href="javascript:void(0)" onClick={this.onClick}>Tools of the trade</a></h3>
            //                 <p>Nullam sit amet enim. Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci rhoncus neque, id pulvinar odio.</p>
            //             </div>
            //         </aside>
            //     </section>

            //     <section className="atmosphere">
            //         <article>
            //             <h2>Creating a modern atmospheer</h2>
            //             <p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Lorem ipsum dolor sit amet etuer adipiscing elit.  Pulvinar odio lorem non turpis. Nullam sit amet enim lorem.</p>
            //             <a className="btn" title="Creating a modern atmosphere" href="javascript:void(0)" onClick={this.onClick}>Learn more</a>
            //         </article>
            //     </section>

            //     <section className="how-to">
            //         <aside>
            //             <div className="content">
            //                 <img alt="Choosing the proper seating" src={photoSeating}/>
            //                 <h4>How-To: Seating</h4>
            //                 <p>Consectetuer adipiscing elit. Morbi commodo ipsum sed gravida orci magna rhoncus pulvinar odio lorem.</p>
            //                 <a title="Learn how to choose the proper seating." href="http://codifydesign.com">Learn more</a>
            //             </div>
            //         </aside>
            //         <aside>
            //             <div className="content">
            //                 <img alt="Choosing the proper lighting" src={photoLight}/>
            //                 <h4>How-To: Lighting</h4>
            //                 <p>Morbi commodo, ipsum sed pharetra gravida magna rhoncus neque id pulvinar odio lorem non turpis nullam sit amet.</p>
            //                 <a title="Learn how to choose the proper lighting." href="http://codifydesign.com">Learn more</a>
            //             </div>
            //         </aside>
            //         <blockquote>
            //             <p className="quote">Lorem ipsum dolor sit amet conse ctetuer adipiscing elit. Morbi comod sed dolor sit amet consect adipiscing elit.</p>
            //             <p className="credit"><strong>Author Name</strong><br/> <em>Business Title</em><br/> Company</p>
            //         </blockquote>
                    
            //     </section>

            // </div>
        );
    }
}

export default Dashboard;
