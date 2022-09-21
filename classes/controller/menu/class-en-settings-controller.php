<?php
/**
 * EN Settings Controller
 * Note: During migration of EN plugin to blocks plugin, This file was rename(git mv) with wrong filename, the git history of this file is found at.-
 * https://github.com/greenpeace/planet4-plugin-gutenberg-blocks/blob/453d2428c12d6309da2e3b21f021f8129625d75c/en-plugin/classes/controller/menu/class-fields-settings-controller.php
 *
 * @package P4GBKS\Controllers
 */

namespace P4GBKS\Controllers\Menu;

use P4\MasterTheme\Features;
use P4\MasterTheme\Features\EngagingNetworks;
use P4\MasterTheme\MigrationLog;
use P4\MasterTheme\Migrations\M001EnableEnFormFeature;

/**
 * Class Settings_Controller
 */
class En_Settings_Controller extends Controller {

	/**
	 * Create menu/submenu entry.
	 */
	public function create_admin_menu() {
		// We need to check if the migration already ran, as the EN block is on by default, but we cannot give an option
		// that was added using CMB2 a default value of 'on', because then it can't be turned off.
		$migration_ran     = MigrationLog::from_wp_options()->already_ran( M001EnableEnFormFeature::get_id() );
		$feature_is_active = ! $migration_ran || Features::is_active( 'feature_engaging_networks' );

		if ( $feature_is_active && current_user_can( 'manage_options' ) ) {
			add_menu_page(
				'Engaging Networks',
				'Engaging Networks',
				'edit_pages',
				P4GBKS_EN_SLUG_NAME,
				'',
				P4GBKS_ADMIN_DIR . 'images/en.png'
			);

			add_submenu_page(
				P4GBKS_EN_SLUG_NAME,
				__( 'Settings', 'planet4-engagingnetworks-backend' ),
				__( 'Settings', 'planet4-engagingnetworks-backend' ),
				'manage_options',
				'en-settings',
				[ $this, 'prepare_settings' ]
			);
		}
		add_action( 'admin_init', [ $this, 'register_settings' ] );
	}

	/**
	 * Render the settings page of the plugin.
	 */
	public function prepare_settings() {
		$this->view->settings(
			[
				'settings'            => get_option( 'p4en_main_settings' ),
				'available_languages' => P4GBKS_LANGUAGES,
				'domain'              => 'planet4-engagingnetworks-backend',
			]
		);
	}

	/**
	 * Register and store the settings and their data.
	 */
	public function register_settings() {
		$args = [
			'type'              => 'string',
			'group'             => 'p4en_main_settings_group',
			'description'       => 'Planet 4 - EngagingNetworks settings',
			'sanitize_callback' => [ $this, 'valitize' ],
			'show_in_rest'      => false,
		];
		register_setting( 'p4en_main_settings_group', 'p4en_main_settings', $args );
	}

	/**
	 * Validates and sanitizes the settings input.
	 *
	 * @param array $settings The associative array with the settings that are registered for the plugin.
	 *
	 * @return mixed Array if validation is ok, false if validation fails.
	 */
	public function valitize( $settings ): array {
		if ( $this->validate( $settings ) ) {
			$this->sanitize( $settings );
		}
		return $settings;
	}

	/**
	 * Validates the settings input.
	 *
	 * @param array $settings The associative array with the settings that are registered for the plugin.
	 *
	 * @return bool
	 */
	public function validate( $settings ) : bool {
		if ( ! $settings ) {
			return true;
		}
		$has_errors = false;

		if ( isset( $settings['p4en_public_api'] ) && 36 !== strlen( $settings['p4en_public_api'] ) ) {
			add_settings_error(
				'p4en_main_settings-p4en_public_api',
				esc_attr( 'p4en_main_settings-p4en_public_api' ),
				__( 'Invalid value for Public API', 'planet4-engagingnetworks-backend' ),
				'error'
			);
			$has_errors = true;
		}
		if ( isset( $settings['p4en_private_api'] ) && 36 !== strlen( $settings['p4en_private_api'] ) ) {
			add_settings_error(
				'p4en_main_settings-p4en_private_api',
				esc_attr( 'p4en_main_settings-p4en_private_api' ),
				__( 'Invalid value for Private API', 'planet4-engagingnetworks-backend' ),
				'error'
			);
			$has_errors = true;
		}
		if ( isset( $settings['p4en_frontend_public_api'] ) && 36 !== strlen( $settings['p4en_frontend_public_api'] ) ) {
			add_settings_error(
				'p4en_main_settings-p4en_frontend_public_api',
				esc_attr( 'p4en_main_settings-p4en_frontend_public_api' ),
				__( 'Invalid value for Frontend Public API', 'planet4-engagingnetworks-backend' ),
				'error'
			);
			$has_errors = true;
		}
		if ( isset( $settings['p4en_frontend_private_api'] ) && 36 !== strlen( $settings['p4en_frontend_private_api'] ) ) {
			add_settings_error(
				'p4en_main_settings-p4en_frontend_private_api',
				esc_attr( 'p4en_main_settings-p4en_frontend_private_api' ),
				__( 'Invalid value for Frontend Private API', 'planet4-engagingnetworks-backend' ),
				'error'
			);
			$has_errors = true;
		}

		return ! $has_errors;
	}

	/**
	 * Sanitizes the settings input.
	 *
	 * @param array $settings The associative array with the settings that are registered for the plugin.
	 */
	public function sanitize( &$settings ) {
		if ( $settings ) {
			foreach ( $settings as $name => $setting ) {
				$settings[ $name ] = sanitize_text_field( $setting );
			}
		}
	}
}
