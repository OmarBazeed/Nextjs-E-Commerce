import { useRef } from 'react'
import styles from "./AddItem.module.css"
import Card from '../ui/Card';
import axios from 'axios';
import { useRouter } from 'next/router';
const AddNewProduct = () => {

  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/products", {
      name: nameRef.current.value,
      desc: descRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value
    });
    router.push("/")
  }

  return (
    <Card>
      <form className={styles.add} onSubmit={handleSubmit}>
        <label className={styles.lab} htmlFor='name'> Name</label>
        <input type="text" className={styles.input} id="name" placeholder='Enter The Name' required name='name' ref={nameRef} />

        <label className={styles.lab} htmlFor='pic'> Picture</label>
        <input type="url" className={styles.input} id="pic" placeholder='Enter The Picture URL' required name='name' ref={imageRef} />

        <label className={styles.lab} htmlFor='price'> Price</label>
        <input type="number" className={styles.input} id="price" placeholder='Enter The Name' required name='price' ref={priceRef} />

        <label className={styles.lab} htmlFor='area'> Description</label>
        <textarea cols={55} rows={10} id='area' placeholder='Enter The Description' className={styles.textarea} ref={descRef} required />

        <input type="submit" className={styles.sub} value='Add Item' />
      </form>
    </Card>
  )
}

export default AddNewProduct;