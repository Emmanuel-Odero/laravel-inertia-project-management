<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(),
            'image' => $this->faker->imageUrl(),
            'status' => $this->faker->randomElement(['pending', 'ongoing', 'completed']),
            'priority' => $this->faker->randomElement(['low', 'normal', 'high']),
            'due_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'assigned_to' => 1,
            'created_by' => 1,
            'updated_by' => 1,
            'project_id' => 1,
        ];
    }
}
