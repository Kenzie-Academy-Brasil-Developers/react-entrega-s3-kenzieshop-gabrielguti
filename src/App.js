import Routes from "./routes";
import "./styles.css";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <div className="header">
        <div className="headerTitle">
          <h1><Link to = '/'>Kenzie VôleiShop</Link></h1>
          <button>
            <Link to="/cart">C</Link>
          </button>
        </div>
      </div>
      <section className="ListProducts">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Routes />
      </section>
    </>
  );
}

export default App;
