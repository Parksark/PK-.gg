const ClanCard = ({ clanName, memberCount, avgMMR, playStyle }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-bold">{clanName}</h2>
      <p>클랜원 수: {memberCount}</p>
      <p>평균 매칭 점수: {avgMMR}</p>
      <p>플레이 스타일: {playStyle}</p>
    </div>
  );
};

export default ClanCard;
