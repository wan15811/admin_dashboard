import Single from "../../components/single/Single";
import { singleProduct } from "../../data"; // Ensure this is correctly importing your data
import "./product.scss";

const Product = () => {
  // Use the first product from singleProduct array
  const product = singleProduct[0];

  return (
    <div className="product">
      <Single
        id={product.id}
        title={product.productName}
        info={product.info}
        chart={product.chart}
        activities={product.activities}
      />
    </div>
  );
};

export default Product;
