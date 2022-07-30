export interface CSSStyleSheetType extends CSSStyleSheet {
  // 2022/07 時点で replaceSync は TypeScript でサポートされていない
  replaceSync(reset_style: string): void
}

export interface DocumentType extends Document {
  // 2022/07 時点で adoptedStyleSheets は TypeScript でサポートされていない  ref: https://github.com/microsoft/TypeScript/issues/30022
  adoptedStyleSheets: CSSStyleSheetType[]
}

declare module "styles.scss" {
  const cssText: string;
  export default cssText;
}
