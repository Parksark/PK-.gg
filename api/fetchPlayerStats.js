export async function fetchPlayerStats(playerName) {
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3MDNhNDhhMC0wMjI1LTAxM2UtMzAwYi0wNjFhOWQ1YjYxYWYiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNzQ1MzgwODM3LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InViZCJ9.hs5WCvTM6d0W_y0lsYzpbkREq61PD1p7vbibOGTFK3o'; // 여기에 형 API키 넣는 거 잊지 말고!

  // 1. 플레이어 검색해서 UUID(playerId) 얻기
  const playerRes = await fetch(`https://api.pubg.com/shards/steam/players?filter[playerNames]=${playerName}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/vnd.api+json'
    }
  });

  if (!playerRes.ok) {
    throw new Error(`플레이어 정보 불러오기 실패: ${playerName}`);
  }

  const playerData = await playerRes.json();
  const playerId = playerData.data[0]?.id; // player UUID

  if (!playerId) {
    throw new Error(`플레이어 ID 없음: ${playerName}`);
  }

  // 2. UUID로 최근 매치 가져오기
  const matchesRes = await fetch(`https://api.pubg.com/shards/steam/players/${playerId}/matches`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/vnd.api+json'
    }
  });

  if (!matchesRes.ok) {
    throw new Error(`매치 리스트 불러오기 실패: ${playerName}`);
  }

  const matchesData = await matchesRes.json();
  const matchIds = matchesData.data.slice(0, 20).map(match => match.id); // 최근 20판 매치 ID 추출

  let totalDamage = 0;
  let matchCount = 0;

  // 3. 매치 하나씩 돌면서 딜량 수집
  for (const matchId of matchIds) {
    const matchRes = await fetch(`https://api.pubg.com/shards/steam/matches/${matchId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/vnd.api+json'
      }
    });

    if (matchRes.ok) {
      const matchData = await matchRes.json();
      const playerStats = matchData.included.find(
        item => item.type === 'participant' && item.attributes.stats.name === playerName
      );

      if (playerStats) {
        totalDamage += playerStats.attributes.stats.damageDealt;
        matchCount += 1;
      }
    }
  }

  const averageDamage = matchCount > 0 ? totalDamage / matchCount : 0;

  return {
    playerName,
    playerId,
    averageDamage
  };
}
