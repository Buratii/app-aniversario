<?php

namespace App\Http\Controllers\Api;

use App\API\ApiError;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    /**
     * @var User
     */
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function index(){

        $data = ['data' => $this->user->paginate(5)];

        return response()->json($data);
    }

    public function show(User $id){

        $data = ['data' => $id];

        return response()->json($data);
    }

    public function store(Request $request){

        try {

            $dataUser = $this->user->create($request->only(
                'user',
                'email',
                'password'
            ));

            return response()->json($dataUser, 201);

        } catch (\Exception $e) {
            if(config('app.debug')){
                return response()->json(ApiError::errorMessage($e->getMessage(), 1010));
            }

            return response()->json(ApiError::errorMessage('Error to accomplish the operation', 1010));
        }
    }
}
