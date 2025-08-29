import Navbar from "./Components/Navbar";
import TicketCard from "./Components/TicketCard";
 import LocationSearch from "./Components/Location";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-6 text-center">
        
      </div>
      <TicketCard />
      
      <div className="flex justify-center mt-10">
  <LocationSearch />
</div>


      
    </main>
  );
}

