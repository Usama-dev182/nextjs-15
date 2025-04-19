
import SideNav from "../ui/components/sidenav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <SideNav />
      {children}</>
  );
}