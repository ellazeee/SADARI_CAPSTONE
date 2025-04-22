
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export const Calendar = () => {
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 3 + i);
    return date;
  });

  return (
    <div className="flex justify-between items-center p-4">
      {days.map((date, i) => (
        <div 
          key={i}
          className={`flex flex-col items-center ${
            i === 3 ? "text-sadari-primary" : "text-gray-600"
          }`}
        >
          <span className="text-xs">{format(date, "E")}</span>
          <span className={`w-8 h-8 flex items-center justify-center rounded-full ${
            i === 3 ? "bg-sadari-light" : ""
          }`}>
            {format(date, "d")}
          </span>
        </div>
      ))}
    </div>
  );
};
