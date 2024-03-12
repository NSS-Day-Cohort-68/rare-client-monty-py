import { Routes, Route } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import Login from "./components/auth/Login"
import ApplicationViews from "./views/ApplicationViews"


function App() {
  return (
      <Routes>
        <Route path="/"
              element={
                <>
                  <Navbar />
                  <Outlet />
                </>
              }
        >
          <Route path='/login' element={<Login />} />
          <Route path='*' element={
            <Authorized>
              <ApplicationViews />
            </Authorized>  
            }
          />
        </Route>
      </Routes>
  );
}

export default App;
