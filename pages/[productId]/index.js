import products from '../../data/products';
import ProductItem from './../../components/products/ProductItem';
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
        key={productDetails.id}
        id={productDetails.id}
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

export const getStaticPaths = async () => ({
  fallback: false,
  paths: products.map((p) => ({ params: { productId: p.id } })),
});

export const getStaticProps = async ({ params }) => {
  const productDetails = products.find((p) => p.id === params.productId);
  if (!productDetails) return { notFound: true };
  return { props: { productDetails } };
};
