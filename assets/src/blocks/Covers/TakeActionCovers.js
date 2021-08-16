import { useState, useEffect } from '@wordpress/element';

const { __ } = wp.i18n;

const isSmallWindow = () => window.innerWidth < 992;

export const TakeActionCovers = ({ initialRowsLimit, covers, row, loadMoreCovers }) => {
  const [amountPerRow, setAmountPerRow] = useState(isSmallWindow() ? 2 : 3);

  const updateRowAmount = () => setAmountPerRow(isSmallWindow() ? 2 : 3);

  // The amount of covers per row depends on the window width
  useEffect(() => {
    window.addEventListener('resize', updateRowAmount);
    return () => window.removeEventListener('resize', updateRowAmount);
  }, []);

  const showLoadMore = !!initialRowsLimit && covers.length > amountPerRow * row;

  return (
    <div className='container'>
      <div className='row'>
        {covers.map((cover, index) => {
          const {
            button_link,
            title,
            tags,
            image,
            excerpt,
            button_text,
            alt_text,
            srcset,
          } = cover;
          const hideCover = !!initialRowsLimit && index >= row * amountPerRow;

          if (hideCover) {
            return null;
          }

          return (
            <div key={title} className='col-lg-4 col-md-6 cover-card-column'>
              <div className='cover-card'>
                <a
                  className='cover-card-overlay'
                  data-ga-category='Take Action Covers'
                  data-ga-action='Image'
                  data-ga-label='n/a'
                  href={button_link}
                  aria-label={__('Take action cover, link to ' + title, 'planet4-blocks')}
                />
                <img src={image} />
                <div className='cover-card-content'>
                  {/* Regardless of how many tags there are, we only show the first one */}
                  {tags && (
                    <a
                      key={tags[0].name}
                      className='cover-card-tag'
                      data-ga-category='Take Action Covers'
                      data-ga-action='Navigation Tag'
                      data-ga-label='n/a'
                      href={tags[0].href}
                    >
                      {tags[0].name}
                    </a>
                  )}
                  <a
                    className='cover-card-heading'
                    data-ga-category='Take Action Covers'
                    data-ga-action='Title'
                    data-ga-label='n/a'
                    href={button_link}
                  >
                    {title}
                  </a>
                  <p className="cover-card-excerpt">{excerpt}</p>
                </div>
                <a
                  className='btn cover-card-btn btn-primary'
                  data-ga-category='Take Action Covers'
                  data-ga-action='Call to Action'
                  data-ga-label='n/a'
                  href={button_link}
                >
                  {button_text}
                </a>
              </div>
            </div>
          )
        })}
      </div>
      {showLoadMore &&
        <div className='row'>
          <div onClick={loadMoreCovers} className='col-lg-5 col-md-12 load-more-covers-button-div'>
            <button className='btn btn-block btn-secondary btn-load-more-covers-click'>
              {__( 'Load more', 'planet4-blocks' )}
            </button>
          </div>
        </div>
      }
    </div>

  );
}
