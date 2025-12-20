export interface Epigram {
  id: number;
  content: string;
  author: string;
  tags: string[];
  emotion: "happy" | "sad" | "angry" | "surprised"; // 시안에 있던 감정 상태 반영
  createdAt: string;
}

export interface EpigramListResponse {
  list: Epigram[];
  totalCount: number;
}
