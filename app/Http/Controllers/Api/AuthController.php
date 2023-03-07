<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\RequestLogin;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RequestRegister;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    public function register(RequestRegister $request)
    {
        $data = $request->validated();
        // /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' =>Hash::make($data['password'],)
        ]);

        $token = $user->createToken('token')->plainTextToken;
        return response(compact('user', 'token'));
    }


    public function login(RequestLogin $request)
    {
        $data = $request->validated();
        if (!Auth::attempt($data)) {
            return response([
                'message' => 'Provided email or password is incorrect',
            ], 422);
        }
        // /** @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;
        $cookie=cookie('jwt' , $token , 60*24);
        return response(compact('user', 'token'))->Cookie($cookie);
    }
    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }

    public function users()
    {
        # code...
        return auth()->user()->hotels;
    }
    

}
