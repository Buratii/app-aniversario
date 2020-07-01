<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Birthday;
use Faker\Generator as Faker;

$factory->define(Birthday::class, function (Faker $faker) {
    $users = App\User::pluck('id')->toArray();
    return [
        'user_id' => $faker->randomElement($users),
        'date' => $faker->date,
        'time' => $faker->time,
        'localization' => $faker->name,
        'gift' => $faker->name
    ];
});
