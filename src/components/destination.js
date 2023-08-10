import "./destination.css";
import DestinationData from "./destinationdata";
import taalVolcano1 from "../images/taalvolcano1.jpg";
import taalVolcano2 from "../images/taalvolcano2.jpg";
import machupicchuperu1 from "../images/machupicchuperu1.jpg";
import machupicchuperu2 from "../images/machupicchuperu2.jpg";
import santorinigreece1 from "../images/santorinigreece1.png";
import santorinigreece2 from "../images/santorinigreece2.png";
import romeitaly1 from "../images/romeitaly1.png";
import romeitaly2 from "../images/romeitaly2.png";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular destinations</h1>
        <p>Tours gives you the opportunity to see a lot, within a time frame</p>

        <DestinationData
          cName="first-des"
          heading="Taal Volcano, Batangas"
          text="   Taal Volcano, located in Batangas, Philippines, is a complex
        stratovolcano characterized by its unique volcano within a lake
        within a volcano configuration. The main crater contains a
        smaller crater lake known as the Main Crater Lake, while the
        larger Taal Lake surrounds the volcano. The volcano is active and
        has experienced numerous eruptions throughout history, with the
        most recent significant eruption occurring in January 2020,
        emitting ash plumes and causing evacuations in nearby areas.
        Taal's ongoing activity underscores its geological significance
        and the potential hazards it poses to the surrounding region."
          img1={taalVolcano1}
          img2={taalVolcano2}
        />

        <DestinationData
          cName="first-des-reverse"
          heading="Machu Picchu, Peru"
          text="Machu Picchu, located in the Andes Mountains of Peru, is an ancient Incan citadel renowned for its architectural marvels, breathtaking panoramic views, and historical significance. Constructed in the 15th century and later abandoned, this UNESCO World Heritage Site showcases intricate stone constructions, terraced fields, and religious shrines that provide insights into Inca culture and engineering prowess. As one of the most iconic archaeological sites globally, Machu Picchu attracts travelers seeking a profound connection with history and nature, offering a glimpse into the ancient civilization's ingenuity amidst the stunning backdrop of the Andean landscape."
          img1={machupicchuperu1}
          img2={machupicchuperu2}
        />

        <DestinationData
          cName="first-des"
          heading="Santorini, Greece"
          text="Santorini, a captivating island in Greece, captivates visitors with its unique Cycladic architecture, characterized by white-washed buildings adorned with blue domes that contrast against the azure waters of the Aegean Sea. Formed by a volcanic caldera, its dramatic landscape is marked by steep cliffs, stunning sunsets, and black sand beaches. Offering a blend of tranquility and vibrant energy, Santorini invites travelers to explore its charming villages, indulge in delectable Greek cuisine, and immerse themselves in a captivating blend of history, culture, and natural beauty."
          img1={santorinigreece1}
          img2={santorinigreece2}
        />

        <DestinationData
          cName="first-des-reverse"
          heading="Rome, Italy"
          text="Rome, Italy's ancient capital, is a timeless city that seamlessly intertwines its rich history with modern vibrancy. Home to iconic landmarks like the Colosseum, Roman Forum, and Vatican City's St. Peter's Basilica, Rome boasts millennia of architecture, art, and culture. Cobblestone streets, bustling piazzas, and the romantic Tiber River characterize its atmosphere, while world-class museums, exquisite cuisine, and the Trevi Fountain's enchanting allure make it an irresistible destination for travelers seeking an immersion in both classical antiquity and the living pulse of contemporary Italian life."
          img1={romeitaly1}
          img2={romeitaly2}
        />


      </div>
    </>
  );
};

export default Destination;
