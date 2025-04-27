export default function PatientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Pacjenci</h1>
      {children}
    </div>
  );
}
