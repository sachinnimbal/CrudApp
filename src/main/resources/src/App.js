import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeader from "./layout/NavHeader";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavHeader />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addUser" element={<AddUser />} />
          <Route exact path="/editUser/:id" element={<EditUser />} />
          <Route exact path="/viewUser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
