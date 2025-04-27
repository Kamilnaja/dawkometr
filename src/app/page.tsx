import { Sidebar } from "./_components/sidebar";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <Sidebar />
        <h1>Dawkometr🧪</h1>
        {children}
      </main>
    </>
  );
}
