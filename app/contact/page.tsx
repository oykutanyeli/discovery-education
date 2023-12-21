import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Discover Education | Gezerek Dil Öğren",
  description: "Discover Education | Gezerek Dil Öğren",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="İletişim" description="Bizimle iletişime geçin:" />
      <section id="whoiam" className="pb-16 pt-16">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="flex w-full px-4 lg:w-1/2">
                <p className="flex-1">
                  Musa Ünal Özer <br />
                  <a href="tel:00905059412595">+90 (505) 941 2595</a> <br />
                  <a href="mailto:musaozer@gmail.com">musaozer@gmail.com</a>
                </p>
                <p className="flex-1">
                  Demet El Arja <br />
                  <a href="tel:00905324816414">+90 (532) 481 6414</a> <br />
                  <a href="mailto:dmtklnc@hotmail.com">dmtklnc@hotmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
