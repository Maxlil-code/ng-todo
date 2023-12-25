export interface Task {
  _id: { $oid: string };
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}
