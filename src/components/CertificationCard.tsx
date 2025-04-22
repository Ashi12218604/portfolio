import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";

interface CertificationCardProps {
  title: string;
  provider: string;
  date: string;
  link: string;
}

const CertificationCard = ({ title, provider, date, link }: CertificationCardProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="hover:shadow-lg hover:scale-[1.01] transition-transform duration-200">
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 pb-2">
          <CardTitle className="text-lg font-bold text-indigo-900 flex items-center justify-between">
            {title}
            <ExternalLink size={16} className="text-indigo-600" />
          </CardTitle>
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
    </a>
  );
};

export default CertificationCard;
