import NextHead from "next/head";
import { string } from "prop-types";
import theme from "../../theme";

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ""}</title>
    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
    <meta name="description" content={props.description || ""} />
    <meta name="keywords" content={props.keywords || ""} />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="mask-icon" href="/favicon-mask.svg" color="#000000" />
    <meta property="og:url" content={props.url || ""} />
    <meta property="og:title" content={props.title || ""} />
    <meta property="og:description" content={props.description || ""} />
    <meta name="twitter:site" content={props.url || ""} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || ""} />
    <meta property="og:image" content={props.ogImage || ""} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="theme-color" content={theme.palette.primary.main} />
    <meta name="viewport" content="width=1024" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string,
};

export default Head;
