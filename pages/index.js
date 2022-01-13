import Head from "next/head";
import { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";
import profile from "../public/images/david.jpg";

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
    <div className="m-5">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex place-content-center gap-1 ">
        <div className=" box-content w-auto h-auto bg-black">
          <Image src={profile} height={500} width={300} />
        </div>
        <div className=" w-auto h-auto text-xs font-serif p-3 border-8">
          <h1 className="font-semibold p-top-4">Hey, I'm Noora</h1>
          <p className="font-thin leading-relaxed text-center w-40">
            I'm Noora Yaqub. I'm working with newest front-end frameworks like
            Angular, React and Vue.
            I graduated from Salahaddin University, Erbil with a Bachelor
            of Software engineering.
             I'm an Honors graduate from Recoded Coding Bootcamp with a
            focus on learning Reactjs. 
            I have experience building websites from the ground up
            using plain HTML, CSS, and JavaScript but also using more advanced
            frameworks and technologies like React, and Bootstrap to take my
            websites to the next level. Designing and building websites are my
            passion and I want to bring designs to life for the world to see.
            Thank you 💜
          </p>
        </div>
      </div>
    </div>
  );
}
