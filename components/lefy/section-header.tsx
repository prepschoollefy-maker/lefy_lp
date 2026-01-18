import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  icon?: LucideIcon;
  subtitle?: string;
}

export function SectionHeader({ title, icon: Icon, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-navy-600 to-navy-800 shadow-md">
            <Icon className="h-5 w-5 text-white" />
          </div>
        )}
        <h2 className="text-xl font-bold text-navy-800">{title}</h2>
      </div>
      {subtitle && <p className="mt-2 text-base text-navy-600">{subtitle}</p>}
    </div>
  );
}
