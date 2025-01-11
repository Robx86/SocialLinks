import { Button } from "@/app/components/ui/button/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar/avatar";
import SocialLinksData from "@/app/lib/data/SocialLinks.data";
import Image from "@/assets/avatar-jessica.jpeg";

const Home = () => {
  return (
    <div className="bg-background h-full min-h-screen flex items-center justify-center">
      <div className="bg-foreground w-full mx-6 p-6 md:p-10 rounded-[0.75rem] md:max-w-[28.5rem] lg:max-w-96">
        <div className="flex flex-col items-center text-white">
          <Avatar>
            <AvatarImage src={Image} />
            <AvatarFallback>JR</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl tracking-normal font-bold mb-1 mt-4 sora">
            Jessica Randall
          </h1>
          <h2 className="text-sm text-primary-green tracking-normal font-bold sora">
            London, United Kingdom
          </h2>
          <h3 className="my-6">"Front-end developer and avid reader."</h3>
          <div className="w-full flex gap-4 flex-col">
            {SocialLinksData.map((item) => {
              return (
                <a key={item.id} href={item.url}>
                  <Button>{item.name}</Button>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
