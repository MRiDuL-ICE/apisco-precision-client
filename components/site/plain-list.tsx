type Props = {
  items: readonly (readonly [string, string])[];
};

export function PlainList({ items }: Props) {
  return (
    <ul className="support-list">
      {items.map(([title, body]) => (
        <li key={title}>
          <span>
            <strong>{title}</strong> {body}
          </span>
        </li>
      ))}
    </ul>
  );
}
