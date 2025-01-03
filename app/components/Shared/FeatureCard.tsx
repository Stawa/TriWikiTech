import { IconType } from "react-icons";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
      <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 mb-6 ring-1 ring-black/5 dark:ring-white/5">
        <Icon className="text-3xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
