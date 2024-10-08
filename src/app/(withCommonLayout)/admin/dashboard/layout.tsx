'use client';
import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation'; // Get the current path
import Link from 'next/link';
import { Cookie, House, Podcast, ShieldCheck, Users } from 'lucide-react';


export default function AdminLayout({ children }: { children: ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname(); // Use App Router's usePathname hook

    return (
        <div className="flex  h-screen">
            {/* Sidebar */}
            <div
                className={`fixed z-20 inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:inset-0 bg-gray-800 text-white w-64 transition-transform duration-300 ease-in-out flex flex-col`}
            >
                {/* Sidebar Header */}
                <div className="p-4 text-2xl font-bold text-center border-b border-gray-700">
                    Admin Panel
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col p-4 flex-grow">
                    <li className={`mb-4 ${pathname === '/admin' ? 'text-white' : 'text-gray-300'}`}>
                        <Link href="/admin/dashboard" className="hover:text-white transition-colors">
                            <p className='flex space-x-2'> <House /> <span> Dashboard</span> </p>
                        </Link>
                    </li>
                    <li className={`mb-4 ${pathname === '/admin/dashboard/users' ? 'text-white' : 'text-gray-300'}`}>
                        <Link href="/admin/dashboard/users" className="hover:text-white transition-colors">
                            <p className='flex space-x-2'> <Users /> <span> Users Management</span> </p>
                        </Link>
                    </li>
                    <li className={`mb-4 ${pathname === '/admin/dashboard/recipes' ? 'text-white' : 'text-gray-300'}`}>
                        <Link href="/admin/dashboard/recipes" className="hover:text-white transition-colors">
                            <p className='flex space-x-2'> <Cookie /> <span>Recipes Management</span> </p>

                        </Link>
                    </li>
                    <li className={`mb-4 ${pathname === '/admin/dashboard/subscriptions' ? 'text-white' : 'text-gray-300'}`}>
                        <Link href="/admin/dashboard/subscriptions" className="hover:text-white transition-colors">
                            <p className='flex space-x-2'> <Podcast /> <span>Subscription Management</span> </p>
                        </Link>
                    </li>
                    <li className={`mb-4 ${pathname === '/admin/dashboard/admin-management' ? 'text-white' : 'text-gray-300'}`}>
                        <Link href="/admin/dashboard/admin-management" className="hover:text-white transition-colors">
                            <p className='flex space-x-2'> <ShieldCheck /><span> Admin Management</span> </p>
                        </Link>
                    </li>
                </ul>

                {/* Footer */}
                <div className="p-4 border-t border-gray-700 text-center text-gray-400 text-sm">
                    © <span>{new Date().getFullYear()}</span> Admin Panel
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow">
                {/* Toggle Button for small screens */}
                <button
                    className="md:hidden p-2 bg-gray-800 text-white m-4 rounded focus:outline-none z-30"
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
                </button>

                {/* Main Content Area */}
                <div className="p-6">
                    {children}
                </div>
            </div>

            {/* Overlay for small devices */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden z-10"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
