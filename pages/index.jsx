import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl font-bold">클랜을 검색해보세요!</h1>
      </main>
      <Footer />
    </div>
  );
}
