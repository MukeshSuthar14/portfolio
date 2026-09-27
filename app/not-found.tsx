import Link from 'next/link';
import { TbError404 } from 'react-icons/tb';
import Layout from './server-layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="not-found-container">
        <div className="icon-wrapper">
          <TbError404 size={180} className="error-icon" />
        </div>
        
        <h1 className="error-heading">
          Page Not Found
        </h1>
        
        <p className="error-description">
          Oops! The page you are looking for seems to have wandered off into the digital void. Let&apos;s get you back home.
        </p>
        
        <Link href="/" className="home-btn">
          Go To Home
        </Link>
        
        <style dangerouslySetInnerHTML={{__html: `
          .not-found-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #0a0a0f;
            color: #fff;
            text-align: center;
            padding: 2rem;
          }
          
          .icon-wrapper {
            animation: float 4s ease-in-out infinite;
            margin-bottom: 2rem;
          }
          
          .error-icon {
            color: #FF6B6B;
            filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.5));
            animation: pulse 2s infinite alternate;
          }
          
          .error-heading {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #4ECDC4, #45B7D1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .error-description {
            font-size: 1.2rem;
            color: #a0a0a0;
            margin-bottom: 3rem;
            max-width: 500px;
            line-height: 1.6;
          }
          
          .home-btn {
            padding: 12px 30px;
            font-size: 1.1rem;
            font-weight: 600;
            color: #fff;
            text-decoration: none;
            background: linear-gradient(90deg, #FF6B6B, #FF8B94, #FF6B6B);
            background-size: 200% auto;
            border-radius: 30px;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
            transition: all 0.3s ease;
            animation: shimmer 3s infinite linear;
          }
          
          .home-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(255, 107, 107, 0.5);
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse {
            0% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(255, 107, 107, 0.3)); }
            100% { transform: scale(1.05); filter: drop-shadow(0 0 30px rgba(255, 107, 107, 0.8)); }
          }
          @keyframes shimmer {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
        `}} />
      </div>
    </Layout>
  );
}
