export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}
