import React, { useState, useEffect } from 'react';

const CopyEmailComponent = () => {
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [plainCopyFeedback, setPlainCopyFeedback] = useState('');
  
  const email = 'john.doe@email.com'; // Replace with your actual email
  const name = 'John Doe'; // Replace with your name
  const title = 'Full Stack Developer'; // Replace with your title

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      
      // Trigger animations
      setIsPulsing(true);
      setShowCopyFeedback(true);
      
      // Reset feedback after 2 seconds
      setTimeout(() => {
        setShowCopyFeedback(false);
      }, 2000);
      
      // Reset pulse animation
      setTimeout(() => {
        setIsPulsing(false);
      }, 300);
      
    } catch (err) {
      // Fallback for older browsers
      fallbackCopyTextToClipboard(email);
    }
  };

  const copyEmailPlain = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setPlainCopyFeedback('Copied!');
      
      setTimeout(() => {
        setPlainCopyFeedback('');
      }, 1500);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  const openMailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setShowCopyFeedback(true);
      setTimeout(() => {
        setShowCopyFeedback(false);
      }, 2000);
    } catch (err) {
      console.error('Fallback: Unable to copy', err);
    }
    
    document.body.removeChild(textArea);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'c' && (e.ctrlKey || e.metaKey) && e.target === document.body) {
        e.preventDefault();
        copyEmail();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="portfolio-container">
      <style jsx>{`
        .portfolio-container {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          margin: 0;
        }

        .portfolio-section {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 500px;
          width: 100%;
        }

        .main-title {
          color: white;
          margin-bottom: 10px;
          font-size: 2.5rem;
          font-weight: 300;
          margin-top: 0;
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
          font-size: 1.1rem;
        }

        .contact-section {
          margin: 30px 0;
        }

        .contact-title {
          color: white;
          margin-bottom: 20px;
          font-size: 1.3rem;
          font-weight: 500;
          margin-top: 0;
        }

        .email-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.15);
          padding: 15px 20px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .email-container:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .email-container.pulse {
          animation: pulse 0.3s ease;
        }

        .email-text {
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .copy-icon {
          width: 20px;
          height: 20px;
          fill: white;
          transition: transform 0.3s ease;
        }

        .email-container:hover .copy-icon {
          transform: scale(1.1);
        }

        .copy-feedback {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 255, 0, 0.9);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .copy-feedback.show {
          opacity: 1;
        }

        .alternative-methods {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .method {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.1);
          padding: 12px 20px;
          border-radius: 12px;
          margin-bottom: 10px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .method:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(5px);
        }

        .method-label {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
        }

        .method-action {
          color: white;
          font-size: 0.85rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 12px;
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        .method:hover .method-action {
          background: rgba(255, 255, 255, 0.3);
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        @media (max-width: 600px) {
          .portfolio-section {
            padding: 30px 20px;
          }
          
          .main-title {
            font-size: 2rem;
          }
          
          .email-container {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      <div className="portfolio-section">
        <h1 className="main-title">{name}</h1>
        <p className="subtitle">{title}</p>
        
        <div className="contact-section">
          <h2 className="contact-title">Get In Touch</h2>
          
          <div 
            className={`email-container ${isPulsing ? 'pulse' : ''}`}
            onClick={copyEmail}
          >
            <span className="email-text">{email}</span>
            <svg className="copy-icon" viewBox="0 0 24 24">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            <div className={`copy-feedback ${showCopyFeedback ? 'show' : ''}`}>
              Copied!
            </div>
          </div>
        </div>

        <div className="alternative-methods">
          <div className="method" onClick={openMailClient}>
            <span className="method-label">Open in Mail App</span>
            <span className="method-action">Click</span>
          </div>
          
          <div className="method" onClick={copyEmailPlain}>
            <span className="method-label">Copy Plain Email</span>
            <span className="method-action">
              {plainCopyFeedback || 'Copy'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyEmailComponent;