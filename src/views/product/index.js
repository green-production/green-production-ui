import React, { Component } from "react";
import "./index.scss";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
    }

    componentDidMount() { }

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
        );
    }
}

export default Product;
