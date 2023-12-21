import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biz Kimiz? | Discover Education | Gezerek Dil Öğren",
  description: "Discover Education | Gezerek Dil Öğren",
  
};

const WhoAreWe = () => {
  return (
    <>
      <Breadcrumb
        pageName="Biz Kimiz?"
        description=""
      />
      <section id="whoarewe" className="pb-16 pt-16">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                 Eğitim herkesin ortak kaygısı. Hangi okulda okumalı, hangi bölümden mezun olmalı ve bu 
              yolda yürürken nasıl hazır olmalı? Okullar, sınavlar, sertifika programları ve portfolyo çalışmaları 
              derken kafalar iyice karışıyor. Bu süreçte de zaman aleyhimize işliyor. Bu sebeple süreci konforlu 
              atlatmanız için Discovery Education ekibi sizinle birlikte çalışmayı teklif ediyor. Bu esnada hangi 
              ülke, hangi üniversite, hangi bölüm; ve dahası, hangi sınavlar, sertifikalar ya da eğitimler alınmalı 
              tüm bunları sizin yerinize biz takip ederek hiçbir şeyi şansa bırakmıyoruz. Sınavlar zamanında 
              tamamlanmış, sertifikalar alınmış ve her şey dosyamızda yerli yerini almış bir şekilde yolu 
              tamamlamış oluyoruz. Size ise sadece sürecin keyfini sürmesi kalıyor. <br/><br/>
                 Süreci alanında en az 15 / 20 yıllık deneyimi olan danışmanlarımız ile tamamlıyorsunuz. Size 
              düzenli aralıklarla dönütler verilecek ve ortaya koyulan hedefler tek tek takip edilecektir.<br/> <br/> 
                 Süreciniz dil eğitim, lisans veya yüksek lisans olabilir. İstediğiniz her alanda size yardımcı
              olacak bir eğitim danışmanız her zaman olacaktır.  
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
