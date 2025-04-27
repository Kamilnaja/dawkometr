export default function ExaminationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Strona badań</h1>
      {children}
    </div>
  );
}
