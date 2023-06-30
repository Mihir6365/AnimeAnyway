import React from 'react'
export default function Ad() {
     React.useEffect(() => {
          const adsbygoogle = window.adsbygoogle || [];
          adsbygoogle.push({});
        }, []);
  return (
     <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-7107200228987000"
      data-ad-slot="9551463795"
    />
  )
}

