<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('videos')->truncate();
        // Insert
        DB::table('videos')->insert([
            ['title' => 'Peekaboo Playground', 'vid' => 'BIgQ0UQIkqo'],
            ['title' => 'When The Band Comes Marching In', 'vid' => '1h6F-YngTi0'],
            ['title' => 'Open Shut Them #2', 'vid' => 'DzA1VQL1oME'],
            ['title' => '10 Little Fishies - Featuring Baby Shark!', 'vid' => 'dg0cQtVisLw'],
            ['title' => 'Apples & Bananas', 'vid' => 'r5WLXZspD1M'],
            ['title' => 'How Many Fingers?', 'vid' => 'xNw1SSz18Gg'],
            ['title' => 'Twinkle Twinkle Little Star', 'vid' => 'yCjJyiqpAuU'],
            ['title' => 'This Is The Way', 'vid' => '4XLQpRI_wOQ'],
            ['title' => 'Do You Like Broccoli Ice Cream?', 'vid' => 'frN3nvhIHUk'],
            ['title' => 'If You\'re Happy', 'vid' => 'l4WNrvVjiTw'],
            ['title' => 'Little Snowflake', 'vid' => 'tbbKjDjMDok'],
            ['title' => 'One Little Finger', 'vid' => 'eBVqcTEC3zQ'],
            ['title' => 'BINGO', 'vid' => '9mmF8zOlh_g'],
            ['title' => 'Put On Your Shoes', 'vid' => '-jBfb33_KHU'],
            ['title' => 'Hickory Dickory Dock', 'vid' => 'HGgsklW-mtg'],
            ['title' => 'Do You Like Lasagna Milkshakes?', 'vid' => '13mftBvRmvM'],
            ['title' => 'This Is The Way We Get Dressed', 'vid' => '1GDFa-nEzlg'],
            ['title' => 'Rain Rain Go Away', 'vid' => 'LFrKYjrIDs8'],
            ['title' => 'Five Little Monkeys', 'vid' => 'ZhODBFQ2-bQ'],
            ['title' => 'Walking In The Jungle', 'vid' => 'GoSq-yZcJ-4'],
            ['title' => 'Do You Like Spaghetti Yogurt?', 'vid' => 'ddDN30evKPc'],
            ['title' => 'Ten In The Bed', 'vid' => 'TdDypyS_5zE'],
            ['title' => 'The Animals On The Farm', 'vid' => 'zXEq-QO3xTg'],
            ['title' => 'The Ants Go Marching', 'vid' => '2S__fbCGwOM'],
            ['title' => 'The Wheels On The Bus', 'vid' => 'GzrjwOQpAl0'],
            ['title' => 'Row Row Row Your Boat', 'vid' => '7otAJa3jui8'],
            ['title' => 'The Muffin Man', 'vid' => 'fXFg5QsTcLQ'],
            ['title' => 'Old MacDonald Had A Farm', 'vid' => '5oYKonYBujg'],
            ['title' => 'One For You, One For Me', 'vid' => 'WHbhD2w3a20'],
            ['title' => 'Mr. Sun, Sun, Mr. Golden Sun', 'vid' => 'hlzvrEfyL2Y'],
            ['title' => 'Go Away, Spooky Goblin!', 'vid' => 'gWwGeeYKEAo'],
            ['title' => 'The Bees Go Buzzing', 'vid' => 'bWUgZm_AE64']
        ]);
    }
}
