import {createPortal}  from 'react-dom';
import styles from "./Loader.module.scss";
import loaderImage from "../../assets/play.gif";



const Loader = () => {
  return  createPortal(
    <div className={styles.wrapper}>
    <div className={styles.loader}>
  
    <img src={loaderImage} alt="loader" width={40}/>
    </div>
    </div>,
    document.getElementById("loader")
  ) 
 
};
export const Spinner = () => {
  return (
    <div className="--center-all">
          <img src={loaderImage} alt="loader" />
      </div>
  )
}

export default Loader;
