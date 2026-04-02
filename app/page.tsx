import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

export default function Home() {
  return (
      <main className="bg-surface text-on-surface">
 <Header/>
  <div className="flex max-w-screen-2xl mx-auto">
   
  
  <Main/>
  </div>
  {/* Footer */}
    <Footer/>
</main>

  );
}
