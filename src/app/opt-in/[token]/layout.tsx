export function generateStaticParams() {
  return [{ token: "demo" }];
}

export default function OptInTokenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
