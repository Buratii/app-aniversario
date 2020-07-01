<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class User extends Model
{
    protected $fillable = [
        'user', 'email', 'password'
    ];

    public function setPasswordAttribute($password){

        if(trim($password) === ''){
            return;
        }

        $this->attributes['password'] = Hash::make($password);
    }
}
