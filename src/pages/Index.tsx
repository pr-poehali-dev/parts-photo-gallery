import Header from "@/components/Header";
import PartsCatalog from "@/components/PartsCatalog";
import CompanyInfo from "@/components/CompanyInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PartsCatalog />
      <CompanyInfo />
    </div>
  );
};

export default Index;
