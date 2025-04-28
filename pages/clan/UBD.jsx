import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fetchPlayerStats } from '../../api/fetchPlayerStats';
import { useEffect, useState } from 'react';

export default function UBD() {
  const [players, setPlayers] = useState([]);

  const clanMembers = [
  "parksrk",
  "pororoyummy",
  "Link_of",
  "YHD_Jo",
  "Kr0_0TTJ",
  "XS_2izer",
  "EUN_S2_YOUNG",
  "sgd_010503",
  "you_-me",
  "Taehyeon1226",
  "BackUp_KYS",
  "JMT_MAKCHANG",
  "RUAUM",
  "001269",
  "dlgustn28",
  "LIGEMU-R-YA",
  "choi-kun",
  "Biddulggi",
  "scklove81",
  "sa_ngsang",
  "BBIBU1010",
  "minyoun_hing",
  "sky3223",
  "ATCCS___",
  "Uwakgood",
  "HeeMeng__00",
  "min_wooo125",
  "Y_A_N_A",
  "hwi_r",
  "kim-do-hun-_-",
  "minibboggu",
  "qwerdf5644",
  "yena__12",
  "JAEHYUN-S",
  "nan_gaegeoji_im"
];


  useEffect(() => {
    async function loadData() {
      const promises = clanMembers.map(async (member) => {
        try {
          const data = await fetchPlayerStats(member);
          return { name: member, data };
        } catch (error) {
          console.error(`에러: ${member}`, error);
          return { name: member, error: true };
        }
      });

      const results = await Promise.all(promises);
      setPlayers(results);
    }

    loadData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-6">클랜: UBD</h1>
        <ul className="space-y-4">
          {players.map((player, index) => (
            <li key={index} className="p-4 border rounded-md">
              <strong>{player.name}</strong><br />
              {player.error ? (
                <span className="text-red-500">데이터 불러오기 실패</span>
              ) : (
                <span className="text-green-600">데이터 불러오기 성공</span>
              )}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
