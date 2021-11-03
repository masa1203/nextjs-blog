import React from "react";
import Link from "next/link";
import * as styles from "../styles/common.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.insideContainer}>
        <a href="https://www.google.com">
          <img src="/images/github.svg" alt="logp" />
        </a>
        <a href="https://www.google.com">
          <img src="/images/linkedin.svg" alt="logp" />
        </a>
        <a href="https://www.google.com">
          <img src="/images/twitter.svg" alt="logp" />
        </a>
        <a href="https://www.google.com">
          <img src="/images/facebook.svg" alt="logp" />
        </a>
        <hr />
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <p>c{new Date().getFullYear()}Sawada Masayoshi</p>
      </div>
    </footer>
  );
};

export default Footer;
