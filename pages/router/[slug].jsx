import Menu from "../../components/Menu";
import {client} from "../client";

export default function IndexPage({ slug, content }) {

    return (
        <div className="bg-slate-600">
        <Menu></Menu>
        {(content &&
            <div className=" p-10 text-white">
                <ul>
                    {
                        content.map((item) => (
                            <li key={item._id}>
                                <a href={`/${slug}/${item.slug.current}`}>
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )}
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

  const content = await client.fetch(`*[_type == $slug]`, {slug})

  return {
    props: {
      slug,
      content
    },
    revalidate: 10,
  };
}