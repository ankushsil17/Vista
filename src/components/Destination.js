import pic1 from "../assets/versailles1.jpg"
import pic2 from "../assets/versailles2.jpg"
import pic3 from "../assets/prague1.jpg"
import pic4 from "../assets/prague2.jpg"
import "./DestinationStyles.css"
import DestinationData from "./DestinationData"

const Destination = () =>{
  return(
    <div className="destination">
      <h1>Top-rated travel hubs</h1>
      <p>Discover the world's wonders with our handpicked travel recommendations</p>
     
      <DestinationData
      className="first-des"
      heading="Palace of Versailles, France"
      text="The Palace of Versailles, located in the city of Versailles near Paris, is an opulent symbol of France's grandeur and history. This magnificent royal residence, originally built for Louis XIV, features stunning architecture, beautifully manicured gardens, and ornate interiors. Visitors can explore the Hall of Mirrors, the Royal Apartments, and the lavish Palace Gardens, which showcase fountains, sculptures, and meticulously landscaped lawns. The Palace of Versailles offers a glimpse into the extravagant lifestyle of French royalty and remains a must-visit destination for those seeking to immerse themselves in the country's rich cultural heritage!"
      img1={pic1}
      img2={pic2}
      />

      <DestinationData
      className="first-des-reverse"
      heading="Vltava River and The Dancing House, Prague"
      text="The Vltava River gracefully flows through the heart of Prague, the capital city of the Czech Republic. It is an iconic feature of the city, with its picturesque bridges, scenic riverbanks, and romantic boat cruises that offer Prague's stunning architecture. One notable architectural gem along the Vltava River is the Dancing House. The Dancing House represents a dance in motion, symbolizing the harmony between two extraordinary figures of the dance world.The Dancing House has become an architectural landmark and cultural hub in Prague. It houses various businesses, including a restaurant and a rooftop terrace offering panoramic views of the city!"
      img1={pic3}
      img2={pic4}
      />

    </div>
  );
};

export default Destination