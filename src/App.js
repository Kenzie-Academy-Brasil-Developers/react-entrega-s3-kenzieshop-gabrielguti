import { useHistory } from "react-router";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import Bag from "./assets/icons8-sacola-de-compras-48.png";
import Home from "./assets/icons8-house-64.png";
import "./styles.css";
function App() {
  const [control, setControl] = useState(true);
  const history = useHistory();
  const goCart = () => {
    if (control) {
      history.push("/cart");
      setControl(!control);
    } else {
      history.push("/");
      setControl(!control);
    }
  };

  return (
    <>
      <div className="header">
        <div className="headerTitle">
          <h1>Kenzie VôleiShop</h1>
          <button onClick={goCart}>
            {control ? (
              <img alt="bag" src={Bag}></img>
            ) : (
              <img alt="home" src={Home}></img>
            )}
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
