<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'id';
    protected $fillable = ['title', 'description', 'price', 'quantity', 'category', 'thumbnail_url'];

    public function taskinteractions()
    {
        return $this->hasMany('App\Taskinteraction'); // Meaning - One Task can have multiple interactions
    }
}
