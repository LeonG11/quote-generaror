import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import ajax from "ajax";

function getQuotes() {
  const url =
    "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?";
  ajax({
    url: url,
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      method: "getQuote",
      lang: "ru",
      format: "jsonp",
    },
  });
}

export default function Main() {
  return (
    <div>
      <div className="quote">
        <div className="quote-text">
          <div className="quote-up-line">
            <FontAwesomeIcon icon={faQuoteLeft} fontSize="2rem" />
            <span className="quote-s">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
              ratione
            </span>
          </div>
          <div className="quote-author">
            <span id="author">Budda</span>
          </div>
          <div className="button-container">
            <button className="twitter" title="Tweet This">
              <FontAwesomeIcon icon={faTwitter} fontSize="1.5rem" />
            </button>
            <button
              className="new-quote"
              onClick={async () => {
                const url = "https://zenquotes.io/api/quotes/";
                try {
                  const response = await fetch(url, {
                    method: "GET",
                    headers: {
                      accept: "application/json",
                    },
                  });

                  if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                  }

                  const result = await response.json();
                  return result;
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Новая цитата
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
