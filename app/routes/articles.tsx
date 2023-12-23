import type { MetaFunction } from "@remix-run/cloudflare";
import { css } from "@/../styled-system/css/index.js";

export const meta: MetaFunction = () => {
  return [{ title: "remix-payload-blog: articles" }];
};

export default function ArticleIndex() {
  return (
    <>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Articles</h1>
    </>
  );
}
