'use client';

import { useEffect } from 'react';

export default function ComingSoon() {
  useEffect(() => {
    // Apply full viewport styles to body
    document.body.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a90e2 100%)';
    document.body.style.minHeight = '100vh';
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'relative';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    // Cleanup on unmount
    return () => {
      document.body.style.background = '';
      document.body.style.minHeight = '';
      document.body.style.display = '';
      document.body.style.alignItems = '';
      document.body.style.justifyContent = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .coming-soon-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .coming-soon-page {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a90e2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          z-index: 9999;
        }

        /* Animated background elements */
        .bg-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .shape {
          position: absolute;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .shape:nth-child(1) {
          top: 20%;
          left: 10%;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #4a90e2, #357abd);
          border-radius: 50%;
          animation-delay: 0s;
        }

        .shape:nth-child(2) {
          top: 60%;
          right: 20%;
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #2a5298, #4a90e2);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation-delay: 2s;
        }

        .shape:nth-child(3) {
          bottom: 30%;
          left: 30%;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #357abd, #1e3c72);
          border-radius: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .container {
          text-align: center;
          color: white;
          z-index: 2;
          position: relative;
          max-width: 600px;
          padding: 40px 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .logo {
          width: 120px;
          height: 120px;
          margin: 0 auto 30px;
          background: linear-gradient(135deg, #4a90e2, #357abd);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 2s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }

        .logo::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shine 3s ease-in-out infinite;
        }

        .logo-shape {
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 8px;
          position: relative;
          transform: rotate(45deg);
        }

        .logo-shape::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, #4a90e2, #357abd);
          border-radius: 6px;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .coming-soon-h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #ffffff, #e3f2fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
          to { text-shadow: 0 0 30px rgba(255, 255, 255, 0.8); }
        }

        .subtitle {
          font-size: 1.3rem;
          margin-bottom: 30px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .dots {
          display: inline-block;
          font-size: 1.5rem;
          animation: loading 1.5s infinite;
        }

        @keyframes loading {
          0%, 20% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        .dots span:nth-child(1) { animation-delay: 0s; }
        .dots span:nth-child(2) { animation-delay: 0.2s; }
        .dots span:nth-child(3) { animation-delay: 0.4s; }

        .status-text {
          font-size: 1.1rem;
          margin-top: 40px;
          opacity: 0.8;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .status-dot {
          width: 12px;
          height: 12px;
          background: #4caf50;
          border-radius: 50%;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          margin-top: 30px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4a90e2, #357abd);
          border-radius: 2px;
          animation: progress 3s ease-in-out infinite;
        }

        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }

        @media (max-width: 768px) {
          .container {
            margin: 20px;
            padding: 30px 20px;
          }
          
          .coming-soon-h1 {
            font-size: 2.5rem;
          }
          
          .subtitle {
            font-size: 1.1rem;
          }
          
          .logo {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
      
      <div className="coming-soon-page">
        <div className="bg-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        <div className="container">
          <div className="logo">
            <div className="logo-shape"></div>
          </div>
          
          <h1 className="coming-soon-h1">Coming Soon</h1>
          
          <p className="subtitle">
            We're working hard to bring you something amazing. 
            Stay tuned for an incredible experience!
          </p>
          
          <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          
          <div className="status-text">
            <div className="status-dot"></div>
            <span>Development in Progress</span>
          </div>
        </div>
      </div>
    </>
  );
}