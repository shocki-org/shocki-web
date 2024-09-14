import { PropsWithChildren, useEffect, useState } from "react";
import FontFaceObserver from "fontfaceobserver";

const FontProvider = (props: PropsWithChildren) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const font = new FontFaceObserver("Material Symbols Outlined"); // 'Roboto' 폰트 예시

    font
      .load()
      .then(() => {
        setIsFontLoaded(true);
      })
      .catch(() => {
        console.error("Font failed to load");
      });
  }, []);

  return <>{isFontLoaded && props.children}</>;
};

export default FontProvider;
