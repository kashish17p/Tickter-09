import Navbar from "./_component/Navbar";
import UpcomingEvent from "./_component/UpcomingEvent";
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

