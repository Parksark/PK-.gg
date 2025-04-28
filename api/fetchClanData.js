export async function fetchClanData(clanName) {
  
  console.log(`클랜 데이터 가져오기: ${clanName}`);
  return {
    name: clanName,
    members: [],
    avgDamage: 0,
    playStyle: 'Unknown'
  };
}
