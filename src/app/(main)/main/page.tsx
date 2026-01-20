"use client";
import { Logo } from "@/components/common/Logo";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 고정 상단바 */}
      <nav className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 px-10 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          <div className="flex gap-6 border-l border-slate-100 pl-10">
            <span className="text-slate-800 font-black cursor-pointer">
              피드
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-black">
            👤
          </div>
          <span className="text-sm font-bold text-slate-700 italic">
            User_Name
          </span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-16 px-10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight italic">
            Feed.
          </h2>
          <button className="bg-[#2B2B2B] text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:-translate-y-1 transition-all">
            + 에피그램 만들기
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              {/* 시안의 종이 질감 줄무늬 카드 */}
              <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 aspect-[16/10] p-12 flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-2xl hover:border-blue-100">
                {/* 줄무늬 패턴 */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "100% 2.5rem",
                  }}
                ></div>

                <p className="text-2xl font-bold text-slate-700 leading-relaxed z-10 break-keep italic">
                  "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다."
                </p>
                <div className="flex justify-between items-center z-10 border-t border-slate-50 pt-6">
                  <span className="text-slate-400 font-black">
                    - 앙드레 말로 -
                  </span>
                  <button className="text-slate-300 group-hover:text-red-400 transition-colors">
                    ❤️ 42
                  </button>
                </div>
              </div>
              <div className="mt-5 flex gap-3 px-4">
                <span className="text-sm font-black text-slate-300 italic tracking-tighter">
                  #motivation
                </span>
                <span className="text-sm font-black text-slate-300 italic tracking-tighter">
                  #dream
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
