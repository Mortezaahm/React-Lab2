import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="home__hero">
        <h1 className="home__title">
          Product Admin Panel
        </h1>

        <p className="home__description">
          Manage your products easily.
          Add, edit and remove items from your catalog.
        </p>

        <div className="home__cta">
          <button
            className="btn btn--primary"
            onClick={() => navigate("/products")}
          >
            View Products
          </button>

          <button
            className="btn btn--secondary"
            onClick={() => navigate("/add-product")}
          >
            Add Product
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
