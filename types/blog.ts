export type TextBlock = {
  type: 'text';
  content: string;
};

export type ImageBlock = {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
};

export type ContentBlock = TextBlock | ImageBlock;

export type BlogPost = {
  title: string;
  date: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  heroImage: string;
  content: ContentBlock[];
  pdf?: {
    title: string;
    path: string;
  };
};