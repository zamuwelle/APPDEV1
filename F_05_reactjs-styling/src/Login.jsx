import React from 'react';
import styles from './Login.module.css';
import leafBanner from './assets/leaf-banner.png';

function Login() {
  return (
    <div className={styles.page}>
      <aside className={styles.banner}>
        <img
          src={leafBanner}
          alt="Watercolor botanical leaves"
          className={styles.bannerImage}
        />
      </aside>

      <main className={styles.main}>
        <div className={styles.content}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.greeting}>Hello</span>
              <span className={styles.comma}>,</span>{' '}
              <span className={styles.recipient}>Guyss!</span>
            </h1>
          </header>

          <div className={styles.tabsWrapper}>
            <nav className={styles.tabs}>
              <div className={`${styles.tab} ${styles.activeTab}`}>Login</div>
              <div className={styles.tab}>SignUp</div>
            </nav>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
                readOnly
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Enter Password"
                className={styles.input}
                readOnly
              />
            </div>

            <button type="button" className={styles.loginButton}>
              Login
            </button>

            <div className={styles.socialSection}>
              <p className={styles.divider}>Or</p>
              <div className={styles.socialIcons}>
                <span className={styles.icon} aria-label="Google">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                </span>

                <span className={styles.icon} aria-label="Facebook">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#1877F2"
                      d="M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 26.9841 6.58237 34.4309 15.1875 35.7813V23.2031H10.6172V18H15.1875V14.0344C15.1875 9.52312 17.8748 7.03125 21.9866 7.03125C23.9561 7.03125 26.0156 7.38281 26.0156 7.38281V11.8125H23.7459C21.51 11.8125 20.8125 13.2002 20.8125 14.6238V18H25.8047L25.0066 23.2031H20.8125V35.7813C29.4176 34.4309 36 26.9841 36 18Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
