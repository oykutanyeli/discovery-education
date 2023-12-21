import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Education | Gezerek Dil Öğren",
  description: "Discover Education | Gezerek Dil Öğren",
};

const WhoAreWe5 = () => {
  return (
    <>
      <Breadcrumb
        pageName="Neden Yurtdışında Lisans ve Yükseklisans ?"
        description=""
      />
      <section id="WhoAreWe4" className="pb-16 pt-16">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                Dünya sıralamasında en üst sırada yer alan üniversitelerden
                mezun olursunuz. <br />
                <br />
                Dünya başarı sıralamasında ilk 100&apos;de bulunan üniversitelerde
                geleceğinizi hayal ettiğiniz gibi <br />
                planlarsınız.
                <br />
                <br />
                Lisans derecesini 3 ile 4 yıl arasında elde edersiniz. <br />
                <br />
                Okurken çalışma imkanına sahip olursunuz. <br />
                <br />
                Uluslararası şirketlerde kariyer fırsatı yakalarsınız. <br />
                <br />
                YURTDIŞINDA EĞİTİME HAZIRLANIRKEN HAYATINIZI
                KOLAYLAŞTIRABİLİRİZ.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe5;
