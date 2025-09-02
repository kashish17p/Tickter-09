import Navbar from "./Components/Navbar";
import TicketCard from "./Components/TicketCard";
import DestinationBar from "./Components/DestinationBar";
import UpcomingEvent from "./Components/UpcomingEvent";
import LocationSearch from "./Components/Location";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="text-center">
        <DestinationBar />
      </div>
      <div className="p-6 text-left">
        <h1 className="text-3xl font-bold">Upcoming Events </h1>
      </div>
      <LocationSearch />
   <UpcomingEvent />
    </main>
  );
}

