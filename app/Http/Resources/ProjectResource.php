<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'due_date' => $this->due_date,
            'status' => $this->status, 
            'description' => $this->description,
            'assigned_to' => new UserResource($this->assignedTo),
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d H:i'),
            'updated_at' => (new Carbon($this->updated_at))->format('Y-m-d H:i'),
            'image' => $this->image,
            'created_by' => new UserResource($this->createdBy),
            'updated_by' => new UserResource($this->updatedBy),
        ];
    }
}
