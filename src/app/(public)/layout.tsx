import DefaultHeader from '@/components/view/Header/DefaultHeader';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DefaultHeader />
      <div className="min-h-[calc(100vh-64px)]">{children}</div>
    </>
  );
}
