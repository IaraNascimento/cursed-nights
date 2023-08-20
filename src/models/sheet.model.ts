enum RACES {
  Kindred = 'Vampiro',
  Kine = 'Humano',
  Ghoul = 'Lacaio',
  Garou = 'Lobisomem',
  Mage = 'Mago',
  Demon = 'Demônio',
  Wraith = 'Assombração',
  Others = 'Outros'
}

enum CLANS {
  Assamite = 'Assamita',
  Brujah = 'Brujah',
  Gangrel = 'Gangrel',
  Giovanni = 'Giovanni',
  Lasombra = 'Lasombra',
  Malkavian = 'Malkaviano',
  Nosferatu = 'Nosferatu',
  Ravnos = 'Ravnos',
  Setite = 'Setita',
  Toreador = 'Toreador',
  Tremere = 'Tremere',
  Tzimiscce = 'Tzimisce',
  Ventrue = 'Ventrue'
}

enum BLOODLINES {
  Baali = 'Baali',
  BloodBrother = 'Irmão de Sangue',
  DaughterCacophony = 'Filha da Cacofonia',
  HarbingerSkulls = 'Precursor do Ódio',
  Kiasyd = 'Kiasyd',
  Nagaraja = 'Nagaraja',
  Salubri = 'Salubri',
  Samedi = 'Samedi',
  TrueBrujah = 'Brujah Verdadeiro',
}

interface ISheet {
  id: string;
  isPC: boolean;
  title: string;
  race: RACES;
  clan?: CLANS | BLOODLINES;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export { CLANS, BLOODLINES, RACES, ISheet };