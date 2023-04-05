import Link from 'next/link';
import styles from '@/styles/base.module.css';

export default function Layout({ children, home }) {
    return (
        <main className={styles.main}>
            <h1>Favorite Authors</h1>
            { home ? <Link href="/new">Add an Author</Link> : <Link href="/">Home</Link> }
            { children }
        </main>
    )
}