import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/Tokyo.jpg"
import Trip2 from "../assets/Honolulu.jpg"
import Trip3 from "../assets/Sydney.jpg"


function Trip(){
  return(
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Unforgettable adventures await – let's explore together</p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading={"Discover Tokyo's Unforgettable Cultural Tapestry"}
        text={"Tokyo, the bustling capital of Japan, is a vibrant metropolis that blends tradition and modernity. From the iconic Shibuya Crossing and towering skyscrapers to serene temples and peaceful gardens, Tokyo offers a unique sensory experience. Indulge in world-class cuisine, immerse yourself in cutting-edge technology, and embrace the city's rich cultural heritage in this captivating destination!"}
        />

        <TripData
        image={Trip2}
        heading={"Experience Paradise: Visit Honolulu"}
        text={"Honolulu, the capital of Hawaii, is a tropical paradise offering sun-soaked beaches, lush landscapes, and a rich Polynesian heritage. Dive into crystal-clear waters, embrace the Aloha spirit, and explore attractions like Waikiki Beach, Diamond Head State Monument, and Pearl Harbor for a memorable island escape!"}
        />

        <TripData
        image={Trip3}
        heading={"Explore Sydney's Vibrant Coastal Charm"}
        text={"Sydney, the sparkling gem of Australia, blends iconic landmarks, stunning beaches, and a vibrant cosmopolitan atmosphere. Immerse yourself in the city's multicultural vibe, marvel at the Sydney Opera House and Harbour Bridge, relax on Bondi Beach, and indulge in world-class dining and shopping experiences in this captivating harbor city!"}
        />
      </div>
    </div>
  );
}

export default Trip;