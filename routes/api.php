<?php

use Illuminate\Http\Request;
use App\Product;

Route::get('/', function(){
    $res = [
        'status' => 'Live',
        'version' => '1.0.0'
    ];
    return response()->json($res);
});

Route::get('products', 'ProductController@index');
Route::get('products/category', 'ProductController@all_category');
Route::get('products/{product}', 'ProductController@show');
Route::post('products', 'ProductController@store');
Route::get('products/category/{category}', 'ProductController@one_category');
Route::put('products/{product}', 'ProductController@update');
Route::delete('products/{product}', 'ProductController@delete');
?>