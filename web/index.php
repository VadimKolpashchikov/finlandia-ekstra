<?php

use helicon\Nova;
use helicon\helper\Helper;

require(__DIR__ . '/../vendor/autoload.php');

global $config;
$config = Helper::config();

$app = new Nova($_SERVER, $config);
$app->begin();

$defender = Helper::getGlobalFormDefender();
echo $defender->protectContent($app->lhtml);