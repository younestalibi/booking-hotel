<?php

namespace App\Models;

use App\Models\Hotel;
use App\Models\Reserve;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Room extends Model
{
    use HasFactory;
    public function hotel()
    {
        return $this->BelongsTo(Hotel::class);
    }
    public function reserve()
    {
        return $this->hasOne(Reserve::class);
    }

    protected $fillable = [
        'room_number',
        'is_available' ,
        'max_people',
        'price_per_night',
        'description',
        'hotel_id',
    ];
}
