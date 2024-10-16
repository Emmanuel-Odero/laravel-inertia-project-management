import { Link } from '@inertiajs/react';
import React from 'react';

export default function Pagination({ links = [] }) {
  return (
    <nav className="text-center mt-4">
        {links.length > 0 ? (
          links.map((link) => (
            <Link
                preserveScroll
                href={link.url}
                key={link.label}
                className={"inline-block py-2 px-3 text-gray-400 text-xs" + 
                (link.active ? ' bg-gray-800' : ' ') + 
                (!link.url ? '!text-gray-500 cursor-not-allowed' : '')}
                dangerouslySetInnerHTML={{ __html: link.label }}
            >
            </Link>
          ))
        ) : (
          <span>No pagination links available</span>
        )}
    </nav>
  );
}