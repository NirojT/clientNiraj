import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Dashboard from "./pages/dashboard/dashboard";
import Beverage from "./pages/beverage/beverage";
import SignIn from "./pages/auth/signin/signin";
import Register from "./pages/auth/register/register";
import POS from "./pages/pos/pos";
// https://cdn.dribbble.com/users/683192/screenshots/9706446/media/f6606ce9f7f32a7c84cb33ece901b8b1.png
function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          {/* the landing page for the admin */}
          <Route path="" element={<Dashboard />} />
          <Route path="beverage" element={<Beverage />} />
          <Route path="pos" element={<POS />} /> {/* the payment page*/}
        </Route>
      </Routes>
    </>
  );
}

export default App;
