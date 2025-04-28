export async function fetchPlayerData(playerName) {

 console.log(`플레이어 데이터 가져오기: ${playerName}`);
  return {
    name: playerName,
    avgDamage: 0,
    recentMatches: []
  };
}
