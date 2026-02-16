const ProductList = ({ products, totalCount }) => {
  return (
    <>
      <p>
        Showing {products.length} of {totalCount} products
      </p>

      {products.map((product) => (
        <p key={product.id}>
          {product.name} - ₹{product.price}
        </p>
      ))}
    </>
  );
};

export default ProductList;
