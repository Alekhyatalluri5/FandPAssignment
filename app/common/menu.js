import React from "react";

import Cakes from "../pages/Masters/Cakes";
import styles from "../components/SideMenu/index.less";
import hamburger from "../images/hamburger.png";

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export function isUrl(path) {
  return reg.test(path);
}

const menuData = [
  {
    name: <img src={hamburger} alt="moreMenu" />,
    path: "menu",

    children: [
      {
        name: "Home",
        path: "home",
        component: "",
      },
      {
        name: "About Us",
        path: "about",
        component: "",
      },
      {
        name: "Cakes",
        path: "cakes",
        component:Cakes,
      },
      {
        name: "Flowers",
        path: "flowers",
        children: [
          {
            name: "Roses",
            path: "roses",
            component: "",
          },
          {
            name: "Lillies",
            path: "lillies",
            component: "",
          },
        ],
      },
    ],
  },
];

function formatter(data, parentPath = "/", parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority
      );
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
