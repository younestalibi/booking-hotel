<?php

namespace App\Http\Controllers\Api;

use App\Models\Room;
use App\Models\Hotel;
use App\Models\Image;
use App\Models\Reserve;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RequestReserve;
use App\Http\Requests\RequestStoreHotel;

class HotelController extends Controller
{
    public function store(RequestStoreHotel $request)
    {
        $data = $request->validated();
        $hotel=Hotel::create([
            'name' => $data['name'],
            'type' => $data['type'],
            'city' => $data['city'],
            'address' => $data['address'],
            'center' => $data['center'],
            'beach' => $data['beach'],
            'subtitle' => $data['subtitle'],
            'description' => $data['description'],
            'min_price' => $data['min_price'],
            'rooms' => $data['rooms'],
            'rate' => $data['rate'],
            'user_id' => auth()->user()->id

        ]);
        foreach ($data['images'] as $image) {
            Image::create([
                'image'=>$image->store('uploads','public'),
                'hotel_id'=>$hotel->id,
            ]);
        }

        $room=Room::create([
            'room_number' => $data['room_number'],
            'is_available' => 1,
            'max_people' => $data['max_people'],
            'price_per_night' => $data['price_night'],
            'description' => $data['details'],
            'hotel_id' => $hotel->id,
        ]);

        return response([
            'message'=>'operations done successfully',
        ]);
    }

    public function storeRoom(Request $request)
    {
        $data=$request->validate([
            'room_number' => ['required'],
            'max_people' => ['required'],
            'price_night' => ['required'],
            'details' => ['required'],
            'hotel_id' => ['required'],
        ]);
        $room=Room::create([
            'room_number' => $data['room_number'],
            'is_available' => 1,
            'max_people' => $data['max_people'],
            'price_per_night' => $data['price_night'],
            'description' => $data['details'],
            'hotel_id' => $data['hotel_id'],
        ]);
        return response([
            'message'=>'operations done successfully',
        ]);
    }

    public function posts()
    {
        $hotels = Hotel::where('user_id', auth()->user()->id)->with('images')->with('rooms')->get();
        return Response(compact('hotels'));
    }

    public function getHotels(Request $request)
    {
        // $hotels = Hotel::where('city', $request->city)->with('images')->get();
        // return Response(compact('hotels'));
        $data = $request->validate([
            'city'=>['required']
        ]);

        if(!is_null($request->minPrice) && !is_null($request->maxPrice)){
            $hotels = Hotel::where('city', $request->city)
            ->where('min_price', '>=', $request->minPrice)
            ->where('min_price', '<=', $request->maxPrice)
            ->with('images')->paginate(7);
        }
        elseif (!is_null($request->maxPrice)){
            $hotels = Hotel::where('city', $request->city)
            ->where('min_price', '<=', $request->maxPrice)
            ->with('images')->paginate(7);
        }

        elseif (!is_null($request->minPrice)){
            $hotels = Hotel::where('city', $request->city)
            ->where('min_price', '>', $request->minPrice)
            ->with('images')->paginate(7);
        }
        else{
            $hotels = Hotel::where('city', $request->city)->with('images')->paginate(7);
        // return Response(compact('hotels'));
        }
        return  response(
            [
                'hotels'=>$hotels,
                // 'message2'=>$request->maxPrice,
                // 'message2'=>$hotels->minPrice,
            ]
        );

    }
    public function getHotel(Request $request)
    {
        $hotel=Hotel::where('id',$request->id)->with('images')->with('rooms')->get();
        return Response(compact('hotel'));

    }

    public function reservation(RequestReserve $request)
    {
        $data = $request->validated();
        $room=Room::find($data['room_id']);
        $room->is_available=0;
        $room->update();
        $room=Reserve::create([
            'user_id' => auth()->user()->id,
            'room_id' => $data['room_id'],
            'check_in_date' => $data['check_in_date'],
            'check_out_date' => $data['check_out_date'],
            'total_price' => $data['total_price'],
        ]);
        return response([
            'message'=>'operations done successfully',
        ]);
    }
}
