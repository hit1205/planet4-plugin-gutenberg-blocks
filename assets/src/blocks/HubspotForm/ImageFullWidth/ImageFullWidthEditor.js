export const HubspotFormFrontend = ({
  title = 'Main title',
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc ac nisi faucibus porttitor id vitae urna. Curabitur id viverra neque. Vestibulum ultricies nibh mauris. Duis at libero posuere, commodo augue sed, suscipit turpis. Duis eu fermentum arcu. Suspendisse sed varius nulla. Donec elementum blandit sapien, tincidunt iaculis felis interdum a. Phasellus tellus mi, fermentum id nunc nec, pellentesque hendrerit massa. Nam ante lacus, ultrices eget aliquam et, posuere a mi. Phasellus tellus mi, fermentum id nunc nec, pellentesque hendrerit massa. Nam ante lacus, ultrices eget aliquam et, posuere a mi. Phasellus tellus mi,hendrerit massa.',
}) => {
  return (
    <section className='hubspot-form hubspot-form--image-full-width'>
      <div>
        <h1 className='hubspot-form__title'>{ title }</h1>
        <p className='hubspot-form__text'>{ text }</p>
        <button className='hubspot-form__button'>Read More</button>
      </div>
      <div className='hubspot-form__form'>
        <header className='hubspot-form__form-header'>
          <h1 className='hubspot-form__form-title'>Form title goes here</h1>
          <p  className='hubspot-form__form-text'></p>
        </header>
        <div className='hubspot-form__form-wrapper'>
          Form
        </div>
      </div>
    </section>
  )
};

