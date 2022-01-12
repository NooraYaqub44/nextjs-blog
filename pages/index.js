import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello My name is Noora Yaqub I'm a Frontend Developer.</p>
        <p>
          I use technologies like React, Next, Redux, Chakra-ui, Tailwand-CSS,
          JavaScript, HTML5, CSS3, I graduated from Salahaddin University, Erbil
          with a Bachelor of Software engineering. I'm an Honors graduate from
          Recoded Coding Bootcamp with a focus on learning Reactjs. I have
          experience building websites from the ground up using plain HTML, CSS,
          and JavaScript but also using more advanced frameworks and
          technologies like React, and Bootstrap to take my websites to the next
          level. Designing and building websites are my passion and I want to
          bring designs to life for the world to see.
        </p>
        <h3>GitHub:
        <a href="https://github.com/NooraYaqub44">Noora Yaqub</a></h3>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
