import logo from "../../assets/logo.svg";
import styles from "./SignUp.module.css";

export default function SignUp() {
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
                    <h2>Create Account</h2>
                    <div className={styles.socialButtons}>
                        <button type="button" className={styles.socialButton}>Sign up with Google</button>
                        <button type="button" className={styles.socialButton}>Sign up with Facebook</button>
                    </div>
                    <p className={styles.divider}><span>OR</span></p>
                    <input type="text" placeholder="Full Name" aria-label="Full Name" />
                    <input type="email" placeholder="Email" aria-label="Email" />
                    <input type="password" placeholder="Password" aria-label="Password" />
                    <button type="button">Create Account</button>
                    <p className={styles.switchScreen}>
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
            </section>
        </main>
    );
}
