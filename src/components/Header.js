import React from "react";
import { headerContent, myInfoContent, infos } from "../utils/variables";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__content">
          <div>
            <h1>{headerContent.title}</h1>
            <p>{headerContent.text}</p>
          </div>
          <ul>
            <li>
              <a href="https://github.com/tac0de" target="blank">
                Github
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="https://tac0de.github.io" target="blank">
                Dev Blog
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="mailto:wonyoungchoiseoul@gmail.com">Email</a>
            </li>
          </ul>
        </div>

        <div className="my-info">
          <h1>{myInfoContent.title}</h1>
          {infos}
        </div>
      </div>
    </header>
  );
}

export default Header;
