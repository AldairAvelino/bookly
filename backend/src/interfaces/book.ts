export interface Book {
  id?: string;
  title: string;
  author: string;
  isbn?: string;
  ownerId: string;
  borrowerId?: string;
  status: 'available' | 'borrowed';
  createdAt?: Date;
  updatedAt?: Date;
}
