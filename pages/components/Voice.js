// components/VoiceflowIntegration.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const VoiceflowIntegration  = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '652d389444a86a0007bcb9fd' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
      });
    };
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount if needed
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Helmet>
      {/* Add any meta tags you need */}
    </Helmet>
  );
};

export default VoiceflowIntegration;
