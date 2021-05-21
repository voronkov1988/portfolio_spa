import Head from 'next/head'
import { Footer } from "./Footer";
import { Header } from '../components/Header'
import styles from '../styles/anotherPages/wrapper.module.css'

export function Wrapper({title, description, keywords, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <div className={styles.wrapper}>
                <Header />
                {children}
                <Footer />
            </div>
        </>

    )
}