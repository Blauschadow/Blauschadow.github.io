import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');

  return (
    <>
      {currentPage === 'home' ? (
        <HomePage onEnter={() => setCurrentPage('blog')} />
      ) : (
        <BlogPage onBack={() => setCurrentPage('home')} />
      )}
    </>
  );
}