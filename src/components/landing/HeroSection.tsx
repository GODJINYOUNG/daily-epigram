export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-24 bg-white text-center">
      <h1 className="text-5xl font-extrabold leading-tight text-gray-900 mb-6">
        나만 알고 있기엔 아까운 글이 <br />
        있지 않나요?
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        매일매일 업데이트되는 새로운 에피그램을 확인해 보세요.
      </p>
      {/* 시안에 있는 메인 이미지 영역 */}
      <div className="w-full max-w-4xl h-64 bg-gray-100 rounded-2xl flex items-center justify-center border border-dashed border-gray-300">
        [메인 히어로 이미지 영역]
      </div>
    </section>
  );
}
