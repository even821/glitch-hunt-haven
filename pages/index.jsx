import {client} from "./client";
import Card from "../components/Card";
import Menu from "../components/Menu";

export default function IndexPage({ hunters, games, strats, techs }) {
  return (
    <div className="bg-slate-600">
      <Menu></Menu>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white">
        <Card items={hunters} url="hunter"></Card>
        <Card items={games} url="game"></Card>
        <Card items={techs} url="tech"></Card>
        <Card items={strats} url="strat"></Card>
      </div>
    </div>
  );
}

export async function getStaticProps() {

  const hunters = await client.fetch(`*[_type == "hunter"]`);
  const games = await client.fetch(`*[_type == "game"]`);
  const strats = await client.fetch(`*[_type == "strat"]`);
  const techs = await client.fetch(`*[_type == "tech"]`)

  return {
    props: {
      hunters,
      games,
      strats,
      techs
    },
    revalidate: 10
  };
}
