import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PlayerDetail() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-2xl font-bold mb-4">플레이어 상세보기</h1>
        {/* 플레이어 데이터 표시 영역 추가 예정 */}
      </main>
      <Footer />
    </div>
  );
}
