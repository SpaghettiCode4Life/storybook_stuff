import React from "react";
import { CardType } from "../../data/card";
import { Button } from "../Button/Button";
import styles from "./card.module.scss";
import star from "../assets/star.svg";
import RichText from "../../common/RichText/RichText";
import { ButtonBlock, HeaderCard, ImageCard, InfomationBlock, ItemFeature, ListFeatures, PriceWrapper, StyledCard, TitleCard } from "./StyledCard";

export type ButtonColor = "primary" | "secondary";

export interface CardProps {
  cardInfo: CardType;
  buttonColor?: ButtonColor;
}

const onGoTo = (url: string) => () => window.open(url, "_blank");

const CardComponent = ({ cardInfo, buttonColor }: CardProps) => (
  <StyledCard className={`${
    cardInfo.type === "cover" ? "isCover" : ""
  }`}
  style={
    cardInfo.type === "cover"
      ? {
          backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${cardInfo.image.src})`,
        }
      : {}
  }
  >
  
  {cardInfo.type !== "cover" && <ImageCard
      src={cardInfo.image.src}
      alt={cardInfo.image.alt}
    />}
        
    <CardContent {...cardInfo} />
     
  
    <ButtonBlock className={`${cardInfo.type === "cover" ? "isCover" : ""}`}>
    {cardInfo.buttonPrimary && (
        <Button
          onClick={onGoTo(cardInfo.buttonPrimary.url)}
          primary
          size="medium"
          label={cardInfo.buttonPrimary.label}
        />
 
      )}
      {cardInfo.buttonSecondary && (
        <Button
          onClick={onGoTo(cardInfo.buttonSecondary.url)}    
          size="medium"
          label={cardInfo.buttonSecondary.label}
        />        
      
      )}
   
    </ButtonBlock>
  </StyledCard>
);

const CardContent = (feature: CardType) => (
  <InfomationBlock className={`${feature.type === "cover" ? "isCover" : ""}`}>
    <HeaderCard>
      <div>
        {feature.stars && (
          <div className='stars'>
            {Array.from(Array(feature.stars).keys()).map((e) => (
              <img  src={star} alt="star" className='star'/>
            ))}
          </div>
        )}
        <TitleCard className={`${feature.type === "cover" ? "isCover" : ""}`}>{feature.name}</TitleCard>
      </div>
      {feature.price &&
      <PriceWrapper>
        <p className='offer_price'>desde</p>
        <p className='price'>{feature.price}€</p>
      </PriceWrapper>}
    </HeaderCard>
    <RichText description={feature.description} />
    {feature.items && (
      <ListFeatures>
        {feature.items.map((item, i) => (
          <ItemFeature key={i}>
            <img  src={star} alt="star" />
            <p>
              <RichText description={item.text} />
            </p>
          </ItemFeature>
        ))}
      </ListFeatures>
    )}
  </InfomationBlock>
);


export default CardComponent;
