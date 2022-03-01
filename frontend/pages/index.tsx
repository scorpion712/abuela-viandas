import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'; 

import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import FoodTable from '../components/GenericTable/GenericTable'; 
import HomePage from './HomePage'; 
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
    <HomePage />
  );
};

export default Home; 