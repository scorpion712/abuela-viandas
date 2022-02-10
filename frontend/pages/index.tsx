import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import FoodTable from '../components/Table/EnhancedTable';
import FoodPage from './FoodPage';

const Home: NextPage = () => {
  return (
    // <Layout>
    //   <div>
    //     <div>
    //       <ul>
    //         <li>Item1</li>
    //       </ul>
    //     </div>
    //     <FoodTable />
    //   </div>
    // </Layout>
    <FoodPage></FoodPage>
  );
};

export default Home;
