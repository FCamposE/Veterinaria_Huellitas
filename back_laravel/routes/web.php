<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//Route::resource('/citas', [App\Http\Controllers\CitaController::class]);
Route::resource('citas','App\Http\Controllers\CitaController');
