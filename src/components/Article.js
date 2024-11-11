import React from "react";

function Article({ title, date = "January 1, 1970", preview, readingTime }) {
  const readingIndicator = () => {
    if (readingTime < 30) {
      const coffeeCups = Math.ceil(readingTime / 5);
      return `☕️`.repeat(coffeeCups) + ` ${readingTime} min read`;
    } else {
      const bentoBoxes = Math.ceil(readingTime / 10);
      return `🍱`.repeat(bentoBoxes) + ` ${readingTime} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{readingIndicator()}</small>
    </article>
  );
}

export default Article;