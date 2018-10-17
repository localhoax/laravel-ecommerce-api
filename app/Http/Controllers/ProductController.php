<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
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
    public function all_category() {
        $category = Product::all()->pluck('category')->toArray();
        $category = array_unique($category);
        $result = [];
        foreach($category as $cat){
            $sm = Product::where('category', '=', $cat)->get();
            $result[$cat] = $sm;
        }
        return response()->json($result, 201);
    }
    public function one_category($cat) {
        $products = Product::where('category', '=', $cat)->get()->toArray();
        return response()->json($products, 201);
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
