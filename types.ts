import React from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export enum ProgramTheme {
  CULTURE = 'CULTURE',
  ACADEMIC = 'ACADEMIC',
  SCIENCE = 'SCIENCE',
  NEWS = 'NEWS',
  MUSIC = 'MUSIC',
  ENTERTAINMENT = 'ENTERTAINMENT',
  SPORTS = 'SPORTS',
  OTHER = 'OTHER',
}

export interface ProgramSlot {
  name: string;
  theme: ProgramTheme;
  Icon: React.FC<{ className?: string }>;
  audioSrc?: string;
}

export interface DailySchedule {
  day: string;
  slots: ProgramSlot[];
}

export interface FeaturedProgram {
  name: string;
  description: string;
  schedule: string;
  theme: ProgramTheme;
  Icon: React.FC<{ className?: string }>;
}