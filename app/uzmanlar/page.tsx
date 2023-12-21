import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uzmanlarımız | Discover Education | Gezerek Dil Öğren",
  description: "Discover Education | Gezerek Dil Öğren",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="UZMANLARIMIZ"
        description="Tüm uzmanlarımız hem Türkiye’de eğitim almış hem de yurtdışında eğitim alıp orada da yaşamışlardır. Bu sebeple sizlere hem Türkiye hedefli eğitimlerde hem de yurtdışı eğitim hayallerinizde  yardımcı olacaklardır.  "
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
