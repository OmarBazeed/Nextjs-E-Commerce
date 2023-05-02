// import Product from './../../models/Product';
// import { mongoose } from 'mongoose';
import ProductItem from './../../components/products/ProductItem';
import { dbConnect } from './../../utils/mongo';
import Product from './../../models/Product';
import { Fragment } from 'react';
import Head from 'next/head';

const ProductDetailsPage = ({ productDetails }) => {

  return (
    <Fragment>
      <Head>
        <title>Know More About Your Items </title>
        <meta name="description" content="Product details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductItem
        key={productDetails._id.toString()}
        id={productDetails._id.toString()}
        image={productDetails.image}
        name={productDetails.name}
        price={productDetails.price}
        desc={`New / ${productDetails.desc}`}
      />
    </Fragment>
  )
}
export default ProductDetailsPage;



// احنا هنا لازم نستخدم ال(جيت ستاتيك باثز) مع ال (جيت ستاتيك بروبس) لان الباث هنا ديناميك او متغير ف كان لابد من تحديد عدد الباثز او الارقام بتاعهم علشان مش اى باث يتكتب يروح المتصفح ليه على الفاضى انما بتحديد الباثز احنا بنتجنب المشكله دى .. و احنا عارفين ان ال(جيت ستاتيك بروبس) بنستخدمها علشان نفتش داتا ممن اى بى اى مثلا و بعدين نمررها ك بروبس للباث او الكومبوننت الى بيعرضه الباث دا بس المشكله بتعها انها بتتطلب ريبلد علشان تجدد الداتا الى بتتعرض و كان من احد حلولها هى ال(رى فاليديت : بعدد ثوانى) بس دا اكيد مش احسن حل موجود

export const getStaticPaths = async () => {

  //* Connect to database to get products ids  ** Oridanry Way (Fetching Data From Endpoint) **
  // const res = await fetch(`${process.env.APP_DEV || process.env.APP_PROD}/api/products`).then(res => res.json())
  // const ids = res.data.map(product => {
  //   return { params: { productId: product._id } }
  // })

  //* Connect to database to get products ids  ** This Way By Connecting To The Database In MongoDB  **
  dbConnect();
  const products = await Product.find({}, { _id: 1 });
  const ids = products.map(product => { return { params: { productId: product._id.toString() } } })

  return {
    // to only apply the selected/determined ids from the database So other paths Will Appear 404 ! 
    fallback: false,
    paths: ids
  }
}



export const getStaticProps = async (context) => {

  const { productId } = context.params

  //* Then Select Product From Database ** Ordinary Way (Fetching Data From Endpoint) **
  const res = await fetch(`${process.env.APP_DEV || process.env.APP_PROD}/api/products`).then(res => res.json());
  const productDetails = res.data
    .filter(product => product._id === productId)[0];


  //* Then Select Product From Database ** This Way Manges Us To Access The Database Of mongoDB So We Use The Product(==> models.Product)  **
  // const productDetails = await Product.findById({
  //   _id: new mongoose.Types.ObjectId(productId),
  // });

  return {
    props: {
      productDetails
    },
    revalidate: 1
  }
}
//* When We Use revalidate:number In getStaticProps() Fun It Is Called (ISG)==> Incremental Static Regeneration ...  