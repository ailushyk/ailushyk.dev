declare module '@sanity/block-content-to-markdown' {
  /** React component for transforming Sanity block content to markdown */
  export default function toMarkdown(block, options = {}): string;
}
