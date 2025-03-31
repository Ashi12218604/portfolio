
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCardProps {
  category: string;
  skills: string[];
}

const SkillCard = ({ category, skills }: SkillCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader className="bg-indigo-50">
        <CardTitle className="text-indigo-900">{category}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
