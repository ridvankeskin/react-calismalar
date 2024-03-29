import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import FilterArea from "../components/FilterArea";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams] = useSearchParams();

  // url deki arama parametrelerine eriş
  const order = searchParams.get("sırala");
  const query = searchParams.get("aramaTerimi");

  // bileşenin ekrana basılma anında çalışır.
  useEffect(() => {
    // api ye gönderilecek olan parametreleri belirle
    const params = {
      _sort: "title",
      _order: order === "z-a" ? "desc" : "asc",
      q: query,
    };
    // apiden kitap verilerini al state e aktar.
    axios
      .get("http://localhost:3040/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order, query]);

  return (
    <div className="flex-grow-1 p-4">
      <h3>{books?.length} kitap bulundu</h3>
      <FilterArea />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-5 mt-3">
        {books?.map((book) => (
          <div key={book.id} className="col">
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
