export interface Epigram {
  id: number;
  content: string;
  author: string;
  tags: string[];
}

export interface EpigramListResponse {
  list: Epigram[];
  totalCount: number;
}

export interface CreateEpigramRequest {
  content: string;
  author: string;
  tags: string[];
}

export interface Epigram {
  id: number;
  content: string;
  author: string;
  tags: string[];
  likeCount: number; // 좋아요 수
  isLiked?: boolean; // 내가 좋아요를 눌렀는지 여부 (선택사항)
}
