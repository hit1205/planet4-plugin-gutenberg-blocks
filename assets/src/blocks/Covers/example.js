export const example = {
  attributes: {
    isExample: true,
    title: 'Covers block',
    exampleCovers: {
      content: [
        {
          post_title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          post_excerpt: 'Etiam et turpis et tortor congue interdum quis in leo. Donec vel eros eget mauris aliquam commodo.',
        },
        {
          post_title: 'Vivamus ornare varius neque at posuere',
          post_excerpt: 'Cras suscipit velit nec gravida auctor. Suspendisse et enim a ex feugiat interdum laoreet vel lorem.',
        },
        {
          post_title: 'Vestibulum vitae purus neque',
          post_excerpt: 'In egestas mollis leo. Suspendisse in iaculis mauris. Duis sagittis arcu vel sodales bibendum. Ut sed sagittis lectus. ',
        },
        {
          post_title: 'In egestas mollis leo',
          post_excerpt: 'Suspendisse in iaculis mauris. Duis sagittis arcu vel sodales bibendum. Ut sed sagittis lectus.',
        },
      ],
      campaign: [
        {
          name: 'Tag1',
        },
        {
          name: 'Tag2',
        },
        {
          name: 'Tag3'
        },
      ],
      'take-action': [
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          excerpt: 'Etiam et turpis et tortor congue interdum quis in leo. Donec vel eros eget mauris aliquam commodo.',
          button_text: 'Take action',
          tags: [{
            name: 'Tag1'
          }],
        },
        {
          title: 'Vivamus ornare varius neque at posuere',
          excerpt: 'Cras suscipit velit nec gravida auctor. Suspendisse et enim a ex feugiat interdum laoreet vel lorem.',
          button_text: 'Take action',
          tags: [{
            name: 'Tag2'
          }],
        },
        {
          title: 'Vitae purus neque',
          excerpt: 'In egestas mollis leo. Suspendisse in iaculis mauris. Duis sagittis arcu vel sodales bibendum.',
          button_text: 'Take action',
          tags: [{
            name: 'Tag3'
          }],
        },
      ],
    }
  },
};
