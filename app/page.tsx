import { formatDate } from "./util/date";

export default function Home() {
  return (
    <div>
      {/* 상단 헤더 */}
      <div className="relative bg-custom-gif bg-cover bg-center w-full h-56">
        <div className="flex flex-col justify-center items-center absolute w-full h-full bg-black/50 text-white">
          <p>공부한 것을 기록합니다</p>
        </div>
      </div>
      {/* POSTS */}
      <div className="p-5">
        {/* 더미 포스트 1 */}
        <div className="space-y-3 border-b-[1px] py-10 hover:bg-gray-50 transition-colors duration-150 ">
          {/* 글 미리보기 상단 (DATE) */}
          <p className="text-sm text-black/60 ">{formatDate(new Date())}</p>
          <h2 className="text-3xl font-bold">
            카프카 컨슈머에 동적 쓰로틀링 적용하기
          </h2>
          <p className="text-black/80">
            카프카를 사용하는 스프링 환경에서 메시지 처리 속도를 동적으로
            조절해야 하는 상황과 여러 기법들을 소개합니다.
          </p>
        </div>
        {/* 더미 포스트 2 */}
        <div className="space-y-3 border-b-[1px] py-10 hover:bg-gray-50 transition-colors duration-150">
          {/* 글 미리보기 상단 (DATE) */}
          <p className="text-sm text-black/60 ">{formatDate(new Date())}</p>
          <h2 className="text-3xl font-bold">
            카프카 컨슈머에 동적 쓰로틀링 적용하기
          </h2>
          <p className="text-black/80">
            카프카를 사용하는 스프링 환경에서 메시지 처리 속도를 동적으로
            조절해야 하는 상황과 여러 기법들을 소개합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
