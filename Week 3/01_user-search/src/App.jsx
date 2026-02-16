import SearchBar from "./components/searchBar";
import ProductList from "./components/ProductList";
import useSearch from "./hooks/useSearch";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Tablet", price: 15000 },
    { id: 4, name: "Keyboard", price: 1000 },
    { id: 5, name: "Mouse", price: 500 },
  ];

  const { searchTerm, setSearchTerm, filteredData } =
    useSearch(products, "name");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Search</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProductList
        products={filteredData}
        totalCount={products.length}
      />
    </div>
  );
}

export default App;
