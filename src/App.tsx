// custom scss
import "./assets/sass/main.scss";
// toast scss
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// routes
import Routes from "./routes";

function App() {
  return (
    <section>
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        draggable
        theme="light"
      />
    </section>
  );
}

export default App;
