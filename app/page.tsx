import Article from "./components/Article";

interface Post {
  thumbnail: string;
  title: string;
  desc: string;
  date: string;
}

const MainPost: Post = {
  thumbnail:
    "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  title: "메인 블로그 게시글 타이틀",
  desc: "메인 블로그 게시글 메인 블로그 게시글 메인 블로그 게시글 메인 블로그 게시글 메인 블로그 게시글 메인 블로그 게시글",
  date: "2025.01.01",
};

const subPosts: Post[] = [
  {
    thumbnail:
      "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    title: "서브 블로그 게시글 타이틀",
    desc: "서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글",
    date: "2025.01.01",
  },
  {
    thumbnail:
      "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8",
    title: "서브 블로그 게시글 타이틀",
    desc: "서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글",
    date: "2025.01.01",
  },
  {
    thumbnail:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    title: "서브 블로그 게시글 타이틀",
    desc: "서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글 서브 블로그 게시글",
    date: "2025.01.01",
  },
];
export default function Home() {
  return (
    <div className="bg-black px-14 text-white">
      {/* 메인 헤더 콘텐츠 */}
      <div>
        {/* 타이틀 */}
        <h1 className="text-[15rem] font-extrabold text-center">THE BLOG</h1>
        <div className="flex space-x-12">
          {/* 메인 게시글 */}
          <section className="w-1/2 p-8">
            <Article
              src={MainPost.thumbnail}
              date={MainPost.date}
              title={MainPost.title}
              desc={MainPost.desc}
              type="main"
            />
          </section>
          {/* 최신 게시글 */}
          <section className="w-1/2 p-8 space-y-10">
            {subPosts.map((post, index) => (
              <Article
                key={index}
                src={post.thumbnail}
                date={post.date}
                title={post.title}
                desc={post.desc}
                type="sub"
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
