import styles from "./richText.module.scss";
import { StyledParagraph, Wrapper } from "./StyledRichText";

/**
 * TAGS:
 * - <br> -> [br]
 * - <b></b> -> [b][/b]
 * - <ul></ul> -> [ul][/ul]
 * - <li></li> -> [li][/li]
**/



const tags: { richTextTag: RegExp; htmlTag: string }[] = [
  { richTextTag: /\[br\]/g, htmlTag: "<br>" },
  { richTextTag: /\[b\]/g, htmlTag: "<b>" },
  { richTextTag: /\[\/b\]/g, htmlTag: "</b>" },
  { richTextTag: /\[ul\]/g, htmlTag: "<ul>" },
  { richTextTag: /\[\/ul\]/g, htmlTag: "</ul>" },
  { richTextTag: /\[li\]/g, htmlTag: "<li>" },
  { richTextTag: /\[\/li\]/g, htmlTag: "</li>" },
  { richTextTag: /\[p\]/g, htmlTag: "<p>" },
  { richTextTag: /\[\/p\]/g, htmlTag: "</p>" },
];

const getHtmlTagFromText = (text: string | null) => {
  if (!text) return "";
  return tags.reduce(
    (acc, re) => acc.replace(re["richTextTag"], re["htmlTag"]),
    text
  );
};

interface Text {
  text: string;
  keyName: number;
}

const Paragraph: React.FC<Text> = ({ text, keyName }) => (
  <StyledParagraph
    key={keyName}
    dangerouslySetInnerHTML={{
      __html: getHtmlTagFromText(text),
    }}
  />
);

interface RichTextProps {
  description: string | null;
}

const RichText: React.FC<RichTextProps> = ({ description }) => {
  if (!description) return null;
  const descriptionArray = description.split("\n");

  return (
    <Wrapper>
      {descriptionArray.map((text, i) => (
        <Paragraph text={text} keyName={i} key={i} />
      ))}
    </Wrapper>
  );
};

export default RichText;
