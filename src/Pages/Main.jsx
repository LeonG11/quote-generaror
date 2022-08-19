import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Main() {
  const [quote, setQuote] = useState("hello");
  const [author, setAuthor] = useState("world");
  useEffect(() => {
    fetch("https://api.quotable.io/random/")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, []);

  let quotesDataOnClick = () => {
    fetch("https://api.quotable.io/random/")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  return (
    <div>
      <div className="quote">
        <div className="quote-text">
          <div className="quote-up-line">
            <FontAwesomeIcon icon={faQuoteLeft} fontSize="2rem" />
            <span className="quote-s">{quote}</span>
          </div>
          <div className="quote-author">
            <span id="author">{author}</span>
          </div>
          <div className="button-container">
            <button
              className="twitter"
              title="Tweet This"
              onClick={() => {
                window.open(
                  `https://twitter.com/intent/tweet?text=${quote} - ${author}`,
                  "_blank"
                );
              }}
            >
              <FontAwesomeIcon icon={faTwitter} fontSize="1.5rem" />
            </button>
            <button className="new-quote" onClick={quotesDataOnClick}>
              New quotes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
