import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Education | Gezerek Dil Öğren",
  description: "Discover Education | Gezerek Dil Öğren",
};

const WhoAreWe4= () => {
  return (
    <>
      <Breadcrumb
        pageName="İngiltere'de Branş Derslerine Ne Dersiniz?"
        description=""
      />
      <section id="whoarewe4" className="pb-16 pt-16">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                Oxford - Cambridge üniversitelerinde; <br />
                <br />
                Tıp <br />
                Mühendislik <br />
                Matematik <br />
                Fen <br />
                Hukuk, gibi dersler almanız konusunda size yardımcı olabiliriz.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe4;
