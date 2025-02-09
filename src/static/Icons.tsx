import { FaUser } from "react-icons/fa6";
import { LuLayoutDashboard, LuUserRoundCheck } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiAdminLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { MdLogout, MdOutlineTrendingUp, MdOutlineTrendingDown  } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

const s = 18

export const Icons = {
  User: <FaUser size={s} />,
  Dashboard: <LuLayoutDashboard size={s} />,
  Register: <LuUserRoundCheck size={s} />,
  Student: <HiOutlineUserGroup size={s} />,
  Admin: <RiAdminLine size={s} />,
  Transaction: <GrTransaction size={s} />,
  Role: <TbListDetails/>,
  Logout: <MdLogout size={s} />,
  TrendUp: <MdOutlineTrendingUp size={s} />,
  TrendDown: <MdOutlineTrendingDown size={s} />,
}