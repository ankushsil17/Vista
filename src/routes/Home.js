import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/8.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home (){
   return(
    <>
    <Navbar />
    <Hero 
     cName = "hero"
     heroImg = {AboutImg}
     title = "Your passport to adventure"
     text = "Discover the world, one destination at a time"
     btnText = "Travel Plan"
     url = "/"
     btnClass = "show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
   );
}

export default Home;
