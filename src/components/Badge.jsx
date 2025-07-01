function Badge({ tech, toggleBadge }) {
  const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
  const colorClasses = toggleBadge ? "bg-blue-100 text-blue-800" : "bg-blue-800 text-blue-100";

  return (
    <div className="mb-3">
      <span className={`${baseClasses} ${colorClasses}`}>
        {tech}
      </span>
    </div>
  );
}

export default Badge;