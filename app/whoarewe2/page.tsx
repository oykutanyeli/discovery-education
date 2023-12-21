import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Yardımcı Olabiliriz | Discover Education | Gezerek Dil Öğren",
  description: "Discover Education | Gezerek Dil Öğren",

};

const WhoAreWe2 = () => {
  return (
    <>
      <Breadcrumb
        pageName="Size Yardımcı olabiliriz"
        description=""
      />
      <section id="WhoAreWe2" className="pb-16 pt-16">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
              Hangi dilde eğitim almalısınız?  <br/><br/>
              Hangi ülkede okumalısınız? <br/><br/>
              Hangi ülkelerin okulları size uygun? <br/><br/>
              Hangi üniversite diplomaları dünyada geçerli? <br/><br/>
              <br/><br/>Siz isteyin biz yapalım ama bu eğitim gerçekten size uygun mu sizi istediğiniz hedefe 
              ulaştıracak mı bunu karşılıklı olarak tartışmamız gerekir. <br/><br/><br/><br/>
              Avrupada okuyorum demek denklik almak demek midir? <br/><br/>
              Tekrar ülkenize dönmek isterseniz sizi hangi zorluklar bekliyor?  
 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe2;