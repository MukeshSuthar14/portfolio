import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ✅ Allow requests to public files (images, CSS, etc.)
    if (
        pathname.startsWith('/_next') ||     // next.js internals
        pathname.startsWith('/api') ||       // API routes
        pathname.includes('.')               // files with extensions (.png, .jpg, .css, etc.)
    ) {
        return NextResponse.next();
    }

    // 🔁 Optional: Check if the path is invalid (e.g. not in your routes)
    // Here we simply rewrite all unknown paths to `/` (home)
    return NextResponse.rewrite(new URL('/', request.url));
}
