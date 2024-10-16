import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Pagination from '@/Components/Pagination';

export default function Index({auth, projects, links}) {
  return (
    <AuthenticatedLayout auth={auth}>
      {/* Projects */}
      {/* center the header */}
      <div className="mx-auto max-w-7xl mb-0">
        <h2 className="mt-3 text-xl font-semibold leading-tight text-gray-800">
          Projects
        </h2>
      </div>
      <Head title="Projects" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-2">
                      ID
                    </th>
                    <th className="px-3 py-2">
                      image
                    </th>
                    <th className="px-3 py-2">
                      Name
                    </th>
                    <th className="px-3 py-2">
                      Status
                    </th>
                    <th className="px-3 py-2">
                      Created Date
                    </th>
                    <th className="px-3 py-2">
                      Due Date
                    </th>
                    <th className="px-3 py-2">
                      Created By
                    </th> 
                    <th className="px-3 py-3 text-center mr-2">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.data.map((project) => (
                    <tr key={project.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th className="px-3 py-2">{project.id}</th>
                      <td className="px-3 py-2">
                        <img src={project.image} alt={project.name} className="h-8 w-8 rounded-full" />
                      </td>
                      <td className="px-3 py-2">{project.name}</td>
                      <td className="px-3 py-2">
                        {/* Show diffrent colors for diffrent project status for ongoing, completed, and pending */}
                        <span className={`px-2 py-1 text-xs font-semibold leading-5 text-white rounded-full ${project.status === 'ongoing' ? 'bg-blue-500 ' : project.status === 'completed' ? 'bg-green-400' : 'bg-red-500'}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-3 py-2">{project.created_at}</td>
                      <td className="px-3 py-2">{project.due_date}</td>
                      <td className="px-3 py-2">{project.created_by.name}</td>
                      <td className="px-3 py-2">
                        <Link href={route('project.edit', project.id)} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                        <Link href={route('project.destroy', project.id)} className="text-red-600 hover:text-red-900 ml-2 mr-0">Delete</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}
              <Pagination links={projects.meta?.links || []} />
            </div>
          </div> 
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
