import "@/assets/style.scss";
import DetectNetwork from "./components/DetectNetwork";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    title: "Demo share title",
  }
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
        <DetectNetwork />
      </body>
    </html>
  );
}

export default RootLayout;