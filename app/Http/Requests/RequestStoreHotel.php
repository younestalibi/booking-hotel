<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestStoreHotel extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return
        [
            'name' => ['required'],
            'images' => ['required'],
            'type' => ['required'],
            'city' => ['required'],
            'address' => ['required'],
            'center' => ['required'],
            'beach' => ['required'],
            'subtitle' => ['required'],
            'description' =>['required'],
            'min_price' => ['required'],
            'rooms' => ['required'],
            'rate' => ['required'],

            'room_number' =>['required'],
            'max_people' => ['required'],
            'price_night' => ['required'],
            'details' => ['required']
        ];
    }
}
