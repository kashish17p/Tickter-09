import Link from "next/link";
import Navbar from "./Components/Navbar";
import TicketCard from "./_component/TicketCard";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="p-6 text-center">
        
      </div>
      <TicketCard />
      
    </main>
  );
}
