import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 4,
    title: "Anasayfa",
    path: "/",
    newTab: false,
  },
  {
    id: 1,
    title: "Biz Kimiz?",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Biz Kimiz",
        path: "/whoiam",
        newTab: false,
      },
      {
        id: 42,
        title: "Size Yardımcı olabiliriz",
        path: "/whoiam2",
        newTab: false,
      },
      {
        id: 43,
        title: "Yurt Dışında Dil Eğitimi",
        path: "/whoiam3",
        newTab: false,
      },
      {
        id: 44,
        title: "İngiltere'de Branş Derslerine Ne Dersiniz?",
        path: "/whoiam4",
        newTab: false,
      },
      {
        id: 45,
        title: "Neden Yurtdışında Lisans ve Yükseklisans ?",
        path: "/whoiam5",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Çalıştığımız Okullar",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Ces (Central English Studies)",
        path: "/ces",
        newTab: false,
      },
      {
        id: 12,
        title: "Oxford Royal Academy ve Oxford Summer School",
        path: "/oxford",
        newTab: false,
      },

      {
        id: 14,
        title: "St Giles International",
        path: "/stgiles",
        newTab: false,
      },
      {
        id: 15,
        title: "Skola Regent's Park",
        path: "/skola",
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "Uzmanlarımız",
    path: "/uzmanlar",
    newTab: false,
  },
  {
    id: 3,
    title: "Bizimle İletişim'e Geçin ",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
