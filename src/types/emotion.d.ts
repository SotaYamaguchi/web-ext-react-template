import '@emotion/react';
import type * as CSS from 'csstype';

type TypographyType = {
  fontSize: CSS.Properties.fontSize;
  lineHeight: CSS.Properties.lineHeight;
  fontWeight: CSS.Properties.fontWeight;
  letterSpacing: CSS.Properties.letterSpacing;
};
type ColorTypeText = {
  primary: string;
  secondary: string;
};
type ColorTypeBackground = {
  primary: string;
};
type PaletteType = {
  text: ColorTypeText;
  background: ColorTypeBackground;
};

declare module '@emotion/react' {
  export interface Theme {
    typography: {
      h1: TypographyType;
      h2: TypographyType;
      h3: TypographyType;
    };
    palette: PaletteType;
  }
}
