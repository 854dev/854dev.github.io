import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import defaultOG from "/public/img/opengraph.jpg";
import Container from "components/layout/Container";

/**
 *
 * @returns getStaticProps 로 CMS에서 게시글 가져와 보여줌
 */
export default function Post() {
  // const { postdata, siteconfig, preview } = props;

  // const router = useRouter();
  // const { slug } = router.query;

  // const { data: post } = usePreviewSubscription(singlequery, {
  //   params: { slug: slug },
  //   initialData: postdata,
  //   enabled: preview || router.query.preview !== undefined,
  // });

  // const { data: siteConfig } = usePreviewSubscription(configQuery, {
  //   initialData: siteconfig,
  //   enabled: preview || router.query.preview !== undefined,
  // });

  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  // const imageProps = post?.mainImage ? GetImage(post?.mainImage) : null;

  // const AuthorimageProps = post?.author?.image
  //   ? GetImage(post.author.image)
  //   : null;

  // const ogimage = siteConfig?.openGraphImage
  //   ? GetImage(siteConfig?.openGraphImage).src
  //   : defaultOG.src;

  return (
    <>
      {/* {post && siteConfig && ( */}
      <Container>
        <article className="max-w-screen-md mx-auto ">
          <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
            {/* {post.body && <PortableText value={post.body} />} */}
          </div>
          <div className="flex justify-center mt-7 mb-7">
            <Link href="/">
              <a className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 ">
                ← View all posts
              </a>
            </Link>
          </div>
          {/* {post.author && <AuthorCard author={post.author} />} */}
        </article>
      </Container>
      {/* )} */}
    </>
  );
}

// const MainImage = ({ image }) => {
//   return (
//     <div className="mt-12 mb-12 ">
//       <Image {...GetImage(image)} alt={image.alt || "Thumbnail"} />
//       <figcaption className="text-center ">
//         {image.caption && (
//           <span className="text-sm italic text-gray-600 dark:text-gray-400">
//             {image.caption}
//           </span>
//         )}
//       </figcaption>
//     </div>
//   );
// };

// export async function getStaticProps({ params, preview = false }) {
//   //console.log(params);
//   const post = await getClient(preview).fetch(singlequery, {
//     slug: params.slug,
//   });

//   const config = await getClient(preview).fetch(configQuery);

//   return {
//     props: {
//       postdata: { ...post },
//       siteconfig: { ...config },
//       preview,
//     },
//     revalidate: 10,
//   };
// }

// export async function getStaticPaths() {
//   const allPosts = await client.fetch(pathquery);
//   return {
//     paths:
//       allPosts?.map((page) => ({
//         params: {
//           slug: page.slug,
//         },
//       })) || [],
//     fallback: true,
//   };
// }
