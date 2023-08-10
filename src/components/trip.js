import "./trip.css";
import TripData from "./tripdata";
import sydneyaustralia from "../images/sydneyaustralia.png";
import riodejaneiro from "../images/riodejaneiro.png";
import kyotojapan from "../images/kyotojapan.png";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover discover unique destination using google map.</p>

      <div className="trip-card">
        <TripData
          img={sydneyaustralia}
          heading="Sydney, Australia"
          text="Sydney, Australia: Famous for Opera House and Bondi Beach's beauty. Blend of city life and coastal charm. Explore iconic landmarks, diverse neighborhoods, and breathtaking harbor views. Vibrant, dynamic, and unforgettable."
        />

        <TripData
          img={kyotojapan}
          heading="Kyoto, Japan"
          text="Kyoto, Japan: Tranquil temples, historic charm, and traditional tea houses. A blend of old and new, offering serene gardens and cultural experiences. Geisha culture and iconic shrines like Fushimi Inari create a unique atmosphere. Captivating beauty and a glimpse into Japan's rich heritage."
        />

        <TripData
          img={riodejaneiro}
          heading="Rio de Janeiro"
          text="Rio de Janeiro, Brazil: Home to Christ the Redeemer statue, Copacabana Beach, and vibrant Carnaval celebrations. A city of stunning contrasts, from lush mountains to bustling favelas. Rich culture, music, and breathtaking natural beauty make it a captivating destination."
        />
      </div>
    </div>
  );
};

export default Trip;
