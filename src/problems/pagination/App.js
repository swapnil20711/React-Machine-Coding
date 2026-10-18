"use client";

import { useEffect, useState } from "react";
import { Pagination } from "./components/Pagination";
import { ProductCard } from "./components/ProductCard";
import { PAGE_SIZE } from "./constants";
import "./styles.css";


export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * PAGE_SIZE;
  // 10+10 = 20
  const end = start + PAGE_SIZE;
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500")
    const json = await data.json();
    setProducts(json.products);
    // console.log('json is : ', json);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const handlePrevClick = () => {
    setCurrentPage((prev) => prev - 1);
  }

  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  }
  return (
    !products.length ? <h1>No products found!</h1> : <div>
      <h1>Pagination</h1>
      <div className="product-container">
        {products.slice(start, end).map((product, index) => (<ProductCard image={product.thumbnail} title={product.title} />))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        noOfPages={noOfPages}
      />
    </div >
  );
}
