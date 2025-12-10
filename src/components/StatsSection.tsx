import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, GitCommit, Clock } from "lucide-react";

const stats = [
  {
    label: "Documentações",
    value: "150+",
    icon: FileText,
  },
  {
    label: "APIs Disponíveis",
    value: "45",
    icon: GitCommit,
  },
  {
    label: "Desenvolvedores Ativos",
    value: "80+",
    icon: Users,
  },
  {
    label: "Uptime APIs",
    value: "99.9%",
    icon: Clock,
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} variant="hover" className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
