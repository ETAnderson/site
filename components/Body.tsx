import Image from "next";
import { Display } from "../typings";

function Body({ image, articles }: Display) {
  return (
    <div className="grid gap-5 grid-cols-1 mb-5 md:grid-cols-3 mx-5">
      <img
        className="rounded-2xl shadow-md place-self-center"
        src={image}
        alt=""
      />
      {articles.map((article) => (
        <article
          key={article.title}
          className="text-white max-w-1/3 p-5 bg-[#06202A] dark:bg-gray-900 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl mb-2">{article.title}</h2>
          <p>{article.text}</p>
        </article>
      ))}
    </div>
  );
}

export default Body;
