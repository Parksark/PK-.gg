import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="text-xl font-bold">
        <Link href="/">PK.GG</Link>
      </div>
      <nav className="space-x-4">
        <Link href="/clan-search">클랜 검색</Link>
        <Link href="/my-clan">MY 클랜</Link>
        <Link href="/clan-community">클랜 커뮤니티</Link>
      </nav>
    </header>
  );
};

export default Header;
