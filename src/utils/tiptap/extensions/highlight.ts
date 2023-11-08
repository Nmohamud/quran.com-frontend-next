import { Highlight } from '@tiptap/extension-highlight';
import MarkdownIt from 'markdown-it';
import markdownItMark from 'markdown-it-mark';

export default Highlight.extend({
  addStorage: () => {
    return {
      markdown: {
        serialize: {
          open: '==',
          close: '==',
        },
        parse: {
          setup: (markdownIt: MarkdownIt) => {
            markdownIt.use(markdownItMark);
          },
          updateDOM: () => {
            // here you can update HTML generated by markdown-it
          },
        },
      },
    };
  },
});
