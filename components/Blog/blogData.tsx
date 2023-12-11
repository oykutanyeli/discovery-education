import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Musa Ünal Özer",
    paragraph: (
      <span>
        Kariyer Danışmanı
        <br /> Yurtdışı Eğitim Koçu
      </span>
    ),
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Musa Ünal Özer",
      image: "/images/blog/author-01.png",
      designation: "Discovery Education Kurucusu",
    },
    tags: ["Kurucu"],
    publishDate: "2023",
    description: (
      <>
        - Marmara Üniversitesi: İngilizce Bilgisayar ve Kontrol Sistemleri <br/>
        - Marmara Üniversitesi: İngilizce Matematik <br/>
        - Marmara Üniversitesi:Ekonometri Master <br/>
        - Brighton Üniversitesi: Business Mang. Foundation Eğitimi
      </>
    ),
  },
  {
    id: 2,
    title: "Demet Kılınç El Arja",
    paragraph: (
      <span>
        Eğitim Koçu
        <br /> Öğrenci Koçu <br /> İngilizce Öğretmeni
      </span>
    ),
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Demet Kılınç El Arja",
      image: "/images/blog/author-02.png",
      designation: "Discovery Education Kurucusu",
    },
    tags: ["Kurucu"],
    publishDate: "2023",
    description: (
      <>
       - İstanbul Üniversitesi: Amerikan Kültürü ve Edebiyatı <br/>
       - Yıldız Teknik Üniversitesi: Pedagojik Formasyon  <br/>
       - Cambridge Üniversitesi: CELTA <br/>
       - Yeditepe Üniversitesi: Eğitim Yönetimi ve Denetimi - Master 

      </>
    ),
  },
  {
    id: 3,
    title: "Ünsal Özer",
    paragraph: "Discovery Education UK Director",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Ünsal Özer",
      image: "/images/blog/author-03.png",
      designation: "Discovery Education UK Director",
    },
    tags: ["UK Director"],
    publishDate: "2023",
    description: (
      <>
    -	Marmara Üniversitesi: İngilizce Bilgisayar ve Kontrol Sistemleri <br/>
    -	University of Portsmouth: Computer Network and Management MSc 
 

      </>
    ),
  },
];
export default blogData;
