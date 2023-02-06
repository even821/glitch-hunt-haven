import {client} from "../client";
import Menu from "../../components/Menu";
import Pill from "../../components/Pill";
import FooterBar from "../../components/FooterBar";

export default function IndexPage({ strat }) {

  return (strat?.name &&
      <div>
        <Menu></Menu>
        <div className="  text-white p-10 grid grid-cols-1 lg:grid-cols-2  shadow-black shadow-md justify-items-start lg:justify-items-center bg-gradient-to-t from-transparent via-slate-700 to-transparent">
          <div className="mr-5 pr-5">
            
          
            <h1 className="text-3xl font-semibold">{strat.name} <span className=" text-base font-normal border-l-[1px] py-1 px-2"> Strat for <i className=" bg-red-700 font-semibold px-2 py-[2px] rounded-lg cursor-pointer shadow-md shadow-black">{strat.game.name}</i></span></h1>
            <span className="p-2 block"></span> 
            
            Discovered by {strat.hunters.map((hunter) => (
                <Pill text={hunter.name} color="bg-blue-600" link={"/hunter/" + hunter.slug.current} key={hunter._id}></Pill>
            ))}
            <p className="mt-10 whiteSpace">{strat.description}</p>
          </div>
          
          {strat.video ?
          (<iframe className=" w-full md:w-[500px] 2xl:w-[720px] aspect-video mt-4 rounded-2xl shadow-black shadow-lg bg-slate-800 p-1"
          src={"https://www.youtube.com/embed/" + strat.video} 
          title="YouTube video player" 
          allowFullScreen />)
          : ''
          }
        </div>
        <FooterBar></FooterBar>
      </div>
    )
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
    },
    revalidate: 10,
  };
}