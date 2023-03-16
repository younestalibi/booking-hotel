<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $room_number=[100,101,102,103,104,105,106,107,108,109];
        return [
            'room_number' =>fake()->randomElement($room_number),
            'is_available' =>fake()->numberBetween(1,0),
            'max_people' =>fake()->numberBetween(1,6),
            'price_per_night' =>fake()->numberBetween(50,500),
            'description' =>fake()->text(),
            'hotel_id' =>fake()->numberBetween(1,200)
        ];
    }
}
