export async function GET(request) {
    const navLinks = [
        { label: 'Services', href: '/services' },
        { label: 'Home', href: '/' },
        { label: 'Plans', href: '/plans' },
        { label: 'About', href: '/about' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Contacts', href: '/contacts' }
    ]

    return new Response(JSON.stringify(navLinks))
}