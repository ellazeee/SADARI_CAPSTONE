
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const SadariCheck = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sadari-primary">
      <div className="px-4 pt-4 pb-20">
        <button 
          onClick={() => navigate(-1)}
          className="text-white mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali
        </button>

        <div className="mb-6">
          <Progress value={33} className="h-2 bg-white/30" />
          <div className="flex justify-between mt-2 text-xs text-white/80">
            <span>Langkah 1/3</span>
            <span>3 menit</span>
          </div>
        </div>

        <div className="text-center text-white mb-8">
          <h1 className="text-xl font-medium mb-2">
            Mari Melakukan Pemeriksaan SADARI
          </h1>
          <p className="text-sm text-white/80">
            Ikuti langkah-langkah berikut dengan cermat
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 mb-8">
          <img
            src="/lovable-uploads/88cecf8a-e029-4bcd-aec2-4e5fec2ee3bd.png"
            alt="Instruksi SADARI"
            className="w-full h-auto mb-4"
          />
          <h3 className="font-semibold mb-2">Langkah 1: Periksa di depan cermin</h3>
          <p className="text-sm text-gray-600">
            Perhatikan bentuk dan ukuran payudara Anda. Pastikan tidak ada perubahan yang tidak normal seperti benjolan atau perubahan warna kulit.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
        <Button 
          className="w-full bg-sadari-primary hover:bg-sadari-dark text-white"
          size="lg"
        >
          Lanjutkan
        </Button>
      </div>
    </div>
  );
};

export default SadariCheck;
