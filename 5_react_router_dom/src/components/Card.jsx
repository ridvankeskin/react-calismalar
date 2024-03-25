import { Link } from "react-router-dom";

Link;
const Card = ({ book }) => {
  return (
    <div className="card shadow p-1">
      <img src={book.image} />

      <div>
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
      </div>
      <Link to={`/ürün/${book.id}`} className="btn btn-primary w-100" id="btn-detay">
        Detay Gör
      </Link>
    </div>
  );
};

export default Card;
