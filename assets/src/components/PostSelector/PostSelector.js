import { FormTokenField } from '@wordpress/components';
import { dispatch, useSelect } from '@wordpress/data';

// Allows to query a custom endpoint with select('core') tools
dispatch('core').addEntities( [{
    baseURL: '/planet4/v1/all-published-posts',
    kind: 'planet4/v1',
    name: 'all-published-posts',
    label: 'All published posts',
}] );

/**
 * Post selector with autosuggestion
 * Based on post type
 */
export const PostSelector = (attributes) => {
  const {
    label,
    selected,
    placeholder,
    postType,
    onChange,
    maxLength,
    maxSuggestions,
  } = attributes;

  /**
   * Fetch relevant posts for autosuggestions
   */
  const args = { per_page: -1, orderby: 'title', post_status: 'publish' };
  const act_args = {
    post_parent: window.p4ge_vars.planet4_options.act_page,
    ...args,
  };
  const posts = useSelect((select) => {
    if ('post' === postType) {
      return [].concat(
        select('core').getEntityRecords('postType', 'post', {'include': selected}) || [],
        select('core').getEntityRecords('planet4/v1', 'all-published-posts', args) || [],
      );
    }

    if ('act_page' === postType) {
      const selectedPosts = [].concat(
        select('core').getEntityRecords('postType', 'page', {'include': selected}) || [],
        select('core').getEntityRecords('postType', 'p4_action', {'include': selected}) || [],
      );
      const actions = select('core').getEntityRecords('postType', 'p4_action', args) || [];
      const pages = select('core').getEntityRecords('postType', 'page', act_args) || [];
      return [].concat(selectedPosts, actions, pages);
    }

    return [];
  }, [postType]);

  /**
   * Convert posts to {id, title}
   */
  const options = posts.map(post => ({
    id: post.id,
    title: post.title?.raw || post.post_title,
  }));

  /**
   * Resolve Titles to IDs for saving values
   */
  const setPostsIdsFromTitles = (titles) => {
    const postIds = titles?.length
      ? titles.map(token => options.find(option => option.title === token)?.id)
      : [];
    onChange(postIds);
  };

  /**
   * Resolve IDs to Titles
   */
  const getPostsTitlesFromIds = (ids) => {
    return options?.length && ids?.length
    ? ids.map(postId => options.find(option => option.id === postId)?.title).filter(t => t)
    : []
  };

  /**
   * Get field initial value
   */
  const getValue = () => {
    return getPostsTitlesFromIds(selected);
  }

  return (
    <FormTokenField
      label={ label || 'Select Posts' }
      value={ getValue() || null }
      suggestions={ options.map(post => post.title) }
      onChange={ value => {
        setPostsIdsFromTitles(value);
      } }
      placeholder={ placeholder || 'Select Posts' }
      maxLength={ maxLength }
      maxSuggestions={ maxSuggestions || 50 }
    />
  );
};
