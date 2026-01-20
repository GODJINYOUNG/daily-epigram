"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Epigram {
  id: number;
  content: string;
  author: string;
  date: string;
  likes: number;
}

export default function MainPage() {
  const router = useRouter();
  const [epigrams, setEpigrams] = useState<Epigram[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContent, setNewContent] = useState("");

  // 검색어 상태 추가
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("my-epigrams");
    if (savedData) {
      setEpigrams(JSON.parse(savedData));
    } else {
      setEpigrams([
        {
          id: 1,
          content: "삶이 있는 한 희망은 있다.",
          author: "키케로",
          date: "2024-03-20",
          likes: 5,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if (epigrams.length > 0) {
      localStorage.setItem("my-epigrams", JSON.stringify(epigrams));
    }
  }, [epigrams]);

  // 검색어에 따른 필터링 로직
  const filteredEpigrams = epigrams.filter(
    (item) =>
      item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddEpigram = () => {
    if (!newContent.trim()) return;
    const newEntry = {
      id: Date.now(),
      content: newContent,
      author: "나",
      date: new Date().toISOString().split("T")[0],
      likes: 0,
    };
    setEpigrams([newEntry, ...epigrams]);
    setNewContent("");
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("정말 이 문장을 삭제하시겠습니까?")) {
      const filtered = epigrams.filter((item) => item.id !== id);
      setEpigrams(filtered);
      if (filtered.length === 0) localStorage.removeItem("my-epigrams");
    }
  };

  const handleLike = (id: number) => {
    setEpigrams(
      epigrams.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <span className="text-2xl font-black italic tracking-tighter text-blue-600">
          Epigram.
        </span>
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="text-sm font-bold text-slate-400 hover:text-red-500 mr-2"
          >
            로그아웃
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 shadow-lg"
          >
            + 새 문장 기록
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* 프로필 섹션 */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-50 sticky top-28">
            <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-blue-100">
              U
            </div>
            <h3 className="text-2xl font-black text-[#0F172A] mb-2">
              방문자님
            </h3>
            <p className="text-slate-400 font-medium text-sm mb-8 leading-relaxed">
              오늘 당신의 마음을 스쳐간
              <br />단 하나의 문장은 무엇인가요?
            </p>

            <div className="space-y-4 pt-6 border-t border-slate-50">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-bold text-sm">
                  기록한 문장
                </span>
                <span className="text-blue-600 font-black text-lg">
                  {epigrams.length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-bold text-sm">
                  받은 좋아요
                </span>
                <span className="text-pink-500 font-black text-lg">
                  {epigrams.reduce((acc, cur) => acc + cur.likes, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 피드 섹션 (검색창 포함) */}
        <div className="lg:col-span-2 space-y-6">
          {/* 검색 바 UI 추가 */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="찾고 싶은 문장이나 작가를 검색해보세요..."
              className="w-full h-16 rounded-2xl bg-white border-2 border-transparent focus:border-blue-500 px-14 shadow-sm outline-none transition-all text-slate-700 placeholder:text-slate-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>
          </div>

          {filteredEpigrams.length === 0 ? (
            <div className="text-center py-32 bg-white rounded-[40px] border-2 border-dashed border-slate-100">
              <p className="text-slate-300 font-bold text-lg">
                {searchTerm
                  ? "검색 결과가 없습니다."
                  : "아직 기록된 문장이 없습니다."}
              </p>
            </div>
          ) : (
            filteredEpigrams.map((item) => (
              <div
                key={item.id}
                className="group bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-slate-50 hover:shadow-xl transition-all relative"
              >
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-8 right-10 text-slate-200 hover:text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-all"
                >
                  삭제
                </button>
                <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-10 italic pr-6">
                  "{item.content}"
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs">
                      {item.author[0]}
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-700">
                        {item.author}
                      </div>
                      <div className="text-[12px] font-bold text-slate-300 uppercase tracking-tight">
                        {item.date}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 text-slate-500 hover:bg-pink-50 hover:text-pink-600 transition-all font-bold"
                  >
                    ❤️ {item.likes}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* 모달 UI (기존과 동일) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-6">
          <div className="bg-white w-full max-w-lg rounded-[50px] p-10 shadow-2xl scale-in-center">
            <h2 className="text-[28px] font-[1000] text-[#0F172A] mb-8 italic">
              오늘의 문장
            </h2>
            <textarea
              autoFocus
              className="w-full h-52 bg-[#F8FAFC] rounded-[30px] p-8 outline-none border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all resize-none text-xl"
              placeholder="여기에 소중한 문장을 기록하세요..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
            <div className="flex gap-4 mt-10">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-5 font-bold text-slate-400"
              >
                취소
              </button>
              <button
                onClick={handleAddEpigram}
                className="flex-1 py-5 bg-blue-600 text-white font-black text-lg rounded-[22px] shadow-xl hover:bg-blue-700 transition-all"
              >
                등록하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
