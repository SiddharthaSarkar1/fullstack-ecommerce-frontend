import { Link } from "react-router-dom";
import { FaPlus, FaExpandAlt } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "myServername";

const ProductCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={`${server}/${photo}`} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div className="">
        <button onClick={() => handler()}>
          <FaPlus />
        </button>

        <Link to={`/product/${productId}`} className="view-product">
          <FaExpandAlt />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
