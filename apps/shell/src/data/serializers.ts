interface CodeInputValue {
  _type?: 'code';
  code?: string;
  filename?: string;
  language?: string;
  highlightedLines?: number[];
}

export const serializers = {
  types: {
    code: (props: { node: CodeInputValue }) => {
      return '```' + props.node.language + '\n' + props.node.code + '\n```';
    },
  },
};
