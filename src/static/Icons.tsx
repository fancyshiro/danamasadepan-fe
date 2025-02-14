import { FaUser } from "react-icons/fa6";
import { LuRefreshCcw, LuMoonStar, LuSun, LuEye, LuLayoutDashboard, LuUserRoundCheck } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiAdminLine, RiUser3Line } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineSettings, MdLogout, MdOutlineTrendingUp, MdOutlineTrendingDown, MdOutlineDelete, MdDateRange  } from "react-icons/md";
import { TbListDetails, TbEyeEdit } from "react-icons/tb";
import { AiTwotoneEdit } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { IoArrowUpSharp, IoArrowDownSharp } from "react-icons/io5";

const s = 18

export const Icons = {
  User: <FaUser size={s} />,
  Dashboard: <LuLayoutDashboard size={s} />,
  Register: <LuUserRoundCheck size={s} />,
  Student: <HiOutlineUserGroup size={s} />,
  Admin: <RiAdminLine size={s} />,
  Transaction: <GrTransaction size={s} />,
  Role: <TbListDetails/>,
  Profile: <RiUser3Line size={s} />,
  Setting: <MdOutlineSettings size={s} />,
  File: <FiFileText size={s} />,
  Logout: <MdLogout size={s} />,
  TrendUp: <MdOutlineTrendingUp size={s} />,
  TrendDown: <MdOutlineTrendingDown size={s} />,
  Eye: <LuEye size={s} />,
  Edit: <AiTwotoneEdit size={s} />,
  EditEye: <TbEyeEdit size={s} />,
  Delete: <MdOutlineDelete size={s} />,
  ArrowUp: <IoArrowUpSharp size={s} />,
  ArrowDown: <IoArrowDownSharp size={s} />,
  date: <MdDateRange size={s} />,
  Moon: <LuMoonStar size={22} />,
  Sun: <LuSun size={22} />,
  Refresh: <LuRefreshCcw size={s} />,
}