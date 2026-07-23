export type BannerElements = TextElement | RectangleElement

export interface BaseElement {
  id: number;
  type: 'text' | 'rectangle';
  x: number;
  y: number;
  selected: boolean
}

export interface TextElement extends BaseElement {
  type: 'text';
  text: string;
  styles: {
    color: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: number;
    fontStyle: string;
  }
}

export interface RectangleElement extends BaseElement {
  type: 'rectangle';
  styles: {
    width: number;
    height: number;
    backgroundColor: string;
    border: string;
  }
}