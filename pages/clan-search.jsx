import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ClanSearch() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-2xl font-bold mb-4">클랜 검색</h1>
        <input
          type="text"
          placeholder="클랜 이름 또는 닉네임 검색"
          className="border p-2 w-full mb-4"
        />
        {/* 검색 결과 리스트는 여기 추가 예정 */}
      </main>
      <Footer />
    </div>
  );
}
