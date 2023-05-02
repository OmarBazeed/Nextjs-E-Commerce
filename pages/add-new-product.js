import { Fragment } from 'react'
import AddNewProduct from '../components/products/AddNewItem'
import Head from 'next/head';
const Add = () => {
  return (
    <Fragment>
      <Head>
        <title> Add New Items </title>
        <meta name="description" content="Add And Build Your E-commerce Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AddNewProduct />
    </Fragment>
  )
}

export default Add;