import type { MetaFunction } from "@remix-run/cloudflare";
import { css } from "@/../styled-system/css/index.js";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "remix-payload-blog" }];
};

export default function Index() {
  return (
    <>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Home</h1>
      <p>
        <Link to="/articles">Articles</Link>
      </p>
    </>
  );
}
