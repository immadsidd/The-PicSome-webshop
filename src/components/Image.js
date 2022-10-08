import React,{useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    const alreadyInCart = cartItems.some(item => item.id === img.id)
    return (
        <div className={`${className} image-container`}
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)} 
        >
            <i className={hovered && !img.isFavorite?"ri-heart-line favorite":""} onClick={() => toggleFavorite(img.id)}></i>
            <i className={hovered && img.isFavorite?"ri-heart-fill favorite":""} onClick={() => toggleFavorite(img.id)}></i>
            <i className={hovered && !alreadyInCart?"ri-add-circle-line cart":""} onClick={() => addToCart(img)}></i>
            <i className={hovered &&  alreadyInCart?"ri-shopping-cart-fill cart":""}  onClick={() => removeFromCart(img.id)} ></i>
            <img src={img.url} className="image-grid"/>
        </div>
    )
}
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
