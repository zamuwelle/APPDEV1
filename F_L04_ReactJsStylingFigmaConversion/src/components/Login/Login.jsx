import logo from "../../assets/logo.svg";
import styles from "./Login.module.css";

export default function Login() {
    return (
        <main className={styles.layout}>
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign<br />
                    for your business?<br />
                    <strong>Design Spacee</strong><br />
                    will help you.
                </h1>
                <img className={styles.logo} src={logo} alt="Design Spacee logo" />
                <p className={styles.link}>figma.com/@designspacee</p>
            </section>
            <section className={styles.right}>
                <div className={styles.form}>
                    <h2>Sign-in</h2>
                    <input type="email" placeholder="Email" aria-label="Email" />
                    <input type="password" placeholder="Password" aria-label="Password" />
                    <button type="button">Login</button>
                    <p className={styles.switchScreen}>
                        Don't have an account? <a href="/signup">Signup Here</a>
                    </p>
                </div>
            </section>
        </main>
    );
}
