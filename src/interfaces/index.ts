export interface Quote {
  _id: string;
  content: string;
  author: string | null;
  tags?: string[];
  authorSlug?: string;
  length?: number;
  dateAdded?: string;
  dateModified?: string;
}
