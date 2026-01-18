import { LucideIcon } from 'lucide-react';

interface StrengthCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  number: number;
}

export function StrengthCard({ title, description, icon: Icon, number }: StrengthCardProps) {
  return (
    <div className="rounded-lg border border-navy-100 bg-white p-4">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
          {number}
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50">
          <Icon className="h-4.5 w-4.5 text-navy-600" />
        </div>
      </div>
      <h3 className="mb-1.5 text-sm font-semibold text-navy-800">{title}</h3>
      <p className="text-xs leading-relaxed text-navy-500">{description}</p>
    </div>
  );
}
