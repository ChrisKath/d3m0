export interface IModel {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Duration {
  from: Date | string;
  to: Date | string | void;
}

export interface Collect extends IModel {
  type: string;
  title: string;
  poster: string;
  pictures: string[];
  description: string;
  tags: string[];
}

export interface Experience extends IModel {
  company: string;
  title: string;
  description: string;
  duration: Duration;
}

export interface Skill extends IModel {
  label: string;
  mastery: number;
  description?: string;
}
