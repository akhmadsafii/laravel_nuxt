<?php

namespace Database\Seeders;

use App\Models\Note;
use Illuminate\Database\Seeder;
use Faker\Factory as FakerFactory;
use Illuminate\Support\Str;

class NoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = FakerFactory::create();

        for ($i = 0; $i < 100; $i++) {
            $title = rtrim(Str::padRight($faker->text(50), 100, ' '));
            $description = rtrim(Str::padRight($faker->text(600), 600, ' '));

            Note::create([
                'title' => $title,
                'description' => $description,
            ]);
        }
    }
}
