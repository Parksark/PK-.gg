import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`입력한 값: ${input}`);
    // 나중에 검색 결과 페이지로 이동하는 기능 추가 예정
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold mb-4">개인 유저의 아이디와 닉네임을 입력해주세요</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full max-w-md">
          <input
            type="text"
            placeholder="닉네임 입력"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition"
          >
            확인
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
