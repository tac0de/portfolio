import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__content">
          <p>&copy;{new Date().getFullYear()} Won Choi</p>
          <p>
            Made by {""}
            <a
              href="https://github.com/tac0de"
              target="blank"
              style={{ color: "#525557", fontWeight: 700 }}
            >
              tac0de
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
