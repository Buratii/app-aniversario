<?php

namespace App\Http\Controllers\Api;

use App\Birthday;
use App\API\ApiError;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BirthdayController extends Controller
{

    /**
     * @var Birthday
     */
    private $birthday;

    public function __construct(Birthday $birthday)
    {
        $this->birthday = $birthday;
    }

    public function index(){

        $data = ['data' => $this->birthday->paginate(5)];

        return response()->json($data);
    }

    public function show($id){

        $birthday = $this->birthday->find($id);

        if(! $birthday){
            return response()->json(['data' => ['msg' => 'Birthdays not found']], 404);
        }

        $data = ['data' => $birthday];

        return response()->json($data);
    }

    public function store(Request $request){
        try{

        $birthdayData = $this->birthday->create($request->only(
            'user_id',
            'date',
            'time',
            'localization',
            'gift'
        ));

        response()->json($birthdayData);

    } catch (\Exception $e) {
        if(config('app.debug')){
            return response()->json(ApiError::errorMessage($e->getMessage(), 1010));
        }

        return response()->json(ApiError::errorMessage('Error to accomplish the operation', 1010));
    }
    }

    public function update(Request $request, $id){
        try{
        $birthdayData = $request->only(
            'date',
            'time',
            'localization',
            'gift'
        );

        $birthday = $this->birthday->find($id);

        if(! $birthday){
            return response()->json(['data' => ['msg' => 'Birthdays not found']], 404);
        }

        $birthday->update($birthdayData);

        response()->json($birthday);

        } catch (\Exception $e) {
            if(config('app.debug')){
                return response()->json(ApiError::errorMessage($e->getMessage(), 1011));
            }

            return response()->json(ApiError::errorMessage('Error to accomplish the operation', 1011));
        }
    }

    public function delete(Birthday $id){
    try{

        if(! $id){
            return response()->json(['data' => ['msg' => 'Birthdays not found']], 404);
        }

        $id->delete();

        return response()->json(['data' => ['msg' => 'Birthday: ' . $id->name . 'removed']], 200);

    } catch (\Exception $e) {
        if(config('app.debug')){
            return response()->json(ApiError::errorMessage($e->getMessage(), 1012));
        }

        return response()->json(ApiError::errorMessage('Error to accomplish the operation', 1012));
    }
    }
}
