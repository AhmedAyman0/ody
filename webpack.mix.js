const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Word Map
mix.styles([
    'resources/css/leaflet/Leaflet.css',
    'resources/css/leaflet/Leaflet.Easy-Button.css',
    'resources/css/leaflet/Leaflet.Geoman.css',
    'resources/css/leaflet/Leaflet.Fullscreen.css',
], 'public/css/leaflet.css');

mix.scripts([
    'resources/js/worldmap/Leaflet.min.js',
    'resources/js/worldmap/Leaflet.Geoman.min.js',
    'resources/js/worldmap/Leaflet.Easy-Button.js',
    'resources/js/worldmap/Leaflet.Fullscreen.js',
    'resources/js/worldmap/xSROMap.js',
    'resources/js/worldmap/main.js',
], 'public/js/worldmap.min.js');

// Backend css
mix.sass(
    'resources/css/backend/scss/sb-admin-2.scss',
    'public/css/backend/app.css'
);

mix.styles([
    'resources/css/backend/vmenuModule.css',
], 'public/css/components.css');

// Backend Javascript
mix.scripts([
    'resources/vendor/jquery/jquery.min.js',
    'resources/js/frontend/jquery-ui.js', // Item Hover Information
    'resources/js/frontend/jquery-migrate.js', // Item Hover Information
    'resources/vendor/jquery-easing/jquery.easing.min.js', // Item Hover Information
    'resources/vendor/bootstrap/js/bootstrap.bundle.min.js',
    'resources/js/frontend/bsTooltipChange.js', // Item Hover Information
    'resources/vendor/jquery-easing/jquery.easing.min.js',
    'resources/js/backend/sb-admin-2.js',
    'resources/js/backend/summernote-bs4.js',
    'resources/vendor/datatables/jquery.dataTables.min.js',
    'resources/vendor/jquery-easing/jquery.easing.min.js',
    'resources/vendor/datatables/dataTables.bootstrap4.min.js',
    'resources/vendor/chart.js/Chart.bundle.min.js',
    'resources/js/backend/moment.js',
    'resources/js/backend/vmenuModule.js',
], 'public/js/backend/app.js');

// Frontend css
mix.sass(
    'resources/css/frontend/scss/main.scss',
    'public/css/app.css'
);

// Frontend css for arabic
mix.sass(
    'resources/css/frontend/scss/main-rtl.scss',
    'public/css/app-rtl.css'
);

// Frontend Javascript
mix.scripts([
    'resources/vendor/jquery/jquery.min.js',
    'resources/js/frontend/jquery-ui.js',
    'resources/js/frontend/jquery-migrate.js',
    'resources/vendor/jquery-easing/jquery.easing.min.js',
    'resources/vendor/bootstrap/js/bootstrap.bundle.min.js',
    'resources/js/frontend/bsTooltipChange.js',
    'resources/js/backend/summernote-bs4.js',
    'resources/vendor/datatables/jquery.dataTables.min.js',
    'resources/vendor/jquery-easing/jquery.easing.min.js',
    'resources/vendor/datatables/dataTables.bootstrap4.min.js',
    'resources/vendor/chart.js/Chart.bundle.min.js',
    'resources/js/backend/moment.js',
    'resources/js/frontend/timers.js',
    'resources/js/frontend/minimap.js',
    'resources/js/backend/vmenuModule.js',
], 'public/js/app.js');


mix.scripts([
    'resources/js/frontend/webinventory/main.js'
], 'public/js/webinventory.js');

if (mix.inProduction()) {
    mix.version();
}
