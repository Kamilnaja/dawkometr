export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Ustawienia</h1>
      {children}
    </div>
  );
}
