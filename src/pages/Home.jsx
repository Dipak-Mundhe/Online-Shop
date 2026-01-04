import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);

        // Extract unique categories
        const uniqueCats = [...new Set(data.products.map((p) => p.category))];
        setCategories(uniqueCats);
      });
  }, []);

  return (
    <div className="home m-5">
      {/* Hero Section */}
      <section className="banner text-center">
        <h1 className="fs-1 fs-md-2 fs-sm-3">Welcome to OnlineShop</h1>
        <p>Best Deals Everyday. Shop Now!</p>
        <Link to="/productpage" className="no-link-style">
          <button className="btn btn-primary mt-3">Shop Now</button>
        </Link>
      </section>

      {/* Categories Section */}
      <section className="categories container text-center mt-5">
        <h2>Shop by Category</h2>
        <div className="row mt-4 justify-content-center">
          {categories.slice(0, 4).map((cat, index) => (
            <div key={index} className="col-md-2 col-sm-6 col-12 category-card">
              <Link to="/productpage" className="no-link-style">
                {cat.toUpperCase()}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section (only 3) */}
      <section className="featured container text-center mt-5">
        <h2>Featured Products</h2>
        <div className="row mt-4 justify-content-center">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="col-md-3 col-10 product-card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid"
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <Link to="/productpage" className="no-link-style">
                View All Products
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Section (Shoes, Mens-Shirts, Furniture) */}
      <section className="trending container text-center mt-5">
        <h2>Trending Now</h2>
        <div className="row mt-4 justify-content-center">
          {products
            .filter(
              (p) =>
                p.category === "mens-shoes" ||
                p.category === "mens-shirts" ||
                p.category === "furniture"
            )
            .slice(0, 6) // limit to first 6 items
            .map((product) => (
              <div key={product.id} className="col-md-2 col-6 product-card">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="img-fluid"
                />
                <p>{product.title}</p>
                <span>${product.price}</span>
                <br />
                <Link to="/productpage" className="no-link-style">
                  Shop Now
                </Link>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
