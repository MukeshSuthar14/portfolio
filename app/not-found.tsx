import type { Metadata } from 'next';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="not-found wrap">
      <div className="not-found-code" aria-hidden="true">404</div>

      <h1 className="page-title">
        Page Not Found
      </h1>

      <p className="page-lead">
        Oops! The page you are looking for seems to have wandered off into the digital void. Let&apos;s get you back home.
      </p>

      <Link href="/" className="btn btn-primary">
        <HiArrowLeft /> Go To Home
      </Link>
    </div>
  );
}
