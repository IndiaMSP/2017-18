<?php

namespace App\Http\Controllers;
use App\Banks;

use Illuminate\Http\Request;

class BanksController extends Controller
{
   public function index(){
       $banks = Banks::all();

       return response()->json($banks);
   }

   public function create(Request $request){
       $bank =  Banks::registerBank($request);
       return response($bank);
   }
}
