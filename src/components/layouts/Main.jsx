import Footer from "@/components/footer";
import Annotations from "@/components/footer/Annotation";
import Navigation from "@/components/navigation";

export default function MainLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <Annotations />
    </>
  );
}
