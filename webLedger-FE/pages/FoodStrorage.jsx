import axios from "axios";
import { useState } from "react";

export const FoodStorage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const api = axios.create({
    baseURL: `https://api.spoonacular.com/recipes/complexSearch?apiKey=44b5810fc44942ada1c56bbade91813c&query=`,
  });

  const handleInputSearch = async (e) => {
    e.preventDefault();
    try {
      
      const response = await api.get(searchQuery);
      setResults(response.data.results);
      setSearchQuery("")
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <section>
        <div className="container food-item--result">
          <form onSubmit={handleInputSearch}>
            <label htmlFor="search--food">What is your mind .. .</label>
            <br />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What is in your fridge"
            />
            <button type="submit">😋</button>
          </form>

          <div className="container food-container">
            {results.map((currentItem, index) => {
              return (
                <div key={index} className="box">
                  <h1>{currentItem.title}</h1>
                  <img src={currentItem.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
