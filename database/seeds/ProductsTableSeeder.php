<?php

use Illuminate\Database\Seeder;
use App\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::truncate();
        $faker = \Faker\Factory::create();
        for($i=0; $i<50; $i++){
            Product::create([
               'title' => $faker->sentence,
               'description' => $faker->paragraph,
               'price' => $faker->numberBetween(400, 10000),
               'category' => $faker->word,
               'thumbnail_url'=> $faker->url,
               'quantity' => $faker->numberBetween(0, 50)
            ]);
        }
    }
}
