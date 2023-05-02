import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            desc={product.desc}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
