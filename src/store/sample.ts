import { atom } from "jotai";

export const countAtom = atom(0);
export const countryAtom = atom("Japan");
export const citiesAtom = atom(["Tokyo", "Kyoto", "Osaka"]);
export const animeAtom = atom([
  {
    title: "Ghost in the Shell",
    year: 1995,
    watched: true,
  },
  {
    title: "Serial Experiments Lain",
    year: 1998,
    watched: false,
  },
]);

// post sample data
import { PostDataTypes } from "@/components/home/HomePostComponent";
const sampleBg = import.meta.env.VITE_TEMP_BG_IMAGE;
const sampleAvatar = import.meta.env.VITE_TEMP_AVATAR;
export const samplePost: PostDataTypes[] = [
  {
    post_id: 1,
    type: "survey",
    title: "빵동여지도",
    description: "설문지가 등록된 프로젝트입니다.",
    image: sampleBg,
    user_name: "Jihun",
    avatar_url: sampleAvatar,
    created_at: "3",
  },
  {
    post_id: 2,
    type: "normal",
    title: "제목",
    image: undefined,
    description: "설명입니다.",
    user_name: "Jihun",
    avatar_url: sampleAvatar,
    created_at: "3",
  },
  {
    post_id: 3,
    type: "survey",
    title: "빵동여지도",
    description: "설문지가 등록된 프로젝트입니다.",
    image: sampleBg,
    user_name: "Jihun",
    avatar_url: sampleAvatar,
    created_at: "3",
  },
  {
    post_id: 4,
    type: "normal",
    title: "제목",
    image: undefined,
    description: "설명입니다.",
    user_name: "Jihun",
    avatar_url: sampleAvatar,
    created_at: "3",
  },
  {
    post_id: 5,
    type: "survey",
    title: "빵동여지도",
    description: "설문지가 등록된 프로젝트입니다.",
    image: sampleBg,
    user_name: "Jihun",
    avatar_url: sampleAvatar,
    created_at: "3",
  },
  {
    post_id: 6,
    type: "normal",
    title: "제목",
    image: undefined,
    description: "설명입니다.",
    user_name: "Jihun",
    avatar_url: sampleAvatar,
    created_at: "3",
  },
];

// 인기 포스트
export const samplePopularPosts = [
  { post_id: 1, image: sampleBg },
  { post_id: 2, image: sampleBg },
  { post_id: 3, image: sampleBg },
];
