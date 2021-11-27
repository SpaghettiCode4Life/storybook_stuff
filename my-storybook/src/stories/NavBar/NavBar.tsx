import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { MenuBanner, MenuEntry } from "../../data/menu";
import { SectionItem, SectionList, StyledNavBar, Board, Block, BannerItem, BlockItem, BannerImg, BannerText, SectionText, SectionLink, LogoItem } from "./StyledNavBar";
// import flecha from "./assets/flechaside.svg";
// import flechaSection from "./assets/flechamenu.svg";
import logo from "../../../src/stories/assets/logo.png";




interface NavBarProps {
    menu: MenuEntry[];
}

interface NavLinkProps {
    handleNextSection?: (children: MenuEntry[], title: string) => void;
    item: MenuEntry;
  }
  
  const NavLink = ({ item }: NavLinkProps) => {
    switch (item.type) {
      case "internal":
        return (
          <a href={item.href}>
            {item.text}
          </a>
        );
      case "external":
        return <a href={item.href}>{item.text}</a>;
      case "root":
      case "level":
        return <p>{item.text}</p>;
      default:
        throw new Error(`Unknown menu link type`);
    }
  };
  

  

const findInMenu = (text: string, menu: MenuEntry[]) =>
  menu.reduce((acc: any, elem: MenuEntry) => {
    if (elem.type === "level" || elem.type === "root") {
      const found = elem.children.filter(
        (child: MenuEntry) => child.text === text
      );

      return [...acc, ...found];
    }

    return [...acc];
  }, []);

const searchIn = "//www.google.com/search";

export const NavBar = ({ 
    menu,
}: NavBarProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const [sectionSelected, setSectionSelected] = useState("");
  const [subSectionSelected, setSubSectionSelected] = useState("");
  const [subSection2Selected, setSubSection2Selected] = useState("");

  const subSection2Level = findInMenu(subSectionSelected, menu)[0];
  const subSection3Level =
    subSection2Level && findInMenu(subSection2Selected, [subSection2Level])[0];

  const toggleOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen((current) => !current);
    e.preventDefault();
  };

  const printSublock = (
    subelements: MenuEntry,
    currentSection?: string,
    setNextSection?: React.Dispatch<React.SetStateAction<string>>
  ) => {
    return (
      subelements &&
      (subelements.type === "root" || subelements.type === "level") &&
      subelements.children.map((props: MenuEntry) => (
        <BlockItem
          key={props.text}
          onMouseEnter={() =>
            setNextSection &&
            setNextSection(
              props.type === "level" && props.children ? props.text : ""
            )
          }
        >

          {props.type !== "level" ? <a className="sectionText">{props.text}</a> : <p className="sectionText">{props.text}</p>}
        
          {props.type === "level" && 
          <FaChevronRight className="blockIcon"/>}
           
        </BlockItem>
      ))
    );
  };

  const printBanner = (
    printedSection: string,
    banners: MenuBanner[],
    position: number
  ) => {
    return (
      !printedSection &&
      sectionSelected && (
        <BannerItem>
          <BannerImg
            style={{
              backgroundImage: `url(${banners[position]?.img})`,
            }}
            
          />
          <BannerText>
            {banners[position] && <a href={banners[position].href}>{banners[position].text}</a>}
          </BannerText>
        </BannerItem>
      )
    );
  };

  return (
    <StyledNavBar>
      <SectionList>
        <LogoItem>
            <a href="/"  >
            <img  className={"logo"}src={logo} alt="logoMain" />
            </a>
        </LogoItem>
         
        {menu.map((props) => (
          <SectionItem
            key={props.text}
            onMouseEnter={() => {  
              setSectionSelected(props.text);
              setSubSectionSelected("");
              setSubSection2Selected("");
            }}
           
          >
   
            {props.type !== "level" ? <a className="sectionTitle">{props.text}</a> : <p className="sectionTitle">{props.text}</p>}
        
            {props.type === "root" && (
            
                <FaChevronDown className="sectionIcon"/>
             
            )}

             {props.type === "root" && (
              <div className={"container"}>
                <Board> 
                  {/** First block */}

                   <Block>
                    {printSublock(
                      props,
                      subSectionSelected,
                      setSubSectionSelected
                    )}
                  </Block> 

                  {/** Second block */}

                  <Block>
                    {printSublock(
                      subSection2Level,
                      subSection2Selected,
                      setSubSection2Selected
                    )}
                    {printBanner(subSection2Level, props.banners, 0)}
                  </Block> 
                  {/** Third block */}

                  <Block>
                    {printSublock(subSection3Level)}
                    {printBanner(subSection3Level, props.banners, 1)}
                  </Block>
                </Board>
              </div>
            )} 
          </SectionItem>
        ))}
      </SectionList>    
    </StyledNavBar>
  );
};

export default NavBar;
