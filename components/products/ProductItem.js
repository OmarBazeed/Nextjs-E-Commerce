/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Card from "../ui/Card";
import styles from "./ProductItem.module.css";
// import Image from "next/image";

const ProductItem = ({ id, image, price, name, desc }) => {

  const router = useRouter();
  const handleClick = () => {
    router.push(`/${id}`);
  };


  return (
    <div>
      <Card>

        {/* For Optimizing Images Sizes In React To Make It Small For Quick Re-Rendering */}
        {/* <Image src={image} alt={name} height={200} width={200} Or fill={true} /> */}

        <img src={image} alt="..." className={styles.img} />
        <p> {desc} </p>
        <p> $ {price}  </p>
        <button className={styles.btn} onClick={handleClick} disabled={router.pathname === "/" ? false : true}>
          More Details
        </button>

      </Card>
    </div>
  );
};

export default ProductItem;
