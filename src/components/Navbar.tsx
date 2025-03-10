"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'About', path: '/about'},
        { name: 'Resume', path: '/resume'},
        { name: 'Portfolio', path: '/portfolio'},
        { name: 'Post', path: '/post'},
        { name: 'Gallery', path: '/gallery'},
    ];

    return (
        <nav className="glass p-4">
          <ul className="flex space-x-6 justify-end">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path}
                  className={`${
                    pathname === item.path ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      );
}