import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd ,BiUser,BiUserPin,BiComment} from "react-icons/bi";
import Profile from "./../assets/profile.png"


const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Profile",
    icon: <BiUser />,
    path: "/Profile",
  },
  {
    title: "Edit Profile",
    icon: <BiUserPin />,
    path: "/edit-profile",
  },
  // {
  //   title: "Account",
  //   icon: <FaRegChartBar />,
  //   childrens: [
  //     {
  //       title: "Profile",
  //       path: "/profile",
  //     },
  //     {
  //       title: "Edit Profile",
  //       path: "/edit-profile",
  //     },
  //   ],
  // },
  {
    title: "Contact Us",
    icon: <BiComment />,
    path: "/contact-us",
  },
];

export default menu;
