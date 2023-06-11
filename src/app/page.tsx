import HomePageActions from "@/components/HomePageActions";
import { prisma } from "@/lib/prisma";

export const fetchCache = "force-no-store";
export const revalidate = 0;

export const getRandomPost = async () => {
  const postCount = await prisma.post.count();
  const skip = Math.floor(Math.random() * postCount);
  return (
    await prisma.post.findMany({
      take: 1,
      skip: skip,
    })
  )[0];
};

const HomePage = async () => {
  const post = await getRandomPost();

  return (
    <div className="grid place-items-center h-[90vh]">
      <div className="flex flex-col w-full justify-around items-center h-[50vh]">
        <div className="flex flex-col gap-4 basis-3/4 text-center px-4">
          <h1 className="text-3xl font-semibold leading-none tracking-tight">
            {post.nepali}
          </h1>
          <p className="text-xl text-muted-foreground">{post.roman}</p>
        </div>
        <HomePageActions post={post} />
      </div>
    </div>
  );
};

export default HomePage;
