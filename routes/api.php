<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\HotelController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::post('/hotel', [HotelController::class, 'store'])->name('store');
    Route::post('/room', [HotelController::class, 'storeRoom'])->name('storeRoom');
    Route::post('/reservation', [HotelController::class, 'reservation'])->name('reservation');

    Route::get('/posts', [HotelController::class, 'posts']);
    Route::get('/users', [AuthController::class, 'users']);

});

Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('/gethotels', [HotelController::class, 'getHotels']);
Route::get('/gethotel', [HotelController::class, 'getHotel']);
