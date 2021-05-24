/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post() {
  return (
    <>
      <Head>
        <title>Post title | spacetraveling.</title>
      </Head>

      <Header />

      <main className={commonStyles.container}>
        <article className={styles.post}>
          <h1>Criando um app CRA do zero</h1>
          <div className={styles.info}>
            <FiCalendar />
            <time>16 de Abril de 2021</time>
            <FiUser />
            <span>Igor Barbosa</span>
            <FiClock />
            <span>4 min</span>
          </div>
          <div
            className={styles.postContent}
            // dangerouslySetInnerHTML={{ __html: post.content }}
          >
            <h2>Subtitulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit facilis eligendi pariatur libero sunt corrupti, dolorum praesentium nulla voluptate odit amet voluptatem necessitatibus dolore molestiae, recusandae sed? Nisi, animi.</p>
          </div>
        </article>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
