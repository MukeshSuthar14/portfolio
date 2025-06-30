import Link from 'next/link';
import Layout from './server-layout';
import { TbError404 } from "react-icons/tb";

export default function NotFound() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="section-info">
            <div className="not-found-container">
              <TbError404 style={{ fontSize: "200px" }} />
              <h1>Page Not Found</h1>
              <p>The page you&apos;re looking for does not exist.</p>
              <div className="link-div">
                <Link href="/" className="link">Go To Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
