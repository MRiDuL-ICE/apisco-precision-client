type Props = {
  title: string;
  kicker: string;
  dark?: boolean;
};

export function SectionHeader({ title, kicker, dark = false }: Props) {
  return (
    <div
      className={`section-heading reveal${dark ? " section-heading-dark" : ""}`}
    >
      <h2 className="section-title">{title}</h2>
      <span className="section-kicker">{kicker}</span>
    </div>
  );
}
