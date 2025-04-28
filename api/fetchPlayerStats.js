export async function fetchPlayerStats(playerName) {
  const response = await fetch(`https://api.pubg.com/shards/steam/players?filter[playerNames]=${playerName}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3MDNhNDhhMC0wMjI1LTAxM2UtMzAwYi0wNjFhOWQ1YjYxYWYiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNzQ1MzgwODM3LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InViZCJ9.hs5WCvTM6d0W_y0lsYzpbkREq61PD1p7vbibOGTFK3o`,
      Accept: 'application/vnd.api+json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch player stats from PUBG API');
  }

  const data = await response.json();
  return data;
}
