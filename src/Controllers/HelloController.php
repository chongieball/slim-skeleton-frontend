<?php
/**
 * Created by PhpStorm.
 * User: chongieball
 * Date: 17/01/19
 * Time: 21.43
 */

namespace App\Controllers;

use Slim\Http\Request;
use Slim\Http\Response;

class HelloController extends BaseController {

    public function hello(Request $req, Response $res) {
        echo "hello";
    }
}