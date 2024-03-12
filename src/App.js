import { Routes, Route } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import Login from "./components/auth/Login"
import ApplicationViews from "./views/ApplicationViews"
import Register from "./components/auth/Register.js";



function App() {
  return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='*' element={
          <Authorized>
            <ApplicationViews />
          </Authorized>  
          }
        />
      </Routes>
  );
}

export default App;
