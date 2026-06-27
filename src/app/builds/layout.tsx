import BuildsNav from "@/components/BuildsNav";

export default function BuildsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="builds-shell">
      <BuildsNav />
      {children}
    </div>
  );
}
