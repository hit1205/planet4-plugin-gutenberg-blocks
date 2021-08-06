import {
  PanelBody,
  Button,
} from '@wordpress/components';
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

const { __ } = wp.i18n;
const { RichText } = wp.blockEditor;

const Edit = ({
  attributes,
  toAttribute,
  setAttributes,
  isSelected,
}) => {

  const onChangeHandler = (evt) => {
    evt.preventDefault();

    if(toAttribute) {
      toAttribute(evt.currentTarget.name)
    }
  }

  return (
    <InspectorControls>
      <PanelBody title={__('Setting', 'planet4-blocks-backend')}>
        <div>
          <label htmlFor='hubspotPortal'>Hubspot Portal</label>
          <input type='text' name='hubspotPortal'/>
        </div>
      </PanelBody>
    </InspectorControls>
  )
}

const renderEdit = (attributes, toAttribute, setAttributes, isSelected) => {
  console.log(attributes, toAttribute, setAttributes, isSelected);
  if (!isSelected) {
    return null;
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Setting', 'planet4-blocks-backend')}>
          <div>
            <label htmlFor='hubspotPortal'>
              Hubspot Portal
              <input
                name='hubspotPortal'
                placeholder='Form title'
              />
            </label>
            
            
            {/* <URLInput
              label={__('Column link', 'planet4-blocks-backend')}
              placeholder={__('Enter link for column', 'planet4-blocks-backend')}
              value={'cta_link'}
              onChange={toAttribute('cta_link', 0)}
            />
            <CheckboxControl
              label={__('Open link in new tab', 'planet4-blocks-backend')}
              value={'link_new_tab'}
              checked={'link_new_tab'}
              onChange={toAttribute('link_new_tab', 0)}
            /> */}
          </div>
        </PanelBody>
      </InspectorControls>
    </>
  );
};

export const HubspotFormEditor = ({
  isSelected,
  setAttributes,
  attributes: {
    background_image,
    block_title,
    block_text,
    form_description,
    form_title,
  },
}) => {
  const [ imageId, setImageId ] = useState(null);

  const selectImage = ({ id }) => setAttributes({ id });
  /**
   * Modify this method
   * @param {*} openEvent 
   * @returns 
   */
  const getImageOrButton = openEvent => {
    return (
      <div style={{ marginBottom: 10 }}>
        <Button
          onClick={openEvent}
          className='button'>
          + {__('Select Background Image', 'planet4-blocks-backend')}
        </Button>
      </div>
    );
  };

  const toAttribute = (attributeName) => value => {
    console.log(attributeName, value)
    setAttributes({
      [attributeName]: value,
    });
  }

  return (
    <>
      {(isSelected) && <Edit />}
      <section className='hubspot-form hubspot-form--image-full-width'>
        <div className='hubspot-form__wrapper'>
          <MediaUploadCheck>
            <MediaUpload
              title={__('Select Background Image', 'planet4-blocks-backend')}
              type='image'
              onSelect={selectImage}
              value={id}
              allowedTypes={['image']}
              render={({ open }) => getImageOrButton(open)}
            />
          </MediaUploadCheck>
          <div className='hubspot-form__content hubspot-form__content--heading'>
            <RichText
              tagName='h1'
              className='hubspot-form__title'
              placeholder={__('Enter description', 'planet4-blocks-backend')}
              value={block_title}
              onChange={toAttribute('block_title')}
              keepPlaceholderOnFocus={true}
              withoutInteractiveFormatting
              characterLimit={80}
              allowedFormats={[]}
            />
            <RichText
              tagName='p'
              className='hubspot-form__text'
              placeholder={__('Enter description', 'planet4-blocks-backend')}
              value={block_text}
              onChange={toAttribute('block_text')}
              keepPlaceholderOnFocus={true}
              withoutInteractiveFormatting
              characterLimit={300}
              allowedFormats={['core/bold', 'core/italic']}
            />
            <Button className='hubspot-form__button'>Read More</Button>
          </div>
          <div className='hubspot-form__content hubspot-form__content--form'>
            <header className='hubspot-form__form-header'>
              <RichText
                tagName='h1'
                className='hubspot-form__form-title'
                placeholder={__('Form title goes here', 'planet4-blocks-backend')}
                value={block_text}
                onChange={toAttribute('block_title')}
                keepPlaceholderOnFocus={true}
                withoutInteractiveFormatting
                characterLimit={80}
                allowedFormats={[]}
              />
              <RichText
                tagName='p'
                className='hubspot-form__form-text'
                placeholder={__('Enter text', 'planet4-blocks-backend')}
                value={form_description}
                onChange={toAttribute('block_text')}
                keepPlaceholderOnFocus={true}
                withoutInteractiveFormatting
                characterLimit={300}
                allowedFormats={['core/bold', 'core/italic']}
              />
            </header>
            <div className='hubspot-form__form-wrapper'>
              [hubspot type=form portal=8710305 id=ddbcce66-e064-4fe2-9348-36a476cad9d3]
            </div>
          </div>
        </div>  
      </section>
    </>
  )
};
