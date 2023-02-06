import {client} from "../client";
import Menu from "../../components/Menu";

export default function IndexPage({ games }) {

  return (
    <div className="bg-slate-600">
      <Menu></Menu>
      <div className=" text-white p-10 grid grid-cols-2">
        {games?.name}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "game" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const {slug = ""} = context.params;

  const games = await client.fetch(`
  *[_type == "game" && slug.current == $slug][0]`, {slug})

  return {
    props: {
      
      games
    },
    revalidate: 10,
  };
}