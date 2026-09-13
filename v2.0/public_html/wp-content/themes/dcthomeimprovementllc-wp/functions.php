<?php

function dct_enqueue_assets() {

    wp_enqueue_style(
        'bootstrap',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        array(),
        null
    );

    wp_enqueue_style(
        'dct-style',
        get_template_directory_uri() . '/css/style.css',
        array('bootstrap'),
        null
    );

    wp_enqueue_script(
        'jquery'
    );

    wp_enqueue_script(
        'dct-scripts',
        get_template_directory_uri() . '/js/scripts.js',
        array('jquery'),
        null,
        true
    );

    wp_enqueue_script(
        'dct-data',
        get_template_directory_uri() . '/js/data.js',
        array('dct-scripts'),
        null,
        true
    );

    wp_enqueue_script(
        'bootstrap-js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
        array(),
        null,
        true
    );
}

add_action('wp_enqueue_scripts', 'dct_enqueue_assets');