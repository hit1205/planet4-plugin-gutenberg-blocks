import { HubspotFormEditor } from './HubspotFormEditor';
import { HubspotFormFrontend } from './HubspotFormFrontend';

const BLOCK_NAME = 'planet4-blocks/hubspot-form-image-full-width';

export class HubspotFormBlock {
  constructor() {
    const { registerBlockType } = wp.blocks;

    registerBlockType(BLOCK_NAME, {
      title: 'Hubspot Form',
      icon: 'feedback',
      category: 'planet4-blocks',
      supports: {
        html: false,
      },
      attributes: {
        title: {
          type: 'string',
          default: 'Lorem ipsum dolor sit amet, consectetur.',
        },
        text: {
          type: 'string',
          default: 'Default Text',
        },
        backgroundImage: {
          type: 'string',
          default: '',
        },
        formTitle: {
          type: 'string',
          default: 'Form Title goes here',
        },
        formDescription: {
          type: 'string',
          default: 'Happy Point form description',
        },
      },
      edit: ({ isSelected, attributes }) => <HubspotFormEditor {...attributes} isSelected={isSelected} />,
      save: ({ attributes }) => <HubspotFormFrontend {...attributes} />,
    });
  }
}
