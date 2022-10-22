import { useEffect } from 'react';
import Script from 'next/script';

function thirdPartyScript() {
  useEffect(() => {
    // just for fun. This actually fires
    // before the onLoad callback
  }, []);
  return (
    <Script
      id="test-script"
      strategy="afterInteractive"
      src="./scripts/test.js"
    />
  );
}