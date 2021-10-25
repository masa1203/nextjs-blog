import React from "react";

const Blog = (props) => {
  console.log(props);
  return (
    <div>
      <h1>ブログページ</h1>
      <a>{props.test}</a>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const testText = "Next.jsポートフォリオサイト";
  return {
    props: {
      test: testText,
    },
  };
}
