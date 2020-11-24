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
            <li>
              <a href={linkToSite} target="blank">
                Visit {isRepo ? "Site" : "Store"}
              </a>
            </li>
            {isRepo && (
              <li>
                <a href={linkToRepo} target="blank">
                  Github Repo
                </a>
              </li>
            )}
          </ul>
          {!isRepo && (
            <div>
              <img
                src="https://images.unsplash.com/photo-1605639649750-584b3d9a5522?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                alt="Dummy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Section;
