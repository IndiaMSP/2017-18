<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Contact;

class Contact extends Model
{
    public static function sendfeedback($request){
        $contact = new Contact;
        
        $contact->name=$request->name;
        $contact->email=$request->email;
        $contact->feedback = $request->feedback;

        $contact->save();

        return $contact;
    }
}
