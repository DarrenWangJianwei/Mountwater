const loadIcons = (callback:() => void):void => {
  const existingScript = document.getElementById('icons-arrow');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://code.iconify.design/1/1.0.6/iconify.min.js';
    script.id = 'icons_arrow';
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadIcons;
