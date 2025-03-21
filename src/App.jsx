import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data_products from "./Data_products";
import Data_posts from "./Data_posts";
import Data_carts from "./Data_carts";
import Images from "./Images";
import UpdateImage from "./UpdateImage";





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
          <Route path="/products" element={<Data_products/>}></Route>
          <Route path="/posts" element={<Data_posts/>}></Route>
          <Route path="/carts" element={<Data_carts/>}></Route>
          <Route path="/images/:id?" element={<Images/>}></Route>
          <Route path="/images/update/:id" element={<UpdateImage/>}></Route>
         
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
