import React from "react";
import {
  AiOutlineHome,
  AiOutlineYoutube,
  AiOutlineFire,
  AiOutlineShopping,
  AiOutlineTrophy,
  AiOutlineBulb,
  AiOutlinePlusCircle,
  AiOutlineSetting,
  AiOutlineQuestionCircle
} from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdMusicNote,
  MdOutlineLiveTv,
  MdOutlineVideogameAsset,
  MdNewspaper,
  MdOutlineFlag,
  MdOutlineFeedback
} from "react-icons/md";
import{PiFilmSlateLight} from "react-icons/pi"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="pl-12 pr-12 shadow-lg w-56 text-md">
      <ul>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36">
          <span className="p-1 mr-3">
            <AiOutlineHome />{" "}
          </span>{" "}
          <Link to="/">Home</Link>
        </li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36">
          <span className="p-1 mr-3">
            <AiOutlineYoutube />{" "}
          </span>{" "}
          Shorts
        </li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36">
          <span className="p-1 mr-3">
            <MdOutlineSubscriptions />
          </span>
          Subscription
        </li>
      </ul>
      <h1 className="font-bold pt-10">You</h1>
      <ul>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36">
          <span className="p-1 mr-3">
            <MdOutlineVideoLibrary />
          </span>
          Library
        </li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36">
          <span className="p-1 mr-3">
            <MdHistory />
          </span>
          History
        </li>
      </ul>
      <h1 className="font-bold pt-10 ">Explore</h1>
      <ul>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36">
          <span className="p-1 mr-3">
            <AiOutlineFire />
          </span>
          Trending
        </li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36">
          <span className="p-1 mr-3">
            <AiOutlineShopping />
          </span>
          Shopping
        </li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><MdMusicNote/></span>Music</li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><PiFilmSlateLight/></span>Films</li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><MdOutlineLiveTv/></span>Live</li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><MdOutlineVideogameAsset/></span>Gaming</li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><MdNewspaper/></span>News</li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><AiOutlineTrophy/></span>Sports</li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><AiOutlineBulb/></span>Learning</li>
        <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><AiOutlineTrophy/></span>Fashion</li>
      </ul>
      <ul className="pt-10">
      <li className="flex hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><AiOutlinePlusCircle/></span>Browse</li>
        </ul>
        <ul className="pt-6">
      <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><AiOutlineSetting/></span>Settings</li>
      <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><MdOutlineFlag/></span>Report</li>
      <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><AiOutlineQuestionCircle/></span>Help</li>
      <li className="flex pt-4 hover:bg-gray-100 rounded-lg w-36"><span className="p-1 mr-3"><MdOutlineFeedback/></span>Feedback</li>
        </ul>
    </div>
  );
};

export default Sidebar;
