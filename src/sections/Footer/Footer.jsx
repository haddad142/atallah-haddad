import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p className={styles.copyright}>
        &copy; 2024 Atallah Haddad. <br />
        All rights reserved.
      </p>
      <p className={styles.inspiredBy}>
        Inspired by{" "}
        <a href="https://www.youtube.com/@howtobecomeadeveloper">
          How to Become a Developer
        </a>{" "}
        channel on YouTube
      </p>
    </section>
  );
}

export default Footer