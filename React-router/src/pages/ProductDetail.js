import { useParams } from "react-router";

function ProductDetail(props) {
  const params = useParams();
  console.log(params.productId);
  return (
    <div>
      <h2>Product Detail</h2>
      <p>{params.productId}</p>
    </div>
  );
}

export default ProductDetail;
