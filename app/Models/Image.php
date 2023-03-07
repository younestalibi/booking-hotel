<?php

namespace App\Models;

use App\Models\Hotel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Image extends Model
{
    use HasFactory;
    public function hotel()
    {
        return $this->BelongsTo(Hotel::class);
    }
    protected $fillable = [
        'image',
        'room_id',
        'hotel_id',
    ];
}
