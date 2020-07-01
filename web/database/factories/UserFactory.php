<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;

$factory->define(User::class, function (Faker $faker) {
    return [
        'user' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => 'f9f50559bf1864b50aa6bf2166f7f854'
    ];
});
