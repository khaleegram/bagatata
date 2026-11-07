export function SectionLabel({
  number,
  children,
  aside,
}: {
  number: string;
  children: React.ReactNode;
  aside?: string;
}) {
  return (
    <div className="section-label">
      <span>
        <span className="section-number">{number} /</span> {children}
      </span>
      {aside && <span className="section-label-aside">{aside}</span>}
    </div>
  );
}
