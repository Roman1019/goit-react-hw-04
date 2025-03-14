import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { fetchArticles } from "../../articleSearch.js";
import "./App.css";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import ClipLoader from "react-spinners/ClipLoader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";

export default function App() {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(1);

  const handleSearch = (search) => {
    setSearchTerm(`${search}/${Date.now()}`);

    setPage(1);
    setArticles([]);
  };

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchArticles(searchTerm.split("/")[0], page);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data];
        });
        console.log(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [searchTerm, page]);

  return (
    <section>
      <SearchBar onSearch={handleSearch} />

      <Toaster position="top-right" />
      {isLoading && (
        <div className="loaderDiv">
          <ClipLoader
            color="blue"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}

      {error && <b>Whops there was an error please reload...</b>}

      {articles.length !== 0 && <ImageGallery items={articles} />}
      {articles.length > 0 && (
        <button onClick={() => setPage(page + 1)}> Load more{page}</button>
      )}
    </section>
  );
}
