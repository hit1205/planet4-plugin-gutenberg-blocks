export const HubspotFormFrontend = ({
  block_title = 'Lorem ipsum dolor sit amet, consectetur.',
  block_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc ac nisi faucibus porttitor id vitae urna. Curabitur id viverra neque. Vestibulum ultricies nibh mauris. Duis at libero posuere, commodo augue sed, suscipit turpis. Duis eu fermentum arcu. Suspendisse sed varius nulla. Donec elementum.',
  form_title = 'Form title',
  form_text = 'Form title',
}) => {
  return (
    <section className='hubspot-form hubspot-form--image-full-width'>
      <div className='block block-wide hubspot-form__wrapper'>
        <div className='hubspot-form__content hubspot-form__content--heading'>
          <h1 className='hubspot-form__title'>{ block_title }</h1>
          <p className='hubspot-form__text'>{ block_text }</p>
          <button className='hubspot-form__button'>Read More</button>
        </div>
        <div className='hubspot-form__content hubspot-form__content--form'>
          <header className='hubspot-form__form-header'>
            <h1 className='hubspot-form__form-title'>{form_title}</h1>
            <p  className='hubspot-form__form-text'>{form_text}</p>
          </header>
          <div className='hubspot-form__form-wrapper'>
          <div class="hbspt-form" id="hbspt-form-1628793029000-0975789967">
              <form
                novalidate=""
                accept-charset="UTF-8"
                action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/8710305/ddbcce66-e064-4fe2-9348-36a476cad9d3"
                enctype="multipart/form-data"
                id="hsForm_ddbcce66-e064-4fe2-9348-36a476cad9d3"
                method="POST"
                class="
                  hs-form
                  stacked
                  hs-form-private
                  hsForm_ddbcce66-e064-4fe2-9348-36a476cad9d3
                  hs-form-ddbcce66-e064-4fe2-9348-36a476cad9d3
                  hs-form-ddbcce66-e064-4fe2-9348-36a476cad9d3_d353d1e5-9936-4e3e-abcb-153b543217cc
                "
                data-form-id="ddbcce66-e064-4fe2-9348-36a476cad9d3"
                data-portal-id="8710305"
                target="target_iframe_ddbcce66-e064-4fe2-9348-36a476cad9d3"
                data-reactid=".hbspt-forms-0"
              >
                <fieldset class="form-columns-2" data-reactid=".hbspt-forms-0.1:$0">
                  <div
                    class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"
                    data-reactid=".hbspt-forms-0.1:$0.1:$firstname"
                  >
                    <label
                      id="label-firstname-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      class=""
                      placeholder="Enter your First name"
                      for="firstname-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      data-reactid=".hbspt-forms-0.1:$0.1:$firstname.0"
                      ><span data-reactid=".hbspt-forms-0.1:$0.1:$firstname.0.0"
                        >First name</span
                      ></label
                    >
                    <legend
                      class="hs-field-desc"
                      style="display: none"
                      data-reactid=".hbspt-forms-0.1:$0.1:$firstname.1"
                    ></legend>
                    <div
                      class="input"
                      data-reactid=".hbspt-forms-0.1:$0.1:$firstname.$firstname"
                    >
                      <input
                        id="firstname-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                        class="hs-input"
                        type="text"
                        name="firstname"
                        value=""
                        placeholder=""
                        autocomplete="given-name"
                        data-reactid=".hbspt-forms-0.1:$0.1:$firstname.$firstname.0"
                        inputmode="text"
                      />
                    </div>
                  </div>
                  <div
                    class="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field"
                    data-reactid=".hbspt-forms-0.1:$0.1:$lastname"
                  >
                    <label
                      id="label-lastname-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      class=""
                      placeholder="Enter your Last name"
                      for="lastname-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      data-reactid=".hbspt-forms-0.1:$0.1:$lastname.0"
                      ><span data-reactid=".hbspt-forms-0.1:$0.1:$lastname.0.0"
                        >Last name</span
                      ></label
                    >
                    <legend
                      class="hs-field-desc"
                      style="display: none"
                      data-reactid=".hbspt-forms-0.1:$0.1:$lastname.1"
                    ></legend>
                    <div
                      class="input"
                      data-reactid=".hbspt-forms-0.1:$0.1:$lastname.$lastname"
                    >
                      <input
                        id="lastname-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                        class="hs-input"
                        type="text"
                        name="lastname"
                        value=""
                        placeholder=""
                        autocomplete="family-name"
                        data-reactid=".hbspt-forms-0.1:$0.1:$lastname.$lastname.0"
                        inputmode="text"
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset class="form-columns-1" data-reactid=".hbspt-forms-0.1:$1">
                  <div
                    class="hs_email hs-email hs-fieldtype-text field hs-form-field"
                    data-reactid=".hbspt-forms-0.1:$1.1:$email"
                  >
                    <label
                      id="label-email-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      class=""
                      placeholder="Enter your Email"
                      for="email-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      data-reactid=".hbspt-forms-0.1:$1.1:$email.0"
                      ><span data-reactid=".hbspt-forms-0.1:$1.1:$email.0.0">Email</span
                      ><span
                        class="hs-form-required"
                        data-reactid=".hbspt-forms-0.1:$1.1:$email.0.1"
                        >*</span
                      ></label
                    >
                    <legend
                      class="hs-field-desc"
                      style="display: none"
                      data-reactid=".hbspt-forms-0.1:$1.1:$email.1"
                    ></legend>
                    <div class="input" data-reactid=".hbspt-forms-0.1:$1.1:$email.$email">
                      <input
                        id="email-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                        class="hs-input invalid error"
                        type="email"
                        name="email"
                        required=""
                        placeholder=""
                        value=""
                        autocomplete="email"
                        data-reactid=".hbspt-forms-0.1:$1.1:$email.$email.0"
                        inputmode="email"
                      />
                    </div>
                    <ul
                      class="no-list hs-error-msgs inputs-list"
                      style="display: block"
                      role="alert"
                      data-reactid=".hbspt-forms-0.1:$1.1:$email.3"
                    >
                      <li data-reactid=".hbspt-forms-0.1:$1.1:$email.3.$0">
                        <label
                          class="hs-error-msg"
                          data-reactid=".hbspt-forms-0.1:$1.1:$email.3.$0.0"
                          >Please complete this required field.</label
                        >
                      </li>
                    </ul>
                  </div>
                </fieldset>
                <fieldset class="form-columns-1" data-reactid=".hbspt-forms-0.1:$2">
                  <div
                    class="hs_city hs-city hs-fieldtype-text field hs-form-field"
                    data-reactid=".hbspt-forms-0.1:$2.1:$city"
                  >
                    <label
                      id="label-city-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      class=""
                      placeholder="Enter your City"
                      for="city-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      data-reactid=".hbspt-forms-0.1:$2.1:$city.0"
                      ><span data-reactid=".hbspt-forms-0.1:$2.1:$city.0.0"
                        >City</span
                      ></label
                    >
                    <legend
                      class="hs-field-desc"
                      style="display: none"
                      data-reactid=".hbspt-forms-0.1:$2.1:$city.1"
                    ></legend>
                    <div class="input" data-reactid=".hbspt-forms-0.1:$2.1:$city.$city">
                      <input
                        id="city-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                        class="hs-input"
                        type="text"
                        name="city"
                        value=""
                        placeholder=""
                        autocomplete="address-level2"
                        data-reactid=".hbspt-forms-0.1:$2.1:$city.$city.0"
                        inputmode="text"
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset class="form-columns-1" data-reactid=".hbspt-forms-0.1:$3">
                  <div
                    class="hs_company hs-company hs-fieldtype-text field hs-form-field"
                    data-reactid=".hbspt-forms-0.1:$3.1:$company"
                  >
                    <label
                      id="label-company-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      class=""
                      placeholder="Enter your Company name"
                      for="company-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      data-reactid=".hbspt-forms-0.1:$3.1:$company.0"
                      ><span data-reactid=".hbspt-forms-0.1:$3.1:$company.0.0"
                        >Company name</span
                      ></label
                    >
                    <legend
                      class="hs-field-desc"
                      style="display: none"
                      data-reactid=".hbspt-forms-0.1:$3.1:$company.1"
                    ></legend>
                    <div
                      class="input"
                      data-reactid=".hbspt-forms-0.1:$3.1:$company.$company"
                    >
                      <input
                        id="company-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                        class="hs-input"
                        type="text"
                        name="company"
                        value=""
                        placeholder=""
                        autocomplete="organization"
                        data-reactid=".hbspt-forms-0.1:$3.1:$company.$company.0"
                        inputmode="text"
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset class="form-columns-1" data-reactid=".hbspt-forms-0.1:$4">
                  <div
                    class="
                      hs_countries hs-countries hs-fieldtype-select
                      field
                      hs-form-field
                    "
                    data-reactid=".hbspt-forms-0.1:$4.1:$countries"
                  >
                    <label
                      id="label-countries-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      class=""
                      placeholder="Enter your Countries"
                      for="countries-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                      data-reactid=".hbspt-forms-0.1:$4.1:$countries.0"
                      ><span data-reactid=".hbspt-forms-0.1:$4.1:$countries.0.0"
                        >Countries</span
                      ></label
                    >
                    <legend
                      class="hs-field-desc"
                      style="display: none"
                      data-reactid=".hbspt-forms-0.1:$4.1:$countries.1"
                    ></legend>
                    <div
                      class="input"
                      data-reactid=".hbspt-forms-0.1:$4.1:$countries.$countries"
                    >
                      <select
                        id="countries-ddbcce66-e064-4fe2-9348-36a476cad9d3"
                        class="hs-input is-placeholder"
                        name="countries"
                        data-reactid=".hbspt-forms-0.1:$4.1:$countries.$countries.0"
                      >
                        <option
                          value=""
                          disabled=""
                          selected=""
                          data-reactid=".hbspt-forms-0.1:$4.1:$countries.$countries.0.0"
                        >
                          Please Select
                        </option>
                        <option
                          value="afghanistan"
                          data-reactid=".hbspt-forms-0.1:$4.1:$countries.$countries.0.1:$afghanistan"
                        >
                          Afghanistan
                        </option>
                        <option
                          value="albania"
                          data-reactid=".hbspt-forms-0.1:$4.1:$countries.$countries.0.1:$albania"
                        >
                          Albania
                        </option>
                        <option
                          value="algeria"
                          data-reactid=".hbspt-forms-0.1:$4.1:$countries.$countries.0.1:$algeria"
                        >
                          Algeria
                        </option>
                        <option
                          value="andorra"
                          data-reactid=".hbspt-forms-0.1:$4.1:$countries.$countries.0.1:$andorra"
                        >
                          Andorra
                        </option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                <noscript data-reactid=".hbspt-forms-0.2"></noscript>
                <div class="hs_submit hs-submit" data-reactid=".hbspt-forms-0.5">
                  <div
                    class="hs-field-desc"
                    style="display: none"
                    data-reactid=".hbspt-forms-0.5.0"
                  ></div>
                  <div class="actions" data-reactid=".hbspt-forms-0.5.1">
                    <input
                      type="submit"
                      value="Button goes here"
                      class="hs-button primary large"
                      data-reactid=".hbspt-forms-0.5.1.0"
                    />
                  </div>
                </div>
                <noscript data-reactid=".hbspt-forms-0.6"></noscript
                ><input
                  name="hs_context"
                  type="hidden"
                  value='{"rumScriptExecuteTime":3127,"rumServiceResponseTime":3500,"rumFormRenderTime":3,"rumTotalRenderTime":3505,"rumTotalRequestTime":372,"lang":"en","embedType":"REGULAR","renderRawHtml":"true","embedAtTimestamp":"1628793031687","formDefinitionUpdatedAt":"1628010439496","pageUrl":"https://www-dev.greenpeace.org/dmptest/hubspot-form/?preview_id=30135&amp;preview_nonce=9ee4acf8b7&amp;preview=true","pageTitle":"Hubspot Form - Greenpeace","source":"FormsNext-static-5.354","timestamp":1628793031688,"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:91.0) Gecko/20100101 Firefox/91.0","referrer":"https://www-dev.greenpeace.org/dmptest/wp-admin/post.php?post=30135&amp;action=edit","originalEmbedContext":{"portalId":"8710305","formId":"ddbcce66-e064-4fe2-9348-36a476cad9d3","target":"#hbspt-form-1628793029000-0975789967","shortcode":"wp","hutk":"3e3b41991234837875ea8ee2bdc5fcd2"},"urlParams":{"preview_id":"30135","preview_nonce":"9ee4acf8b7","preview":"true"},"formValidity":{"email":{"valid":false,"errors":["Please complete this required field."],"errorTypes":["REQUIRED_FIELD"]},"lastname":{"valid":true}},"formTarget":"#hbspt-form-1628793029000-0975789967","correlationId":"60afd4e3-4a0a-47bf-a4c4-7423a6803143","contentType":"standard-page","hutk":"3e3b41991234837875ea8ee2bdc5fcd2","useRecaptchaEnterprise":true}'
                  data-reactid=".hbspt-forms-0.7"
                /><iframe
                  name="target_iframe_ddbcce66-e064-4fe2-9348-36a476cad9d3"
                  style="display: none"
                  data-reactid=".hbspt-forms-0.8"
                ></iframe>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
