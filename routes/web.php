<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;

Route::redirect('/', '/dashboard');

Route::middleware('auth','verified')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::get('projects/edit/{project}', [ProjectController::class, 'edit'])->name('project.edit');
    Route::get('projects/delete/{project}', [ProjectController::class, 'destroy'])->name('project.destroy');
    Route::get('tasks', [TaskController::class, 'index'])->name('tasks.index');
    Route::get('users', [UserController::class, 'index'])->name('users.index');
});

require __DIR__.'/auth.php';
