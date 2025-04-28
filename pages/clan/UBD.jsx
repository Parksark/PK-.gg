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
        <section className="mb-10">
          <h1 className="text-4xl font-bold mb-2">클랜명: UBD</h1>
          <p className="text-lg">클랜 인원수: {clanMembers.length}명</p>
          <p className="text-lg">평균 매칭 점수: 0 (임시)</p>
          <p className="text-lg">클랜 플레이 성향: 해적형</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">클랜원 목록</h2>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
