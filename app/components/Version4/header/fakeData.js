export default {
  dealInfomations: {
    initial: {
      editFields: false,
      fields: [
        { value: 'No nickname', hover: 'Add nickname' },
        { value: 'No description', hover: 'Add description' },
        { value: 'No documents', hover: 'Add documents' },
      ],
    },
    randomValues: {
      editFields: true,
      fields: [
        { value: 'Nickname for the deal', hover: 'Edit nickname' },
        { value: 'Brief description for the underlying deal, placed in two lines but truncated because of the limited space', hover: 'Edit description' },
        { value: 'See documents', hover: 'See documents' },
      ],
    },
  },
};
