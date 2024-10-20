interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-indigo-400 dark:text-indigo-400 text-indigo-600 uppercase mb-2 tracking-wide">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default SidebarSection;
