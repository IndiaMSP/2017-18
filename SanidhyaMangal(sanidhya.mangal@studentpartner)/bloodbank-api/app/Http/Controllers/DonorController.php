<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Donor;
class DonorController extends Controller
{
    public function index(){
        // $donors = array("name"=>"Test1","Type"=>"SuperAdmin");
       $donors=  Donor::all();
       return response()->json($donors);
    }

    public function create(Request $request){
        $donor = Donor::registerDonors($request);

        return response()->json($donor);
    }
}
