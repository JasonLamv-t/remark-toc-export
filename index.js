import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import { slug } from 'github-slugger';

export default function getToc({ callback = console.log, depthLimit = 2 }) {
  return (tree) => {
    const headers = [];
    visit(tree, 'heading', (node) => {
      const value = toString(node);
      headers.push({ value, depth: node.depth, id: slug(value) });
    });

    callback(headers.filter(({ depth }) => depth <= depthLimit));
  };
}

//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
//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