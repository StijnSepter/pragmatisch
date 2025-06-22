import "./style/home.css";
import papaImage from "../assets/papa.png";

const HomePage = () => {
  return (
    <main>
      <div className="main_container">
        <div>
          <p>
            Jan-Willem Septer is een ervaren CEO, CFO, COO en adviseur met veel
            ervaring in bedrijfstransformaties. Na een succesvolle carrière in
            diverse Logistieke, IT en Financiële leiderschapsfuncties is hij in
            2014 met Pragmatisch zijn eigen consultancy en
            interim-managementbureau gestart. Hiervoor heeft Jan-Willem 12 jaar
            als directielid bij verschillende Pon ondernemingen gewerkt en
            leidinggegeven aan bedrijfstransformaties. Pon is een internationaal
            opererend handel-, engineering en productiebedrijf met een omzet van
            ca. € 10 miljard. Volkswagen en Caterpillar zijn belangrijke merken
            die Pon vertegenwoordigd. In de 7 jaar daarvoor was Jan-Willem een
            business development en implementatie leider bij TNT Logistics
            (tegenwoordig Ceva). Sinds 2024 is hij tevens als partner
            aangesloten bij PJ Strategy (https://pjstrategy.com/) Hij is in
            staat om samen met het team visie en strategie te ontwikkelen en te
            vertalen in concrete bedrijfsdoelstellingen en om processen, mensen
            en de bijbehorende control-structuur dusdanig te organiseren dat
            deze doelen ook gehaald worden. Hij heeft zich bewezen in het bouwen
            en professionaliseren van organisaties en het ontwikkelen van
            medewerkers naar een hoger niveau. Jan-Willem heeft een Ingenieurs
            diploma in Logistiek Management, een Master in Business
            Administration, een Post doctoraal diploma in Finance & Controlling
            en een executive degree in Operations & Technology.
          </p>
        </div>
        <img src={papaImage} alt="foto" className="image" />
      </div>
    </main>
  );
};

export default HomePage;
