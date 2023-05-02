/* eslint-disable @next/next/no-img-element */

import ProductItem from "./ProductItem"

const ProductDeatils = ({ _id, image, name, desc, price }) => {

    return (
        <ProductItem
            key={_id}
            id={_id}
            image={image}
            name={name}
            price={price}
            dec={desc}
        />
    )
}

export default ProductDeatils