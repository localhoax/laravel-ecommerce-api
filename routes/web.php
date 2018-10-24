<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/store', function () {
    return view('dashboard');
});