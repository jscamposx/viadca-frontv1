import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const InfoCard = ({ icon: Icon, title, children, className = "" }: InfoCardProps) => (
  <article
    className={`bg-surface p-6 md:p-8 rounded-3xl border border-muted/10 hover:border-brand/20 shadow-sm transition-all duration-300 hover:shadow-lg group ${className}`}
  >
    <header className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-2xl bg-background border border-muted/10 text-brand group-hover:scale-110 group-hover:bg-brand/5 transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="text-xl font-bold text-foreground font-serif">{title}</h2>
    </header>
    <div className="text-muted leading-relaxed text-sm md:text-base">{children}</div>
  </article>
);

export default InfoCard;
