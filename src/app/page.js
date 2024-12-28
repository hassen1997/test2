import Aboutus from "@/Aboutus/Aboutus";
import Foter from "@/foter/Foter";
import Hom from "@/home/Hom";
import News from "@/News/News";
import OurPartners from "@/Our Partners/OurPartners";
import OurCharts from "@/Ourcharts/OurCharts";
import Ourclients from "@/Ourclients/Ourclients";
import Ourservices from "@/Ourservices/Ourservices";
import Pag1 from "@/pag1/Pag1";
import Pag3 from "@/pag3/Pag3";
import Simple from "@/Simple/Simple";

export default function Home() {
  return (
   
     <div className="App" >
     <Hom/>
     <Pag1/>
     <OurPartners/>
     <Aboutus/>
     <Ourservices/>
     <Pag3/>
     <OurCharts/>

     <News/>
     <Simple/>
     <Ourclients/>
     <Foter/>
     
     
     </div>
  );
}
