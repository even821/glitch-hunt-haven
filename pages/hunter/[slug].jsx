import client from "../client";
import Menu from "../../components/Menu";


export default function IndexPage({ hunter }) {

  return (
    (hunter?.name &&
    <div className="bg-slate-600">
      <Menu></Menu>
      <div className=" text-white p-10 grid grid-cols-2">
        <h1 className="text-3xl mb-3 font-semibold">{hunter.name}</h1>
        <div>
            <h1 className=" text-xl font-semibold">Games</h1>
            <ul className=" pl-4">
                {
                    hunter.games.map((game) => (
                        <li key={game._id}>
                            <a href= {"/game/" + game.slug.current}>
                                {game.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
      </div>
    </div>
    ));
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

  const hunter = await client.fetch(`
  *[_type == "hunter" && slug.current == $slug][0]{
    name, image, games[]->
  }`, {slug})

  return {
    props: {
      
      hunter
    }
  };
}