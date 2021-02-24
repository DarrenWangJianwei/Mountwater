import React from 'react';

type returnType = {
  src:string|undefined;
  blur:boolean
}

const useProgressiveImg = (lowQualitySrc:string, highQualitySrc:string):returnType => {
  const [src, setSrc] = React.useState(lowQualitySrc);
  React.useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  const blur = src === lowQualitySrc;
  return { src, blur };
};
export default useProgressiveImg;
