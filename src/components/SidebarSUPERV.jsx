import React, { useState } from "react";
import styled from "styled-components";
import { BsHouseDoorFill, BsFillCameraVideoFill } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { BrowserRouter as Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {RiMenuLine, RiLayoutGridFill, RiChat4Fill, RiLogoutCircleRFill} from 'react-icons/ri'
import {BsFillHouseDoorFill} from 'react-icons/bs'

function SidebarSUPERV(props) {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);
  const {setUserInactive} = props
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
  const [homeselected, sethomeselected]= React.useState(window.localStorage.getItem("homeSUPERV"));
  const [leaderboardselected, setleaderboardselected]= React.useState(window.localStorage.getItem("leaderboardSUPERV"));
  const [trainingboardselected, settrainingselected]= React.useState(window.localStorage.getItem("trainingSUPERV"));

  if (window.localStorage.getItem("homeSUPERV") == null && window.localStorage.getItem("trainingSUPERV") == null && window.localStorage.getItem("leaderboardSUPERV") == null) {
    sethomeselected("selected")
    
  }

  function handleHome() {
    window.localStorage.setItem("leaderboardSUPERV", "")
    window.localStorage.setItem("trainingSUPERV", "")
    window.localStorage.setItem("homeSUPERV", "selected")

    history.push("/homeSUPERV"); 
    setleaderboardselected("");
    settrainingselected("");
    sethomeselected("selected");
  }

  function handleLeaderboard() {
    window.localStorage.setItem("leaderboardSUPERV", "selected")
    window.localStorage.setItem("trainingSUPERV", "")
    window.localStorage.setItem("homeSUPERV", "")

    history.push("/leaderboardSUPERV");
    sethomeselected("");
    settrainingselected("");
    setleaderboardselected("selected");
  }

  function handleTraining() {
    window.localStorage.setItem("leaderboardSUPERV", "")
    window.localStorage.setItem("trainingSUPERV", "selected")
    window.localStorage.setItem("homeSUPERV", "")

    history.push("/trainingSUPERV");
    sethomeselected("");
    setleaderboardselected("");
    settrainingselected("selected");
  }

  function handleLogout() {
    fetch("https://ac-datamatics.my.connect.aws/connect/logout", { credentials: 'include', mode: 'no-cors'})
    .then(() => {
      setUserInactive();
    });
  }
  return (
    <Aside id="sidebar">
        <ul className="links">
          <li className={homeselected}>
            <BsFillHouseDoorFill type="button" onClick={handleHome}/>
          </li>
          <li className={leaderboardselected}>
            <MdLeaderboard type="button" onClick={handleLeaderboard}/>
          </li>
          <li className={trainingboardselected}>
            <BsFillCameraVideoFill type="button" onClick={handleTraining}/>
          </li>
          <li type="button" onClick={handleLogout}>
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

export default SidebarSUPERV;