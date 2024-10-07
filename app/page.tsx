import Navbar from '@/components/Navbar';
import WordCounter from '@/components/WordCounter';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <WordCounter />
      </main>
    </div>
  );
}