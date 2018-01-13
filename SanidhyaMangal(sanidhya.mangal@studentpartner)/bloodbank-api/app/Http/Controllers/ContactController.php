<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class ContactController extends Controller
{
    public function create(Request $request){
        $contact =  Contact::sendfeedback($request);
        return response()->json($contact);
    }
}
