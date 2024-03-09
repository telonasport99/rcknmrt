import { HeadMeta } from "@/components/HeadMeta/HeadMeta";
import { getLayout } from "@/components/Layout/Layout";
function Home() {
  return (
    <>
      <HeadMeta title={"Create Next App"} />
      Main
    </>
  );
}

Home.getLayout = getLayout;
export default Home;
