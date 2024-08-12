import Anchor from "./Anchor.astro"
import ArticleImage from "./ArticleImage.astro"
import Heading1 from "./Heading1.astro"
import Heading2 from "./Heading2.astro"
import Heading3 from "./Heading3.astro"
import InlineCode from "./InlineCode.astro"

export default {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  img: ArticleImage,
  a: Anchor,
  code: InlineCode,
}
