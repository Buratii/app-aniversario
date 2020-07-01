<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::namespace('API')->name('api.')->group(function(){
    Route::prefix('/users')->group(function(){


        Route::get('/', 'UserController@index')->name('index_users');
        Route::get('/{id}', 'UserController@show')->name('single_user');

        Route::post('/register', 'UserController@store')->name('store_users');
    });

    Route::prefix('/birthdays')->group(function(){


        Route::get('/', 'BirthdayController@index')->name('index_birthdays');
        Route::get('/{id}', 'BirthdayController@show')->name('single_birthday');

        Route::post('/birthdays', 'BirthdayController@store')->name('store_birthday');

        Route::put('/update/{id}', 'BirthdayController@update')->name('update_birthdays');

        Route::delete('/delete/{id}', 'BirthdayController@delete')->name('delete_birthdays');
    });
});
