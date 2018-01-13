<?php

namespace App;

use App\Banks;
use Illuminate\Database\Eloquent\Model;

class Banks extends Model
{
    public static function registerBank($request){
        $bank = new Banks;
        
        $bank->name = $request->name;
        $bank->ownername = $request->ownername;
        $bank->type = $request->type;
        $bank->street = $request->street;
        $bank->city = $request->city;
        $bank->state = $request->state;

        $bank->save();

        return $bank;
    }
}
