import Link from 'next/link';
import { TbError404 } from 'react-icons/tb';
import Layout from './server-layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="not-found-container">
        <div className="icon-wrapper">
          <TbError404 className="error-icon" />
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
            min-height: calc(100vh - 140px);
            background-color: transparent;
            color: var(--background-invert-theme-color, #f0f0f5);
            text-align: center;
            padding: 4rem 1.5rem;
          }
          
          .icon-wrapper {
            animation: float 4s ease-in-out infinite;
            margin-bottom: 1.5rem;
          }
          
          .error-icon {
            width: 140px;
            height: 140px;
            color: #FF6B6B;
            filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.4));
            animation: pulse 2s infinite alternate;
          }
          
          .error-heading {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-family: 'Space Grotesk', sans-serif;
          }
          
          .error-description {
            font-size: 1.1rem;
            color: var(--background-invert-theme-color, #a0a0a0);
            opacity: 0.8;
            margin-bottom: 2.5rem;
            max-width: 480px;
            line-height: 1.6;
          }
          
          .home-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 13px 32px;
            font-size: 1rem;
            font-weight: 600;
            color: #ffffff !important;
            text-decoration: none;
            background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
            border-radius: 14px;
            box-shadow: 0 4px 18px rgba(255, 107, 107, 0.35);
            transition: all 0.3s ease;
          }
          
          .home-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.5);
          }
          
          @media (max-width: 600px) {
            .not-found-container {
              padding: 3rem 1rem;
            }
            .error-icon {
              width: 100px;
              height: 100px;
            }
            .error-heading {
              font-size: 1.85rem;
            }
            .error-description {
              font-size: 0.95rem;
              margin-bottom: 2rem;
            }
            .home-btn {
              width: 100%;
              max-width: 280px;
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes pulse {
            0% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(255, 107, 107, 0.3)); }
            100% { transform: scale(1.05); filter: drop-shadow(0 0 25px rgba(255, 107, 107, 0.6)); }
          }
        `}} />
      </div>
    </Layout>
  );
}
