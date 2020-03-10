import React from 'react'

class ProductIndexItem extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            currentIdx: 0
        }

        this.changePhoto = this.changePhoto.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleAddCartItem = this.handleAddCartItem.bind(this)
    }

   

    changePhoto() {
        this.setState({ currentIdx: (this.state.currentIdx + 1) % 2 })
    }

    handleHover(e){
        e.preventDefault();
        this.changePhoto()
    }

    handleAddCartItem(){
        const cart = this.props.cart
        const { product } = this.props
        const newCartItem = {cart_id: cart.id, product_id: product.id};
        this.props.postCartItem(newCartItem);
    }

    render(){

        const { product } = this.props
        // onMouseOver = { e => this.handleHover(e) } onMouseLeave = { e => this.handleHover(e) }
        return (
            <div className='product-root' >
                {/* <div className='product-content'> */}
                    <a className="product-index-show-link" href={`/#/products/${product.name}/${product.id}`}>
                        
                        {/* <div className='product-pic'>
                            <div className='product-pic-trans'>
                                <img className="first-pic" src={product.photoUrls[0]} alt=""/>
                                <img className="second-pic" src={product.photoUrls[1]} alt=""/>
                            </div>
                        </div>   */}



                        {/* what i have now below */}
                        <div className='product-pic'>
                        <img 
                        src={product.photoUrls[this.state.currentIdx]} alt="" 
                        onMouseOver={(e)=>this.handleHover(e)}
                        onMouseOut={(e) => this.handleHover(e)}/>
                        </div>
                    </a>
                    <div className='product-info'>
                        <div className="basic-info">
                            <div className='product-name'>
                                <a className="product-index-show-link" href={`/#/products/${product.name}/${product.id}`}>
                                <div className="link">
                                    <span>{product.name}</span>
                                </div>
                                </a>
                            </div>
                            <div className='product-nums'>
                                <span>{`$${product.price} / ${product.size}`}</span>
                            </div>
                        </div>
                        <div className="product-btn-div">
                        <button
                        onClick={() => this.handleAddCartItem()} 
                        className='product-show-btn'>Add to cart</button>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}

export default ProductIndexItem
