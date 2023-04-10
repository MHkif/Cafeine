<?php

/**
 * Reset some theme mod from url in admin area - administrators only
 */
add_action( 'admin_init', 'envo_extra_reset_mod' );

function envo_extra_reset_mod() {
  $current_user = wp_get_current_user();
  // This will help you reset some theme mods from URL. Perfect if you put something wrong into custom code and it will break your page
  // Code example:
  // Reset code added to the HEAD: ?reset-theme-mods=1&option=header-code
  // Reset code added to the footer: ?reset-theme-mods=1&option=footer-code
  // You can use it if you are site administrator and your are in admin area.
  if ( isset( $_GET['reset-theme-mods'] ) && '1' === $_GET['reset-theme-mods'] && $_GET['option'] != '' && is_admin() !== false && current_user_can('administrator') ) {
      remove_theme_mod( $_GET['option'] );
  }
}

function envo_extra_fonts() {
    if (envo_extra_check_for_enwoo_pro()) {
        $fonts = array();
    } else {
        $fonts = array(
                'google' => array(
                    'Roboto',
                    'Open Sans',
                    'Lato',
                    'Roboto Condensed',
                    'Slabo 27px',
                    'Montserrat',
                    'Oswald',
                    'Source Sans Pro',
                    'Raleway',
                    'Merriweather',
                ),
            );
    }
    return $fonts;
}
add_action( 'admin_init', 'envo_extra_fonts' );