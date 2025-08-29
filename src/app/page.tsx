import Navbar from "./components/Navbar";
import UpcomingEvent from "./Components/UpcomingEvent";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-6 text-left">
        <h1 className="text-3xl font-bold">Upcoming Events </h1>
      </div>
   <UpcomingEvent />
    </main>
  );
}

