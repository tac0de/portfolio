import React from "react";

function Section({
  title,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  linkToRepo,
  linkToSite,
  isRepo = true,
}) {
  return (
    <section>
      <div className="container">
        <div className="section__content">
          <div>
            <h1>{title}</h1>
            <p>{firstParagraph}</p>
            <p>{secondParagraph}</p>
            <p>{thirdParagraph}</p>
          </div>
          <ul>
            {isRepo && (
              <li>
                <a href={linkToSite} target="_blank">
                  Visit Site
                </a>
              </li>
            )}
            {isRepo && (
              <li>
                <a href={linkToRepo} target="_blank">
                  Github Repo
                </a>
              </li>
            )}
          </ul>
          {!isRepo && (
            <div className="image-wrapper">
              <img src="./gifs/goodquotes_01.gif" alt="Good Quotes Gif 1" />
              <img src="./gifs/goodquotes_02.gif" alt="Good Quotes Gif 2" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Section;
