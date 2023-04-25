// import { getByTitle } from "@testing-library/react";
import React from "react";

const NewsItem=(props)=> {
    let { title, description, imageURL, newsURL, author, date, source } =props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0"
            }}
          >
            <span
              className=" badge rounded-pill bg-danger"
              // style={{ left: "85%" }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              !imageURL
                ? "https://english.cdn.zeenews.com/sites/default/files/2023/01/28/1146576-whatsapp-image-2023-01-27-at-1.43.52-pm.jpeg"
                : imageURL
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsURL}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
