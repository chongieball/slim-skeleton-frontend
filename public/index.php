<?php

ini_set('session.gc_maxlifetime', 24*60*60 );
error_reporting(E_ALL);
ini_set('display_errors', 0);
require __DIR__ .'/../app/bootstrap.php';

$app->run();