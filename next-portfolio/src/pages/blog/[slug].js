import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const SingleBlog = (props) => {
  return (
    <div>
      <h1>{props.frontformatter.title}</h1>
      <p>{props.frontformatter.date}</p>
      <ReactMarkdown children={props.markdownBody} />
    </div>
  );
};

export default SingleBlog;

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      return slug;
    });
    return data;
  })(require.context("../../data", true, /\.md$/));
  const paths = blogSlugs.map((blogSlug) => `/blog/${blogSlug}`);
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const data = await import(`../../data/${slug}.md`);
  const singleDocument = matter(data.default);
  return {
    props: {
      frontformatter: singleDocument.data,
      markdownBody: singleDocument.content,
    },
  };
}
