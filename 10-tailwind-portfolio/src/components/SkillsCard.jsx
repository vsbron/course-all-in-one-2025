function SkillsCard({ icon, title, text }) {
  // Returned JSX
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 mb-2 font-bold">{title}</h4>
      <p className="text-slate-500">{text}</p>
    </article>
  );
}

export default SkillsCard;
