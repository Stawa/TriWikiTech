interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-bold text-indigo-700 dark:text-indigo-300 uppercase mb-3 tracking-wider border-b border-indigo-200 dark:border-indigo-800 pb-2 flex items-center">
        <span className="inline-block w-1 h-4 bg-indigo-500 dark:bg-indigo-400 rounded mr-2"></span>
        {title}
      </h3>
      {children}
    </div>
  );
}

export default SidebarSection;
