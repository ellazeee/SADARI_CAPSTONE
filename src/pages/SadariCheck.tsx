
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SadariCheck = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sadari-primary p-4">
      <button 
        onClick={() => navigate(-1)}
        className="text-white mb-6 flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className="h-2 w-24 bg-white/30 rounded-full"
          />
        ))}
      </div>

      <div className="text-center text-white mb-8">
        <h1 className="text-2xl font-medium mb-2">
          Mari Ikuti Langkah - Langkah Di Bawah Ini Untuk Melakukan
        </h1>
        <h2 className="text-xl font-bold">Kegiatan SADARI</h2>
      </div>

      <div className="space-y-4 mb-8">
        <img
          src="/lovable-uploads/88cecf8a-e029-4bcd-aec2-4e5fec2ee3bd.png"
          alt="SADARI instructions"
          className="w-full object-contain"
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/10 backdrop-blur-sm">
        <Button 
          className="w-full bg-white text-sadari-primary hover:bg-white/90"
          size="lg"
        >
          Continue
        </Button>
        <p className="text-center text-white/80 text-xs mt-2">
          By clicking continue, you agree to our{" "}
          <a href="#" className="underline">Terms of Service</a>
          {" "}and{" "}
          <a href="#" className="underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default SadariCheck;
