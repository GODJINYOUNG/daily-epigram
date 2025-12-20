import Button from "@/components/common/Button";

export default function LoginPage() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
        반가워요!
      </h2>
      <p className="mt-2 text-sm text-gray-600 mb-8">
        에피그램으로 일상을 기록해 보세요.
      </p>

      <div className="space-y-4">
        {/* 이메일 로그인 폼이 들어갈 자리 */}
        <input className="w-full border p-3 rounded-lg" placeholder="이메일" />
        <input
          className="w-full border p-3 rounded-lg"
          type="password"
          placeholder="비밀번호"
        />
        <Button className="w-full">로그인</Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">
              SNS 계정으로 시작하기
            </span>
          </div>
        </div>

        {/* OAuth 버튼 (Google, Kakao 등) */}
        <Button variant="outline" className="w-full">
          Google로 계속하기
        </Button>
      </div>
    </div>
  );
}
