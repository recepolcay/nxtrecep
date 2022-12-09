import Link from 'next/link'

export default function Header() {
    return (
    
    <header className='site-container py-6'>
        <nav className='space-x-4'>
            <Link href="/">
                Hakkımda
            </Link>
            <Link href="/blog">
                Blog
            </Link>
        </nav>
    </header>
    )
}