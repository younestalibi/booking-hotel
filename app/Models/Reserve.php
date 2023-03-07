<?php

namespace App\Models;

use App\Models\Room;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reserve extends Model
{
    use HasFactory;
    public function room()
    {
        return $this->BelongsTo(Room::class);
    }
    public function user()
    {
        return $this->BelongsTo(User::class);
    }
    protected $fillable = [
        'user_id',
        'room_id' ,
        'check_in_date',
        'check_out_date',
        'total_price',
    ];
}
