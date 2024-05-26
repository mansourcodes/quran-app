export interface Ayah {
  index: string;
  text: string;
  bismillah?: string;
}

export interface Sura {
  name: string;
  index: string;
  aya: Ayah[];
}

export interface Quran {
  sura: Sura[];
}
