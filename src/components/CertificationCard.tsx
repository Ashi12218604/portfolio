
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface CertificationCardProps {
  title: string;
  provider: string;
  date: string;
}

const CertificationCard = ({ title, provider, date }: CertificationCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 pb-2">
        <CardTitle className="text-lg font-bold text-indigo-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">{provider}</span>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
