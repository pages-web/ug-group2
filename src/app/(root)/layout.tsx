import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full bg-[#F4F4F4]">
      <Navbar />
      {/* <ScrollTop /> */}
      <div className="flex h-full flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
