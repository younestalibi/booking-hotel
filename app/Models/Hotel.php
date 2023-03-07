<?php

namespace App\Models;

use App\Models\Room;
use App\Models\User;
use App\Models\Image;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Hotel extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->BelongsTo(User::class);
    }
    public function images()
    {
        return $this->HasMany(Image::class);
    }
    public function rooms()
    {
        return $this->HasMany(Room::class);
    }

    protected $fillable = [
        'name',
        'type' ,
        'city',
        'address',
        'center',
        'beach',
        'subtitle',
        'description',
        'min_price',
        'rooms',
        'rate',
        'user_id'
    ];
}
