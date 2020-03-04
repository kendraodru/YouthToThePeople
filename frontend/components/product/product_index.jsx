import React from 'react'
import ProductIndexItem from './product_index_item';


class ProductIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProducts()
    }

    render(){
        const products = this.props.products.map((product) =>{
            return(
                <div className="product-wrapper" key={product.id}>
                    <ProductIndexItem product = {product} />
                </div>
            )
        });
        
        return (
            <div className="products-wrapper">
                <div className="hamburger"></div>
                    <div className="inner-products-wrapper">
                        {products}
                    </div>
            </div>
        )
    };
};

export default ProductIndex;