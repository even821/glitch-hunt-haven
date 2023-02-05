import client from "../client";
import Menu from "../../components/Menu";

export default function IndexPage({ strat }) {

  return (
    (strat?.name &&
    <div className="bg-slate-600">
      <Menu></Menu>
      <div className=" text-white p-10 grid grid-cols-2">
        <div className="pr-10">
          <h1 className="text-3xl mb-3 font-semibold">{strat.name}</h1>
          Found by {strat.hunters.map((hunter) => (
              <div className=" inline bg-slate-200 text-black p-1 rounded font-semibold mr-2 shadow-black shadow-inner" key={hunter._id}>{hunter.name}</div>
          ))}
          <p className="mt-10 whiteSpace">{strat.description}</p>
        </div>
        
        {strat.video ?
        (<iframe className="w-[720px] h-[480px] mt-4"
        src={"https://www.youtube.com/embed/" + strat.video} 
        title="YouTube video player" 
        allowFullScreen />)
        : ''
        }
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

  const strat = await client.fetch(`
  *[_type == "strat" && slug.current == $slug][0]{
    name, video, hunters[]->, game->
  }`, {slug})

  return {
    props: {
      
      strat
    }
  };
}