import Head from 'next/head';
import ProductList from '../components/products/ProductList';
import { Fragment } from 'react';
import { dbConnect } from './../utils/mongo';
import Product from './../models/Product';



// const products = [
//   { id: 1, image: "https://images.pexels.com/photos/2714463/pexels-photo-2714463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "this is apple", price: 20 },
//   { id: 2, image: "https://images.pexels.com/photos/3429784/pexels-photo-3429784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "this is watermelon", price: 18 },
//   { id: 3, image: "https://images.pexels.com/photos/4562968/pexels-photo-4562968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "this is strawbery", price: 25 },
// ];

const HomePage = ({ products }) => {

  return (
    <Fragment>
      <Head>
        <title> Products</title>
        <meta name='description' content="Brwose New Products" />
        <link rel="shourtcut icon" href='favicon.ico' />
      </Head>

      <ProductList products={products} />
    </Fragment>
  )
}

export default HomePage;

//! This is The First Way To Use getStaticProps(context) Fun  /** But We Use It Recommandly When We Deal With Static Informations **/  And We Use It With getStaticPaths(context) Fun /** When We Deal With Dynamic Path Or Page **/ 

//! Using getStaticProps (SSG => Static Side Generation) --->  */revalidate:__/* ---> (ISG => Incremental Side Generation ) 
// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/products").then(res => res.json());
//   const products = res.data;
//   return {
//     props: {
//       products
//     },
//     revalidate: 1,
//   }
// }


//! This Is The Second Way To Use getServerSideProps() Fun /** But We Use It Recommandly When We Deal With Dynamic Informations And It Is Faster Than getStaticProps() **/

//! Using getServerSideProps (SSR => Server Side Rendering)...
export async function getServerSideProps() {

  //* Because Of getServerSideProps() Fun Goes Or Occurs In The Server We Have't Call The Endpoint( Which Is Created By The Server Itself So If We Called The Endpoint We Are Calling The Server Again Or Loopy Call ) So In The Server We Have To Access The Database Directly By Call the dbConnect() Fun The Bring THE Products From The models.Product..
  dbConnect();
  const products = await Product.find();

  //* Here We Are Fetching The Data From The Endpoint Which Is Created In The Server And The getServerSideProps() Fun Occurs In The Server So It Is Loopy Call !!! NOT CORRECT ..SO We Have To Access the Database Not Access The Endpoint ....As Shown
  // const res = await fetch(`${process.env.APP_DEV || process.env.APP_PROD}/api/products`).then(res => res.json());
  // const products = res.data;

  return {
    props: {
      //? Here We Have To Formate The Data Which Is Backed From The Database(MongoDB) Cause The id--> Is Returned As An Object So We Have To Reformate It As A String ( tostring() )  
      //* هنا لازم نعمل فورماتينج للداتا الى راجعه من المونج دى لان ال اى دى بيكون راجع على شكل اوبجيكت و دا  ممكن يعمل مشاكل فى الريندر ف كان لابد من عمل الفورماتينج للداتا الى راجعه دى ولو استخدمناها من غير فورماتينج  مش هتشتغل ... 
      products: products.map((product) => ({
        image: product.image,
        name: product.name,
        price: product.price,
        desc: product.desc,
        id: product._id.toString(),
      })),
    },
  };
}
