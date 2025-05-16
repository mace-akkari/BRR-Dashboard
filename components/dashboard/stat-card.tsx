import type { StatCardProps } from "@/lib/types";

export function StatCard({
  title,
  value,
  icon,
  description,
  className,
}: StatCardProps) {
  return (
    <article
      aria-label={title}
      className={`rounded-lg border border-gray-700 bg-[#2a3042] p-6 shadow-sm ${className}`}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-gray-300">{title}</h3>
        <div className="text-gray-400" aria-hidden="true">
          {icon}
        </div>
      </div>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      {description && (
        <p className="mt-1 text-sm text-gray-400">{description}</p>
      )}
    </article>
  );
}
