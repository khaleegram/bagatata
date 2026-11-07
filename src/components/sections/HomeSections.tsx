export function CapabilitiesStrip() {
  return (
    <div className="capabilities-strip" aria-label="Our capabilities">
      <div className="container capabilities-strip-inner">
        <span className="mono">What we build</span>
        <ul>
          {[
            "Web applications",
            "Mobile experiences",
            "SaaS platforms",
            "AI & automation",
            "Integrations",
          ].map((item) => (
            <li key={item}>
              {item}
              <span aria-hidden="true">✳</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
