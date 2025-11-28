import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Vérifiez bien l'orthographe ici (Prodct vs Product) selon votre fichier context
import { OrderProvider } from "./context/orderContext";
import { ProdctProvider } from "./context/productContext"; 
import { ProductProvider as CreateProductProvider } from "./context/CreateContext"; 
import Sider from "./Sides/sider";
import Login from "./Login/login";
import Orders from "./Sides/Orders";
import Products from "./Sides/Products";
import CreateProduct from './Sides/NewProduct';

// CORRECTION ICI : Pas d'accolades pour un export default
import ProtectedRoute from './protectedRoute';

function App() {
  return (
    <BrowserRouter>
    <Sider/>
      <OrderProvider>
        <ProdctProvider>
          <CreateProductProvider>
            
            <Routes>
              <Route path="/" element={<Login />} />

              <Route 
                path="/orders" 
                element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                } 
              />

              <Route 
                path="/Product" 
                element={
                  <ProtectedRoute>
                    <Products />
                  </ProtectedRoute>
                } 
              />

              <Route 
                path="/create" 
                element={
                  <ProtectedRoute>
                    <CreateProduct />
                  </ProtectedRoute>
                } 
              />
            </Routes>

          </CreateProductProvider>
        </ProdctProvider>
      </OrderProvider>
    </BrowserRouter>
  );
}

export default App;