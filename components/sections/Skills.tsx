import { SkillCategory } from "@/lib/types";

export function Skills({ skills }: { skills: SkillCategory[] }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg bg-card hover:bg-accent transition-colors"
          >
            <h3 className="font-semibold mb-2">{skill.category}</h3>
            <p className="text-sm text-muted-foreground">{skill.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}