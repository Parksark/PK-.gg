export async function fetchPlayerData(playerName) {
  // 여기에 PUBG API 연동 코드 추가 예정
  console.log(`플레이어 데이터 가져오기: ${playerName}`);
  return {
    name: playerName,
    avgDamage: 0,
    recentMatches: []
  };
}
