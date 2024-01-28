import Map from "@/components/Map";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow">
        <Map />
      </main>
    </div>
  );
}
