import styles from "./Footer.module.scss";
const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return <div className={styles.footer}>
        &copy; {currentYear}  All Rights Reserved
    </div>
}

export default Footer;