import {client} from "../client";
import Menu from "../../components/Menu";
import Pill from "../../components/Pill";
import FooterBar from "../../components/FooterBar";

export default function IndexPage({ tech }) {

  return (
    (tech?.name &&
    <div>
      <Menu></Menu>
      <div className="  text-white p-10 grid grid-cols-1 lg:grid-cols-2  shadow-black shadow-md justify-items-start lg:justify-items-center bg-gradient-to-t from-transparent via-slate-700 to-transparent">
        <div className="mr-5 pr-5">
          
        
          <h1 className="text-3xl font-semibold">{tech.name} <span className=" text-base font-normal border-l-[1px] py-1 px-2"> Tech for <i className=" bg-red-700 font-semibold px-2 py-[2px] rounded-lg cursor-pointer shadow-md shadow-black">{tech.game.name}</i></span></h1>
          <span className="p-2 block"></span> 
          
          Discovered by {tech.hunters.map((hunter) => (
              <Pill text={hunter.name} color="bg-blue-600" link={"/hunter/" + hunter.slug.current} key={hunter._id}></Pill>
          ))}
          <p className="mt-10 whiteSpace">{tech.description}</p>
        </div>
        
        {tech.video ?
        (<iframe className="w-[400px] md:w-[500px] 2xl:w-[720px] aspect-video mt-4 rounded-2xl shadow-black shadow-lg bg-slate-800 p-1"
        src={"https://www.youtube.com/embed/" + tech.video} 
        title="YouTube video player" 
        allowFullScreen />)
        : ''
        }
      </div>
      <FooterBar></FooterBar>
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

  const tech = await client.fetch(`
  *[_type == "tech" && slug.current == $slug][0]{
    name, slug, video, hunters[]->, description, game->
  }`, {slug})

  return {
    props: {
      tech
    }
  };
}
