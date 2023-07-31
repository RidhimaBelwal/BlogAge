import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="flex flex-col md:flex-row border my-3 border-slate-950 rounded mx-5">
      <div className="md:w-1/2 md:max-w-md">
        <Link to={`/post/${_id}`}>
          <img
            src={"http://localhost:4000/" + cover}
            alt=""
            className="w-full h-auto md:h-full object-cover"
          />
        </Link>
      </div>
      <div className="md:w-3/4 md:pl-4 font-Signika font-medium">
        <h2 className="text-3xl font-semibold my-2 font-Signika">
          {title.toUpperCase()}
        </h2>
        <p className="text-gray-700 overflow-hidden md:overflow-visible">
          <a className="text-fuchsia-900 mb-4 text-base font-extrabold mr-2">
            By {author.username.toUpperCase()}
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="text-gray-700 overflow-hidden md:overflow-visible">
          {summary}
        </p>
        <span className="text-gray-700 overflow-hidden md:overflow-visible mr-2 font-light">
          {content
            .slice(3, 200)
            .replace("&nbsp", " ")
            .replace("<em>", " ")
            .replace("</em>", " ")
            .replace("&nbsp;", " ")
            .replace("</p>", " ")
            .replace("&amp;","&")
            .replace("<p>"," ")}
        </span>
        <Link to={`/post/${_id}`} className="text-blue-500 mt-2 hover:text-blue-700">
          Read More...
        </Link>
      </div>
    </div>
  );
}
