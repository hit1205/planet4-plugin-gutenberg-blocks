<?php
/**
 * Deep Dive pattern class.
 *
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Patterns;

/**
 * Class Deep Dive.
 *
 * @package P4GBKS\Patterns
 */
class DeepDive extends Block_Pattern {

	/**
	 * Returns the pattern name.
	 */
	public static function get_name(): string {
		return 'p4/deep-dive';
	}

	/**
	 * Returns the template for one column.
	 */
	public static function get_column_template(): string {
		return '
			<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:group {"className":"group-stretched-link"} -->
						<div class="wp-block-group group-stretched-link">
							<!-- wp:image {"align":"center","className":"force-no-lightbox force-no-caption is-style-rounded-180"} -->
								<div class="wp-block-image is-style-rounded-180 force-no-lightbox force-no-caption">
									<figure class="aligncenter">
										<img src="' . esc_url( get_template_directory_uri() ) . '/images/placeholders/placeholder-180x180.jpg" alt="' . __( 'Default image', 'planet4-blocks-backend' ) . '" />
									</figure>
								</div>
							<!-- /wp:image -->
							<!-- wp:heading {"level":5,"style":{"typography":{"fontSize":"1rem"}},"textAlign":"center","className":"is-style-chevron","placeholder":"' . __( 'Enter topic', 'planet4-blocks-backend' ) . '"} -->
								<h5 style="font-size:1rem;" class="has-text-align-center is-style-chevron"></h5>
							<!-- /wp:heading -->
							<!-- wp:spacer {"height":"16px"} -->
								<div style="height:16px" aria-hidden="true" class="wp-block-spacer"></div>
							<!-- /wp:spacer -->
						</div>
					<!-- /wp:group -->
				</div>
			<!-- /wp:column -->
		';
	}

	/**
	 * Returns the pattern config.
	 * We start with 4 columns, but editors can easily remove and/or duplicate them.
	 * This pattern should have grey 5% background by default.
	 *
	 * @param array $params Optional array of parameters for the config.
	 */
	public static function get_config( $params = [] ): array {
		$classname         = self::get_classname();
		$title_placeholder = $params['title_placeholder'] ?? '';
		$background_color  = $params['background_color'] ?? 'grey-05';

		return [
			'title'      => 'Deep Dive',
			'categories' => [ 'planet4' ],
			'content'    => '
				<!-- wp:group {"className":"block ' . $classname . '","align":"full","backgroundColor":"' . $background_color . '"} -->
					<div class="wp-block-group alignfull block ' . $classname . ' has-' . $background_color . '-background-color has-background">
						<!-- wp:group {"className":"container"} -->
							<div class="wp-block-group container">
								<!-- wp:spacer {"height":"24px"} -->
									<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
								<!-- /wp:spacer -->
								<!-- wp:heading {"textAlign":"center","placeholder":"' . __( 'Enter title', 'planet4-blocks-backend' ) . '"} -->
									<h2 class="has-text-align-center">' . $title_placeholder . '</h2>
								<!-- /wp:heading -->
								<!-- wp:columns -->
									<div class="wp-block-columns">
										' . self::get_column_template() . '
										' . self::get_column_template() . '
										' . self::get_column_template() . '
										' . self::get_column_template() . '
									</div>
								<!-- /wp:columns -->
							</div>
						<!-- /wp:group -->
					</div>
				<!-- /wp:group -->
			',
		];
	}
}
