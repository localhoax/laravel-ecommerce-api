<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    public function index(){
        return Product::all();
    }

    public function show(Product $product){
        return $product;
    }

    public function store(Request $req){
        $product = Product::create($req->all());
        return response()->json($product, 201);
    }

    public function update(Request $req, Product $product){
        $product->update($req->all());
        return response()->json($product, 200);
    }

    public function delete(Product $product){
        $product->delete();
        return response()->json(null, 204);  
    }
}
