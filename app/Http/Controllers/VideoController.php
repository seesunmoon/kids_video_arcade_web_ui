<?php

namespace App\Http\Controllers;

use App\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function index()
    {
        $videos = Video::inRandomOrder()->get();

        return $videos->toJson();
    }

    public function counter($vid)
    {
        Video::where('vid', $vid)->increment('play_counter');

        return response()->json('Video $vid counter is increased!');
    }
}
