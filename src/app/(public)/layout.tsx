import Navbar from '@/components/ui/Navbar';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)]">{children}</div>
    </>
  );
}
