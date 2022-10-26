import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env["NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN"],
});

interface RichTextProps {
  document: any;
}

export const RichText: React.FC<RichTextProps> = ({ document }) => {
  const html = Storyblok.richTextResolver.render(document);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
