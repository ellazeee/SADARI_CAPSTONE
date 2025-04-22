
import { Button } from "@/components/ui/button";

export const SadariCheck = () => {
  return (
    <div className="bg-white rounded-t-3xl p-6 flex-1">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold mb-2">Cek Sadari:</h2>
        <p className="text-2xl font-bold text-sadari-primary">Hari Ke-2</p>
        <div className="space-y-2 mt-4">
          <Button 
            variant="outline"
            className="w-full border-sadari-primary text-sadari-primary hover:bg-sadari-light"
          >
            Edit tanggal
          </Button>
          <Button 
            className="w-full bg-sadari-primary hover:bg-sadari-dark"
          >
            Lakukan Sadari
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Informasi hari ini</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Discover More", icon: "🔍" },
            { title: "Apa itu Sadari?", icon: "❓" },
            { title: "Kenali tanda kanker payudara", icon: "⚠️" },
            { title: "Hidup sehat untuk mencegah kanker", icon: "💪" },
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-sadari-light p-4 rounded-xl flex flex-col items-center text-center"
            >
              <span className="text-2xl mb-2">{item.icon}</span>
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
