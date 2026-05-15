import { useNavigate } from "react-router-dom"
import Button from "../components/Button";

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
          <Button
            variant="primary"
            onClick={() => navigate("/products")}
          >
            View Products
          </Button>

          <Button
            variant="secondary"
            onClick={() => navigate("/add-product")}
          >
            Add Product
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
