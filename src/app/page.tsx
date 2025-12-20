import HeroSection from "@/components/landing/HeroSection";
import EmotionChart from "@/components/landing/EmotionChart";

export default function LandingPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <div className="bg-gray-50/50">
        <EmotionChart />
      </div>
      {/* 추가적인 기능 소개 섹션들... */}
    </div>
  );
}
