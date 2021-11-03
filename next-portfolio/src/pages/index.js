import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import * as styles from "../styles/index.module.scss";

const Index = () => {
  return (
    <Layout>
      <div className={styles.hero}>
        <Image
          src="/images/index-hero.jpg"
          alt="hero"
          layout="fill"
          objectFit="conver"
          quality={90}
        />
        <div className={styles.textContainer}>
          <h1>Sawada Masayoshi</h1>
          <h3>Soft Engineer</h3>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.profile}>
          <h2>JavaScript Nerd</h2>
          <p>なんか自己紹介文がここでつらつらと流れる</p>
        </div>
      </div>
      <Image
        src="/images/profile.jpg"
        alt="hero"
        height={1195}
        width={1000}
        quality={90}
      />
      <div className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skillsContainer}>
          <div>
            <img src="/images/javascript.svg" alt="javascript" />
            <span>JavaScript / 10years</span>
          </div>
          <div>
            <img src="/images/react.svg" alt="react" />
            <span>React / 10years</span>
          </div>
          <div>
            <img src="/images/next.svg" alt="next" />
            <span>Next / 10years</span>
          </div>
        </div>
        <div className={styles.ctaButton}>
          <Link href="/contact">
            <a>Make it Happen!</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
