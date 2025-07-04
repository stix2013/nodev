import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link href="/">My Site</Link>
      </div>
      <Navigation />
    </header>
  );
}

