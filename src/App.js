import DashboardPage from './components/Dashboard/DashboardPage';
import LoginPage from './components/Login/LoginPage';
import AddProduct from './components/AddProduct/AddProduct';
import ViewProduct from './components/ViewProduct/ViewProduct';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './components/Context/AuthContext';
import ProtectedRoute from './components/Context/ProtectedRoute';
import './App.css';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Routes>
        <Route
          path="/"
          element={<DashboardPage />}
        ></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/addProduct" element={<ProtectedRoute><AddProduct /></ProtectedRoute>}></Route>
          <Route path="/viewProduct/:id" element={<ViewProduct />}></Route>
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
