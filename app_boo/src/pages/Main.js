import React from "react";
import { Container } from "react-bootstrap";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import ListProduct from "./ListProduct";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import ViewProduct from "./ViewProduct";

const Main = () => (
    <main>
        <Container>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={<ListProduct />} />
                <Route exact path="/products/new_product" element={<AddProduct />} />
                <Route exact path="/products/edit/:id" element={<EditProduct />} />
                <Route exact path="/products/view/:id" element={<ViewProduct />} />
            </Routes>
        </Container>
    </main>
);
export default Main;