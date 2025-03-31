
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  organization: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceCard = ({ title, organization, period, description, technologies }: ExperienceCardProps) => {
  return (
    <Card className="mb-6 border-l-4 border-l-indigo-500">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold text-indigo-900">{title}</CardTitle>
            <CardDescription className="text-lg font-medium text-gray-700">{organization}</CardDescription>
          </div>
          <span className="text-sm text-gray-600">{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          {description.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-indigo-50 text-indigo-800">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
