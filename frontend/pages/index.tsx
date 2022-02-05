import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <ul>
          <li>Item1</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
