import Header from './Header'
import styles from "./Header.module.css"

const index = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.main}> {children} </div>
    </div>
  )
}

export default index;