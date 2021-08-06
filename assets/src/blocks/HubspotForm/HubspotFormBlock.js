import { HubspotFormEditor } from './HubspotFormEditor';
import { HubspotFormFrontend } from './HubspotFormFrontend';
import { Tooltip } from '@wordpress/components';

const { __ } = wp.i18n;

const BLOCK_NAME = 'planet4-blocks/hubspot-form-image-full-width';
const IMAGE_FULL_WIDTH = 'imageFullWidth';

const getStyleLabel = (label, help) => {
  if (help) {
    return (
      <Tooltip text={help}>
        <span>{label}</span>
      </Tooltip>
    );
  }
  return label;
};

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
        block_title: {
          type: 'string',
          default: 'Default Title',
        },
        block_text: {
          type: 'string',
          default: 'Default Text',
        },
        background_image: {
          type: 'string',
          default: '',
        },
        form_title: {
          type: 'string',
          default: 'Form title goes here',
        },
        form_description: {
          type: 'string',
          default: 'Form description goes here',
        },
      },
      styles: [
        {
          name: IMAGE_FULL_WIDTH,
          label: getStyleLabel(
            __('Image full width', 'planet4-blocks-backend'),
            '',
          ),
          isDefault: true,
        },
        {
          name: IMAGE_FULL_WIDTH,
          label: getStyleLabel(
            __('Image full width', 'planet4-blocks-backend'),
            '',
          ),
        },
      ],
      edit: HubspotFormEditor,
      save: ({ attributes }) => <HubspotFormFrontend {...attributes} />,
    });
  }
}
