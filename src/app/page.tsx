import Navbar from "./components/Navbar";
import UpcomingEvent from "./Components/UpcomingEvent";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to Bu.fi Tickter 🎫</h1>
      </div>
   <UpcomingEvent />
    </main>
  );
}

