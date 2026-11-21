export interface ImportantDate {
  id: string;
  title: string;
  date: string;
  note: string;
  status: "open" | "upcoming" | "closed" | "extended";
  isKeyMilestone?: boolean;
}

export interface Track {
  id: number;
  number: string;
  title: string;
  category: "quantum" | "ai" | "security" | "iot" | "computing" | "networks" | "data" | "software" | "emerging" | string;
  topics: string[];
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  photoUrl: string;
  keynoteTitle: string;
  bio?: string;
  featured?: boolean;
}

export interface CommitteeMember {
  id: string;
  name: string;
  designation: string;
  institution: string;
  group: "patrons" | "general" | "conveners" | "tpc" | "advisory";
  initials: string;
}

export interface RegistrationTier {
  category: string;
  inrPrice: number;
  usdPrice: number;
  ieeeInrPrice?: number;
  ieeeUsdPrice?: number;
  foreignUsdPrice: number;
  features: string[];
}

export interface ScheduleEvent {
  time: string;
  title: string;
  speakerOrSession?: string;
  venue: string;
}

export interface ScheduleDay {
  dayNumber: number;
  dateStr: string;
  events: ScheduleEvent[];
}
