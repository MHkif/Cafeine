<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cafeine' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'g0`EDTxM-QjZr.K?wS_k&+X!hfQ^<QLEj)O PBpNij0GOMk9`^y(XjMk3|TXE0te' );
define( 'SECURE_AUTH_KEY',  '{?N]P|q[BJ&VC(Z$QYRbO_!dKAPMFL1e~-lunp)X}BMPhEBup`T_=YPY}V=Mz2eE' );
define( 'LOGGED_IN_KEY',    'i?mr c%d0kEA>Ex)guCf=T@-m6c#(H&emw>0k)i;pd329d5(ocT-~<*n7|G4sgnw' );
define( 'NONCE_KEY',        ']BgiW>;~Yp| q@84S>ft|EC(<F[j#H$(WasvlHdHQ,hN 5F5i~zNN-X+ll;nsrE~' );
define( 'AUTH_SALT',        '8U<Oh7nkqnSdJ$}SV]Hl))&2uc(TF-uKy_7}Yhbzs58[MhxX[@^q&&9Td$v`>oXN' );
define( 'SECURE_AUTH_SALT', 'NjqyT#K{qu~{:FH>j<&(?EeWR9noOX~8ue:WO%l=yy{GJNL+vC=WD]dsD[PME&eR' );
define( 'LOGGED_IN_SALT',   'QtLvQM2o)VQVDamP-jM`~dl<p|+/3yE*9~WsQ1QHAYc,GwGI0J6pT1,)F&^HN,QQ' );
define( 'NONCE_SALT',       '7T~j0J{=gqUwauK/[)U3bK&Q{6GSLnTpdeTW,i2zc0KKllYOjosC3>l3d w$FMXG' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ca_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
