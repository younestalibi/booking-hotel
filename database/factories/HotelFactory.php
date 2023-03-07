<?php

namespace Database\Factories;

use App\Models\Hotel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hotel>
 */
class HotelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $hotelType=['Hotels','Apartments','Resorts','Villas'];
        $prices=[1000,2000,400,700,400,300,1500,900,440];
        $rate=[5.6,3.5,7.8,9.8,9.9,7.4,3.5,7.9,8.7,8.9,6.8];
        $cities=['Tanger‎','Casablanca','Chefchaouen','Rabat','Tafraout','Tétouan‎','Marrakech','Martil'];
        return [
            'name' =>fake()->name(),
            'type' =>fake()->randomElement($hotelType),
            'city' =>fake()->randomElement($cities),
            'description' =>fake()->paragraph(),
            'address' =>fake()->address(),
            'center' =>fake()->numberBetween(1000,500),
            'beach' =>fake()->numberBetween(1,0),
            'subtitle'=>fake()->text(),
            'min_price' =>fake()->randomElement($prices),
            'rate' =>fake()->randomElement($rate),
            'user_id' =>fake()->numberBetween(1,10)
        ];
    }
}
