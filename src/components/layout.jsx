import Link from 'next/link';

export default function Layout({ children, home }) {
    return (
        <main>
            <h1>Favorite Authors</h1>
            { home ? <Link href="/new">Add an Author</Link> : <Link href="/">Home</Link> }
            { children }
        </main>
    )
}