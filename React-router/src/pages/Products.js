import { Link } from "react-router-dom";

function Product() {
  return (
    <section>
      <h2>List of products</h2>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
}

export default Product;
