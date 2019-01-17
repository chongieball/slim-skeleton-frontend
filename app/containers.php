<?php

use Slim\Container;
use Slim\Views\Twig as View;
use Slim\Views\TwigExtension as ViewExt;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

$container = $app->getContainer();

$container['view'] = function (Container $container) {
    $setting = $container->get('settings')['view'];

    $view = new View($setting['path'], $setting['twig']);
    $view->addExtension(new ViewExt($container->router, $container->request->getUri()));

    $view->getEnvironment()->addGlobal('flash', $container->flash);

    $view->getEnvironment()->addGlobal('baseUrl', $container->request->getUri()->getHost());

    if (isset($_SESSION['login'])) {
        $view->getEnvironment()->addGlobal('login', $_SESSION['login']);
    }

    if (isset($_SESSION['errors'])) {
        $view->getEnvironment()->addGlobal('errors', $_SESSION['errors']);

        unset($_SESSION['errors']);
    }

    if ($_SESSION['old']) {
        $view->getEnvironment()->addGlobal('old', $_SESSION['old']);

        unset($_SESSION['old']);
    }

    return $view;
};

$container['flash'] = function () {
    return new \Slim\Flash\Messages;
};

$container['csrf'] = function () {
    return new \Slim\Csrf\Guard;
};

$container['guzzle'] = function (Container $container) {
    $setting = $container->get('settings')['guzzle'];
    return new Client(['base_uri' => $setting['base_uri'], 'headers' => $setting['headers']]);
};