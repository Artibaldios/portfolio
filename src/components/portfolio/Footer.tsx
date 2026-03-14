"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-gray-300/50 dark:border-gray-800/50">
      <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>© {currentYear} Artyom Borisevich</p>
      </div>
    </footer>
  );
} 