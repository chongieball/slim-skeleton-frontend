<?php

return [
    //setting display error
    'displayErrorDetails'	=> true,

    'addContentLengthHeader' => false,

    //setting timezone
    'timezone'	=> 'Asia/Jakarta',

    //setting language
    'lang'	=> [
        'default'	=> 'en',
    ],

    'determineRouteBeforeAppMiddleware' => true,

    //setting view (using twig)
    'view'	=> [
        'path'	=> __DIR__. '/../views',
        'twig'	=> [
            'cache'	=> false,
        ],
    ],

    'guzzle'	=> [
        'base_uri' => 'localhost/api',
    ]
];
