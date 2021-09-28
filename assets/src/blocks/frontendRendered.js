import { FrontendBlockNode } from '../components/FrontendBlockNode/FrontendBlockNode';

/**
 * @deprecated Save as static HTML and optionally use hydration instead. Rendering from an empty div on the front end
 * causes the following issues:
 * * layout shifts on page load leading to bad user experience
 * * more blocking time because React needs to add DOM nodes
 * * prevents or at least messes with lazy loading, more images get loaded during page load
 *
 * To convert existing usages to hydration, first simply try saving the front end component. In many cases this will be
 * all that's needed. If it has hooks, use ReactDOM/server when saving to retrieve the HTML, and return a RawHTML
 * element.
 *
 * If that is for some reason not possible, i.e. the data needed is not there yet, add a placeholder
 * on the first render that is only replaced after the data is available.
 *
 * For converting existing usages, the only tricky part is data migration. The HTML needs to be generated by JS before
 * it can be saved, and we currently don't have a solution to automatically do that after a deploy.
 * If there is very little existing production content, doing it manually can be an option for now.
 *
 * Please don't use in new code.
 * This function is used in the `save()` method of `registerBlock` to
 * render React blocks in the frontend.
 *
 * It returns a function with the same arguments as the `save()`
 * method.
 *
 * Be careful! Making changes in this function or in the `FrontendBlockNode`
 * component could potentially cause block validation errors in Gutenberg.
 *
 * @param {string} block
 */
export const frontendRendered = ( block ) => {
  return ( attributes, className ) => {
    return <FrontendBlockNode
      attributes={ attributes }
      className={ className }
      blockName={ block }
    />;
  }
}

