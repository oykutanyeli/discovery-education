import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Education | Gezerek Dil Öğren",
  description: "Discover Education | Gezerek Dil Öğren",
};

const WhoIAm3 = () => {
  return (
    <>
      <Breadcrumb pageName="Yurt Dışında Dil Eğitimi" description="" />
      <section id="whoiam3" className="pb-16 pt-16">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                Lisans hayatınızı nerde yürüteceksiniz önce onu belirleyeceğiz.
                Yurtdışında mı, yurt içinde mi? Hiç dert etmeyin çünkü biz sizi
                yurtdışına hazırlarken siz yurt içine de hazırlanmış
                olacaksınız. Sadece yurt içi sınavlarına hazırlanan bir
                öğrenciye göre belki daha çok yorulacaksınız ama buna değecek.
                Tek seçenek bizi bazen istediğimiz hedefe ulaştırmayabilir.
                Seçenekleri çoğaltırsak hedefler bize daha da yaklaşır. Her
                zaman tek yol yoktur. <br />
                <br />
                Aşağıdaki işlemleri danışmanlarımızla birlikte tamamlayıp eğitim
                hayallerinizi gerçekleştirebilirsiniz:
                <br />
                <br />
                <br />
                Önce ülke <br />
                <br />
                Vize ve kayıt işlemleri <br />
                <br />
                Takip eden tüm prosedürler <br />
                <br />
                Kabul ve eğitim almaya hazır olma <br />
                <br />
                Kariyer basamaklarını tek tek tırmanma <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoIAm3;
