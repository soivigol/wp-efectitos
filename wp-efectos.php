<?php
/**
 * Plugin Name: WP Efectitos
 * Plugin URI:  wp-efectos
 * Description: Plugin para añadir efectos o animaciones a bloques de Gutenberg.
 * Version:     0.1
 * Author:      David Viña
 * Author URI:  www.davidviña.es
 * Text Domain: WPEfectitos
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package     WPEfectos
 * @author      David Viña
 * @copyright   2020 David Viña
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 */

defined( 'ABSPATH' ) || die( 'No script kiddies please!' );

define( 'VERSION', '1.0' );
/**
 * Load Styles and Scripts js
 *
 * @return void
 */
function efectitos_load_scripts() {
	wp_enqueue_script( 'js-efectitos', plugin_dir_url( __FILE__ ) . 'js/efectitos.js', array(), VERSION, 'all', true );

	wp_enqueue_style( 'css-efectitos', plugin_dir_url( __FILE__ ) . 'css/efectitos.css', array(), VERSION, 'all' );

}
add_action( 'wp_enqueue_scripts', 'efectitos_load_scripts' );
