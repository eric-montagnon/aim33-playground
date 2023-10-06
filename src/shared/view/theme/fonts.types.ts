import {
  fontFiles,
  fonts,
  paragraphFontTypes,
} from "@src/shared/view/theme/fonts";

export type FontFamily = keyof typeof fontFiles;

export type ParagraphFontType = (typeof paragraphFontTypes)[number];

export type FontStyle = {
  fontSize: number;
  lineHeight: number;
  fontFamily: FontFamily;
};

export type TitleFonts = (typeof fonts)["title"];

export type TitleFontSize = keyof TitleFonts;

export type ParagraphFonts = (typeof fonts)["paragraph"];

export type ParagraphFontSize = keyof ParagraphFonts;

export type Fonts = typeof fonts;
