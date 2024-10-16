<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'due_date',
        'status',
        'image',
        'created_by',
        'updated_by',
        'assigned_to',
    ];
    public function tasks()
    {
        return $this->hasMany(Task::class);
    } 
    // Create by
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    // Update by
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    } 
}
