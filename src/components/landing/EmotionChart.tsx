export default function EmotionChart() {
  const emotions = [
    { label: "기쁨", color: "bg-yellow-400", percent: 60 },
    { label: "슬픔", color: "bg-blue-400", percent: 20 },
    { label: "분노", color: "bg-red-400", percent: 10 },
    { label: "놀람", color: "bg-purple-400", percent: 10 },
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4 text-left">
          내가 요즘 어떤 감정 상태인지 <br />
          통계로 한눈에 볼 수 있어요
        </h2>
      </div>
      <div className="flex-1 bg-gray-50 p-8 rounded-3xl flex items-center gap-8">
        {/* 원형 차트 간이 구현 */}
        <div className="w-32 h-32 rounded-full border-8 border-yellow-400 flex items-center justify-center font-bold">
          기쁨
        </div>
        <ul className="space-y-2">
          {emotions.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-sm font-medium">
                {item.label} {item.percent}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
