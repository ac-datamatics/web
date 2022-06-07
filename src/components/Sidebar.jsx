import React, { useState } from "react";
import styled from "styled-components";
import { BsHouseDoorFill, BsFillCameraVideoFill } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { BrowserRouter as Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {RiMenuLine, RiLayoutGridFill, RiChat4Fill, RiLogoutCircleRFill} from 'react-icons/ri'
import {BsFillHouseDoorFill} from 'react-icons/bs'

function Sidebar() {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);
  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  };

  const history = useHistory();
  const [homeselected, sethomeselected]= React.useState("selected");
  const [leaderboardselected, setleaderboardselected]= React.useState("");
  const [trainingboardselected, settrainingselected]= React.useState("");

  function handleHome() {
    history.push("/home"); 
    setleaderboardselected("");
    settrainingselected("");
    sethomeselected("selected");
  }
  function handleLeaderboard() {
    history.push("/leaderboard");
    sethomeselected("");
    settrainingselected("");
    setleaderboardselected("selected");
  }
  function handleTraining() {
    history.push("/training");
    sethomeselected("");
    setleaderboardselected("");
    settrainingselected("selected");
  }
  return (
    <Aside id="sidebar">
        <ul className="links">
          <li className={homeselected} type="button" onClick={handleHome}>
            <BsFillHouseDoorFill />
          </li>
          <li className={leaderboardselected} type="button" onClick={handleLeaderboard}>
            <MdLeaderboard />
          </li>
          <li className={trainingboardselected} type="button" onClick={handleTraining}>
            <BsFillCameraVideoFill />
          </li>
          <li type="button">
            <AiOutlineLogout />
          </li>
        </ul>
    </Aside>
  );
}

const Aside = styled.aside`
  background-color: rgb(46, 46, 46);
  height: 100%;
  width: 90px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  svg {font-size: 1.3rem;}
  .links {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    li {
      border-radius: 1rem;
      padding: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {color: white;}
      &:hover {
        box-shadow: 0 0 10px 2px var(--primary-color);
        svg {
          color: var(--primary-color);
        }
      }
    }
    .selected {
      box-shadow: 0 0 10px 2px var(--primary-color);
      svg {
        color: var(--primary-color);
        background-color: transparent;
      }
    }
  }
`;

export default Sidebar;
