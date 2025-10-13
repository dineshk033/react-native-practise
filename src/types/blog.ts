export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  excerpt?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
