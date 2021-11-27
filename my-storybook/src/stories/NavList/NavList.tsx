import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MenuEntry } from "../../data/menu";
import { StyledButton, StyledButtonWrapper, StyledContainer, StyledLink, StyledNavItem, StyledNavList, StyledNavSection, StyledNextSection, StyledPromoItem, StyledSectionLink, StyledTitle, StyledWrapper } from "./StyledNavList";
import promotionIcon from "../assets/colors.svg";
import menuIcon from "../assets/code-brackets.svg";
import back from "../assets/back-menu.svg";
import close from "../assets/close.svg";

interface NavListProps {
  menu: MenuEntry[];
}

interface NavLinkProps {
  handleNextSection?: (
    children: MenuEntry[],
    title: string,
    href: string
  ) => void;
  item: MenuEntry;
}


const NavLink = ({ item, handleNextSection }: NavLinkProps) => {
  switch (item.type) {
    case "internal":
      return <StyledLink href={item.href}>{item.text}</StyledLink>;

    case "external":
      return <StyledLink href={item.href}>{item.text}</StyledLink>;
    case "root":
    case "level":
      return (
        <StyledNextSection
          type="button"
          onClick={() =>
            item.children &&
            handleNextSection &&
            item.href &&
            handleNextSection(item.children, item.text, item.href)
          }
        >
          {item.text}
          <FaChevronRight
        className="right-arrow"/>
        </StyledNextSection>
      );
    case "text":
      return <div></div>;
  }
};

export const NavList = ({ menu }: NavListProps) => {

    const [currentSectionPosition, setCurrentSectionPosition] = useState(1);
  const isHidden = currentSectionPosition === 1;
  const isFirstPosition = isHidden;

  const handlePreviousSection = () => {
    if (isFirstPosition) return;
    setCurrentSectionPosition(currentSectionPosition - 1);
  };

  const [menuSections, setMenuSections] = useState<MenuEntry[][]>([menu]);

  const [sectionTitle, setSectionTitle] = useState<string | null>(null);
  const [sectionLink, setSectionLink] = useState<string | null>(null);

  const handleNextSection = (
    children: MenuEntry[],
    title: string,
    href: string
  ) => {
    setSectionTitle(title);
    setSectionLink(href);
    setMenuSections([...menuSections, children]);
    setCurrentSectionPosition(currentSectionPosition + 1);
  };

  interface Ref {
    current: number;
  }
  const prevSection = useRef({}) as Ref;

  useEffect(() => {
    if (currentSectionPosition < prevSection.current) {
      setMenuSections(
        (menuSections as MenuEntry[][]).slice(0, currentSectionPosition)
      );
    }

    prevSection.current = currentSectionPosition;
  });

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledButtonWrapper>
          {!isHidden && (
            <StyledButton
              type="button"
              onClick={handlePreviousSection}
            >
              <img  src={back} alt="backIcon" /> 
            </StyledButton>
          )}
          <StyledButton
            type="button"
            className="push"
          >
            <img  src={close} alt="closeIcon" /> 
          </StyledButton>
        </StyledButtonWrapper>

    
        <StyledNavList>
      <ul>
        {currentSectionPosition > 1 && (
          <StyledNavSection key={sectionTitle}>
            <StyledTitle>{sectionTitle}</StyledTitle>
            {sectionLink && (
              <StyledSectionLink href={sectionLink}> 
                  Ver todo
              </StyledSectionLink>
            )}
          </StyledNavSection>
        )}
        {/* ITEM PROMO */}
        {currentSectionPosition === 1 && menu[0].type === "root" && (
          <StyledPromoItem key={menu[0].banners[0].text}>
              {menu[0].banners[0].icon && (
                <img  src={promotionIcon} alt="promoicon" /> 
              )}
              <NavLink
                item={menu[0].banners[0]}
                handleNextSection={handleNextSection}
              />
          </StyledPromoItem>
        )}

        {/* LIST MENU */}
        {menuSections[menuSections.length - 1].map((props) => (
          <StyledNavItem key={props.text}>    
              {props.icon && <img  src={menuIcon} alt="promoicon" />}
              <NavLink item={props} handleNextSection={handleNextSection} />
          </StyledNavItem>
        ))}

       
      </ul>
    </StyledNavList>
        
      </StyledWrapper>
    </StyledContainer>
  );
}

export default NavList;