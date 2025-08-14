import "./style/home.css";
import Janwillem from "../assets/Janwillem.png";

const HomePage = () => {
  return (
    <main>
      <h1>Wat is pragmatisch</h1>
      <div className="main_container">
        <div>
          <p>
            Organisaties naar een volgende fase brengen DNA Ontwikkelen van
            mensen en organisaties om zo jouw bedrijf succesvoller te maken. Het
            verbinden van praktijk met theorie om tot praktische, nuttige en
            bruikbare plannen te komen en die vervolgens ook te implementeren.
            Samen met jouw team werken aan analyses en creëren van strategische
            opties, zonder de praktische kant en uitvoerbaarheid uit het oog te
            verliezen. Te vaak zien we gevestigde consultants en managers de
            mooiste analyses, presentaties en plannen maken, die uiteindelijk
            niet gerealiseerd worden, omdat de praktische kant /uitvoerbaarheid
            en eigenaarschap onvoldoende aandacht krijgt. Dit kan en moet
            anders! Motto ‘Managers schrijven memo’s geen rapporten’ Het is niet
            moeilijk om een lijvig rapport te schrijven, maar de essentie vatten
            op een A4 of in een prikkelend gesprek zodat je organisatie er wat
            mee kan en doet, daar gaat het om. Het resultaat is jouw succes.
            Pragmatisch komt van het Griekse woord ‘Pragma’, wat handeling
            betekent. De pragmaticus gaat uit van feiten, oorzaken en gevolgen,
            trekt daar lering uit en gaat dan over tot handelen. Pragmatisch
            betekent praktisch, nuttig en bruikbaar. Het pragmatisme is een
            filosofische stroming gekenmerkt door de focus op het verbinden van
            de praktijk met de theorie, die volgens het pragmatisme niet los van
            elkaar staan. Het bekendst is wellicht hun pragmatische theorie van
            de waarheid die stelt dat een opvatting waar is als het in de
            praktijk werkt. Waarheid wordt dus niet gedefinieerd aan de hand van
            een correspondentierelatie of coherentie, maar in termen van
            praktisch nut en maatschappelijk voordeel.
          </p>
        </div>
        <img src={Janwillem} alt="foto" className="image" />
      </div>
    </main>
  );
};

export default HomePage;
