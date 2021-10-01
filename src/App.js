import Cart from "./components/cart";
import Products from "./components/products";
import "./styles.css";

function App() {
  return (
    <div className="central">
      <div className="header">
        <div className="headerTitle">
          <h1>Kenzie VôleiShop</h1>
          <button>
          </button>
        </div>
      </div>

      <section className="ListProducts">
        <Products />
      </section>
      {/* <div>
          <Cart />
        </div> */}
    </div>
  );
}

export default App;
