export function Tutorial({ playGame }) {
  return (
    <section className="text tutorial">
      <h1>Grăbește-te!</h1>
      <div>
        <p>
          Dincolo de ceața cuvintelor nespuse se întinde Lumivista, un loc vechi
          și misterios, unde limbajul însuși a fost spart în fragmente. Cu
          secole în urmă, Ultimii din Lumivista au transmis o scrisoare către
          Pământ, cu câteva clipe înainte ca planeta lor să fie transformată pe
          veci într-o închisoare a demonilor. Aceasta conține un mesaj capabil
          să schimbe soarta Pământului și să îl salveze de puterea malefică ce
          îl amenință. Din nefericire, scrisoarea s-a pierdut pe drum și doar
          cei vrednici pot reface conținutul ei. Așa că întreaga omenire se
          bazează pe tine! Aici, fiecare simbol are putere, iar fiecare literă
          își caută locul firesc. Tu ești eroul, chemat să restabilească ordinea
          pierdută.
        </p>
        <p>
          Drumul tău nu este ușor! La fiecare încercare, vei primi litere
          rătăcite, aduse pe ecran de vânturile magice ale tărâmului. Sarcina ta
          este să le așezi în ordinea corectă, descifrând cuvântul ascuns în
          haos. Fiecare cuvânt rezolvat corect readuce la viață o parte din
          scrisoare și îți va aduce recompense necesare pentru a continua
          călătoria. Dar fi prevăzător: graba este un dușman nevăzut iar fiecare
          secundă pierdută te poate îndepărta de adevăr.
        </p>
        <p>
          Scopul tău este să rezolvi cât mai bine cele 170 de cuvinte, să
          acumulezi suficiente recompense și să ajungi, în cele din urmă, la
          scrisoarea completă. Doar un mesaj reconstruit cu înțelepciune va
          putea dezvălui secretul care ține Pământul în viață. Soarta lumii stă
          în mâinile tale! Folosește-ți mintea și dibăcia! Doar cei care
          stapânesc arta limbajului și curajul alegerilor vor ajunge la capătul
          acestei aventuri.{" "}
        </p>
        <p>Tărâmul te așteaptă. Literele s-au trezit. Povestea începe acum!</p>
      </div>
      <button
        className="play-game-button"
        onClick={() => {
          playGame();
        }}
      >
        YALP
      </button>
    </section>
  );
}
