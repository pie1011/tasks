"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import menu from "@/app/utils/menu";
import { UserButton } from "@clerk/nextjs";

function Sidebar() {
  const { theme } = useGlobalState();

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="image">
          <Image width={70} height={70} src="/avatar1.jpg" alt="Profile" />
        </div>
        <h1>
          <span>Katie</span>
          <span>Harshman</span>
        </h1>
      </div>

      {/* Navigation List */}
      <ul className="nav-items">
        {menu.map((item, index) => {
          const link = item.link;
          return (
            <li key={index} 
              className={`nav-item ${pathname === link ? "active" : ""} `} 
              onClick={() => handleClick(link)}
            >
              <Link href={link}>
                {item.icon} {item.title}
              </Link>
            </li>
          )
          })}
      </ul>
      <UserButton />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border-right: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  color: ${(props) => props.theme.colorGrey3};

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    margin: 1.5rem;
    padding: 1rem 0.8rem;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 600;
    color: ${(props) => props.theme.colorGrey0};
  }
  .image {
    position: relative;
    width: 70px;
    height: 70px;
    overflow: hidden;
  }

`;

export default Sidebar;
