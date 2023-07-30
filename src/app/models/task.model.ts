// task.model.ts
export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  status: 'to-do' | 'in-progress' | 'completed';
  historyLog: HistoryLog[];
}

export interface HistoryLog {
  action: string;
  timestamp: Date;
}
