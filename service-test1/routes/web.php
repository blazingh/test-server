<?php

/** @var \Laravel\Lumen\Routing\Router $router */

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use Illuminate\Support\Facades\Redis;


$router->get('/', function () use ($router) {
    try {
        $redis = Redis::connect('127.0.0.1', 3306);
        return response('redis working');
    } catch (\Predis\Connection\ConnectionException $e) {
        return response('error connection redis');
    }


    $response = "yes i can develop";

    return $response;
});
$router->get('/too', function () use ($router) {


    if (DB::connection()->getDatabaseName()) {
        return "conncted sucessfully to database " . DB::connection()->getDatabaseName();
    }
});
$router->get('/auth', function () use ($router) {

    return "this is the auth routes";
});
$router->get('/auth/login', function () use ($router) {

    return "this is the auht LOGIN route";
});
$router->get('/auth/register', function () use ($router) {

    return "this is the auth REGISTER route";
});
