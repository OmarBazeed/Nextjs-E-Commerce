import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  console.log(products)
  return (
    <div>
      {products.map((product) => {
        console.log(product.id);
        console.log(product.name);
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
