import React from "react";
import styled from "styled-components";
import { BsHouseDoorFill } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
function Sidebar() {
  return (
    <Aside id="sidebar">
      <ul className="links">
        <li className="selected">
          <BsHouseDoorFill />
        </li>
        <li>
          <MdLeaderboard />
        </li>
        <li>
          <AiOutlineStar />
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
