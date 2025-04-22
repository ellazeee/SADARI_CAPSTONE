
import { Calendar } from "@/components/home/Calendar";
import { SadariCheck } from "@/components/home/SadariCheck";
import { BottomNav } from "@/components/navigation/BottomNav";

const Home = () => {
  return (
    <div className="min-h-screen bg-sadari-light flex flex-col pb-16">
      <Calendar />
      <SadariCheck />
      <BottomNav />
    </div>
  );
};

export default Home;
