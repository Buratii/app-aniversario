<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::namespace('API')->name('api.')->group(function(){
    Route::prefix('/users')->group(function(){


        Route::get('/', 'UserController@index')->name('index_users');
        Route::get('/{id}', 'UserController@show')->name('single_user');

        Route::post('/register', 'UserController@store')->name('register_users');
    });

    Route::post('/login', 'AuthController@login')->name('login');

    Route::group(['middleware' => ['apiJwt']], function(){

        Route::post('/registerBirthday', 'BirthdayController@store')->name('store_birthday');

        Route::get('/birthdays', 'BirthdayController@index')->name('index_birthdays');
        Route::get('/birthdays/{id}', 'BirthdayController@show')->name('single_birthday');

        Route::put('/update/{id}', 'BirthdayController@update')->name('update_birthdays');

        Route::delete('/delete/{id}', 'BirthdayController@delete')->name('delete_birthdays');
    });



});
