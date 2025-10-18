'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    const segments = pathname.split('/');
    segments[1] = newLang; 
    const newPath = segments.join('/');
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className="inline-block bg-white rounded-md shadow-sm border border-gray-300 px-3 py-2">
      <select
        defaultValue={currentLang}
        onChange={handleChange}
        className="bg-transparent outline-none text-gray-700 font-medium"
      >
        <option value="ru"> Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
