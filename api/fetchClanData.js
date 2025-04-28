export async function fetchClanData(clanName) {
  // 여기에 PUBG API 연동 코드 추가 예정
  console.log(`클랜 데이터 가져오기: ${clanName}`);
  return {
    name: clanName,
    members: [],
    avgDamage: 0,
    playStyle: 'Unknown'
  };
}
