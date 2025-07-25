type Relation = 'grandparent' | 'parent' | 'wife' | 'child' | 'grandchild' | 'relative';

type Role = 'prophet' | 'caliph';

export type Person = {
  id: string;
  name: string;
  sex: 'm' | 'f';
  lifetime: {
    from?: number;
    estimatedFrom?: number;
    to?: number | null | false;
    estimatedTo?: number;
  };
  bornIn?: string;
  diedIn?: string;
  relation?: Relation;
  roles?: Array<{
    name: Role;
    from: number;
    to: number;
  }>;
  bornFromMarriageId?: string;
};

export type Marriage = {
  id: string;
  spouse1: string;
  spouse2: string;
  year: number;
};

export const people: Person[] = [
  {
    id: 'abdul-muthalib',
    name: 'Abdul Muthalib bin Hasyim',
    sex: 'm',
    lifetime: { from: 497, to: 578 },
    bornIn: 'Makkah',
    diedIn: 'Makkah',
    relation: 'grandparent',
  },
  {
    id: 'wahab-bin-abdu-manaf',
    name: 'Wahb bin Abdu Manaf',
    sex: 'm',
    lifetime: { estimatedFrom: 497, estimatedTo: 578 },
    relation: 'grandparent',
  },
  {
    id: 'abdullah',
    name: 'Abdullah bin Abdul Muthalib',
    sex: 'm',
    lifetime: { from: 545, to: 570 },
    bornIn: 'Makkah',
    diedIn: 'Yatsrib',
    relation: 'parent',
  },
  {
    id: 'aminah',
    name: 'Aminah binti Wahb',
    sex: 'f',
    lifetime: { from: 549, to: 576 },
    bornIn: 'Makkah',
    diedIn: 'Abwa’',
    relation: 'parent',
  },
  {
    id: 'abu-thalib',
    name: 'Abu Thalib bin Abdul Muthalib',
    sex: 'm',
    lifetime: { from: 540, to: 619 },
    bornIn: 'Makkah',
    diedIn: 'Makkah',
    relation: 'relative',
  },
  {
    id: 'hamzah',
    name: 'Hamzah bin Abdul Muthalib',
    sex: 'm',
    lifetime: { from: 568, to: 625 },
    bornIn: 'Makkah',
    diedIn: 'Uhud',
    relation: 'relative',
  },
  {
    id: 'abbas',
    name: 'Abbas bin Abdul Muthalib',
    sex: 'm',
    lifetime: { from: 565, to: 653 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
    relation: 'relative',
  },
  {
    id: 'abu-lahab',
    name: 'Abu Lahab (Abdul Uzza bin Abdul Muthalib)',
    sex: 'm',
    lifetime: { from: 549, to: 624 },
    bornIn: 'Makkah',
    diedIn: 'Makkah',
    relation: 'relative',
  },
  {
    id: 'muhammad',
    name: 'Muhammad ﷺ',
    sex: 'm',
    lifetime: { from: 570, to: 632 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
    roles: [
      {
        name: 'prophet',
        from: 610,
        to: 632,
      },
    ],
    bornFromMarriageId: 'abdullah-aminah',
  },
  {
    id: 'khadijah',
    name: 'Khadijah binti Khuwailid',
    sex: 'f',
    lifetime: { from: 555, to: 619 },
    bornIn: 'Makkah',
    diedIn: 'Makkah',
    relation: 'wife',
  },
  {
    id: 'qasim',
    name: 'Qasim bin Muhammad',
    sex: 'm',
    lifetime: { from: 598, to: 600 },
    bornIn: 'Makkah',
    diedIn: 'Makkah',
    relation: 'child',
  },
  {
    id: 'zainab',
    name: 'Zainab binti Muhammad',
    sex: 'f',
    lifetime: { from: 599, to: 629 },
    bornIn: 'Makkah',
    diedIn: 'Makkah',
    relation: 'child',
  },
  {
    id: 'ruqayyah',
    name: 'Ruqayyah binti Muhammad',
    sex: 'f',
    lifetime: { from: 601, to: 624 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
    relation: 'child',
  },
  {
    id: 'umm-kultsum',
    name: 'Ummu Kultsum binti Muhammad',
    sex: 'f',
    lifetime: { from: 603, to: 630 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
    relation: 'child',
  },
  {
    id: 'fatimah',
    name: 'Fatimah Az-Zahra',
    sex: 'f',
    lifetime: { from: 605, to: 632 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
    relation: 'child',
  },
  {
    id: 'abdullah-bin-muhammad',
    name: 'Abdullah bin Muhammad (At-Thayyib/At-Tahir)',
    sex: 'm',
    lifetime: { from: 611, to: 615 },
    bornIn: 'Makkah',
    diedIn: 'Makkah',
    relation: 'child',
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim bin Muhammad',
    sex: 'm',
    lifetime: { from: 630, to: 632 },
    bornIn: 'Madinah',
    diedIn: 'Madinah',
    relation: 'child',
  },
  {
    id: 'abu-bakar',
    name: 'Abu Bakar Ash-Shiddiq',
    sex: 'm',
    lifetime: { from: 573, to: 634 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
    roles: [
      {
        name: 'caliph',
        from: 632,
        to: 634,
      },
    ],
  },
  {
    id: 'umar',
    name: 'Umar bin Khattab',
    sex: 'm',
    lifetime: { from: 584, to: 644 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
    roles: [
      {
        name: 'caliph',
        from: 634,
        to: 644,
      },
    ],
  },
  {
    id: 'utsman',
    name: 'Utsman bin Affan',
    sex: 'm',
    lifetime: { from: 576, to: 656 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
    roles: [
      {
        name: 'caliph',
        from: 644,
        to: 656,
      },
    ],
  },
  {
    id: 'ali',
    name: 'Ali bin Abi Thalib',
    sex: 'm',
    lifetime: { from: 600, to: 661 },
    bornIn: 'Makkah',
    diedIn: 'Kufah',
    roles: [
      {
        name: 'caliph',
        from: 656,
        to: 661,
      },
    ],
  },
  {
    id: 'hasan-bin-ali',
    name: 'Hasan bin Ali',
    sex: 'm',
    lifetime: { from: 625, to: 670 },
    bornIn: 'Madinah',
    diedIn: 'Madinah',
    relation: 'grandchild',
  },
  {
    id: 'husain-bin-ali',
    name: 'Husain bin Ali',
    sex: 'm',
    lifetime: { from: 626, to: 680 },
    bornIn: 'Madinah',
    diedIn: 'Karbala',
    relation: 'grandchild',
  },
  {
    id: 'aisha',
    name: 'Aisyah binti Abu Bakar',
    sex: 'f',
    lifetime: { from: 614, to: 678 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
    relation: 'wife',
  },
  {
    id: "sawda-binti-zam'ah",
    name: "Sawda binti Zam'ah",
    sex: 'f',
    lifetime: { estimatedFrom: 570, estimatedTo: 644 },
    bornIn: 'Mekkah',
    diedIn: 'Madinah',
    relation: 'wife',
  },
  {
    id: 'hafsah-binti-umar',
    name: 'Hafsah binti Umar',
    sex: 'f',
    lifetime: { from: 605, to: 665 },
    bornIn: 'Mekkah',
    diedIn: 'Madinah',
    relation: 'wife',
  },
  {
    id: 'zaynab-binti-jahsy',
    name: 'Zaynab binti Jahsy',
    sex: 'f',
    lifetime: { from: 590, to: 641 },
    bornIn: 'Mekkah',
    diedIn: 'Madinah',
    relation: 'wife',
  },
  {
    id: 'bilal',
    name: 'Bilal bin Rabah',
    sex: 'm',
    lifetime: { from: 580, to: 640 },
    bornIn: 'Makkah',
    diedIn: 'Dimasyq',
  },
  {
    id: 'zaid-bin-haritsah',
    name: 'Zaid bin Haritsah',
    sex: 'm',
    lifetime: { from: 581, to: 629 },
    bornIn: 'Najd',
    diedIn: 'Mu’tah',
  },
  {
    id: 'umm-salamah',
    name: 'Umm Salamah',
    sex: 'f',
    lifetime: { from: 596, to: 683 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
  },
  {
    id: 'umm-aiman',
    name: 'Umm Aiman (Barakah)',
    sex: 'f',
    lifetime: { from: 550, to: 650 },
    bornIn: 'Habsyah',
    diedIn: 'Madinah',
  },
  {
    id: 'saad-bin-abi-waqqash',
    name: 'Saad bin Abi Waqqash',
    sex: 'm',
    lifetime: { from: 595, to: 674 },
    bornIn: 'Makkah',
    diedIn: 'Al-Aqiq (dekat Madinah)',
  },
  {
    id: 'abdurrahman-bin-auf',
    name: 'Abdurrahman bin Auf',
    sex: 'm',
    lifetime: { from: 580, to: 652 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
  },
  {
    id: 'abu-ubaidah',
    name: 'Abu Ubaidah bin Jarrah',
    sex: 'm',
    lifetime: { from: 583, to: 639 },
    bornIn: 'Makkah',
    diedIn: 'Syam',
  },
  {
    id: 'musab-bin-umair',
    name: "Mus'ab bin Umair",
    sex: 'm',
    lifetime: { from: 585, to: 625 },
    bornIn: 'Makkah',
    diedIn: 'Uhud',
  },
  {
    id: 'asma-binti-abu-bakar',
    name: 'Asma binti Abu Bakar',
    sex: 'f',
    lifetime: { from: 595, to: 692 },
    bornIn: 'Makkah',
    diedIn: 'Madinah',
  },
  {
    id: 'muawiyah-bin-abu-sufyan',
    name: 'Muawiyah bin Abu Sufyan',
    sex: 'm',
    lifetime: { from: 602, to: 680 },
    bornIn: 'Makkah',
    diedIn: 'Damaskus',
    roles: [
      {
        name: 'caliph',
        from: 661,
        to: 680,
      },
    ],
  },
  {
    id: 'yazid-bin-muawiyah',
    name: 'Yazid bin Muawiyah',
    sex: 'm',
    lifetime: { from: 646, to: 683 },
    bornIn: 'Damaskus',
    diedIn: 'Damaskus',
    roles: [
      {
        name: 'caliph',
        from: 680,
        to: 683,
      },
    ],
  },
  {
    id: 'muawiyah-ii-bin-yazid',
    name: 'Muawiyah II bin Yazid',
    sex: 'm',
    lifetime: { estimatedFrom: 664, to: 684 },
    bornIn: 'Damaskus',
    diedIn: 'Damaskus',
    roles: [
      {
        name: 'caliph',
        from: 683,
        to: 684,
      },
    ],
  },
  {
    id: 'marwan-bin-al-hakam',
    name: 'Marwan bin Al-Hakam',
    sex: 'm',
    lifetime: { from: 623, to: 685 },
    bornIn: 'Madinah',
    diedIn: 'Damaskus',
    roles: [
      {
        name: 'caliph',
        from: 684,
        to: 685,
      },
    ],
  },
  {
    id: 'abdul-malik-bin-marwan',
    name: 'Abdul Malik bin Marwan',
    sex: 'm',
    lifetime: { from: 646, to: 705 },
    bornIn: 'Madinah',
    diedIn: 'Damaskus',
    roles: [
      {
        name: 'caliph',
        from: 685,
        to: 705,
      },
    ],
  },
  {
    id: 'al-walid-bin-abdul-malik',
    name: 'Al-Walid bin Abdul Malik',
    sex: 'm',
    lifetime: { from: 668, to: 715 },
    bornIn: 'Damaskus',
    diedIn: 'Damaskus',
    roles: [
      {
        name: 'caliph',
        from: 705,
        to: 715,
      },
    ],
  },
  {
    id: 'sulaiman-bin-abdul-malik',
    name: 'Sulaiman bin Abdul Malik',
    sex: 'm',
    lifetime: { estimatedFrom: 675, to: 717 },
    bornIn: 'Damaskus',
    diedIn: 'Dabiq',
    roles: [
      {
        name: 'caliph',
        from: 715,
        to: 717,
      },
    ],
  },
  {
    id: 'umar-bin-abdul-aziz',
    name: 'Umar bin Abdul Aziz',
    sex: 'm',
    lifetime: { from: 682, to: 720 },
    bornIn: 'Madinah',
    diedIn: 'Dayr Siman (near Aleppo)',
    roles: [
      {
        name: 'caliph',
        from: 717,
        to: 720,
      },
    ],
  },
  {
    id: 'yazid-ii-bin-abdul-malik',
    name: 'Yazid II bin Abdul Malik',
    sex: 'm',
    lifetime: { from: 687, to: 724 },
    bornIn: 'Damaskus',
    diedIn: 'Damaskus',
    roles: [
      {
        name: 'caliph',
        from: 720,
        to: 724,
      },
    ],
  },
  {
    id: 'hisham-bin-abdul-malik',
    name: 'Hisham bin Abdul Malik',
    sex: 'm',
    lifetime: { from: 691, to: 743 },
    bornIn: 'Damaskus',
    diedIn: 'Rusafa (north of Euphrates)',
    roles: [
      {
        name: 'caliph',
        from: 724,
        to: 743,
      },
    ],
  },
  {
    id: 'marwan_ii',
    name: 'Marwan bin Muhammad (Marwan II)',
    sex: 'm',
    lifetime: { from: 688, to: 750 },
    bornIn: 'Syam',
    diedIn: 'Mesir',
    roles: [
      {
        name: 'caliph',
        from: 744,
        to: 750,
      },
    ],
  },
  {
    id: 'as_saffah',
    name: 'Abu al-Abbas as-Saffah',
    sex: 'm',
    lifetime: { from: 721, to: 754 },
    bornIn: 'Humaymah, Yordania',
    diedIn: 'Al-Anbar, Irak',
    roles: [
      {
        name: 'caliph',
        from: 750,
        to: 754,
      },
    ],
  },
  {
    id: 'al_mansur',
    name: "Abu Ja'far al-Mansur",
    sex: 'm',
    lifetime: { from: 714, to: 775 },
    bornIn: 'Al-Humaymah',
    diedIn: 'Mekah',
    roles: [
      {
        name: 'caliph',
        from: 754,
        to: 775,
      },
    ],
  },
  {
    id: 'imam-abu-hanifah',
    name: 'Abu Hanifah',
    sex: 'm',
    lifetime: { from: 699, to: 767 },
    bornIn: 'Kufa, Iraq',
    diedIn: 'Baghdad, Iraq',
  },
  {
    id: 'imam-malik',
    name: 'Malik bin Anas',
    sex: 'm',
    lifetime: { from: 711, to: 795 },
    bornIn: 'Medina, Hijaz',
    diedIn: 'Medina, Abbasid Caliphate',
  },
  {
    id: 'imam-shafii',
    name: 'Muhammad bin Idris al-Shafi‘i',
    sex: 'm',
    lifetime: { from: 767, to: 820 },
    bornIn: 'Gaza, Bilad al-Sham',
    diedIn: 'Fustat, Egypt',
  },
  {
    id: 'imam-ahmad',
    name: 'Ahmad bin Hanbal',
    sex: 'm',
    lifetime: { from: 780, to: 855 },
    bornIn: 'Baghdad, Abbasid Caliphate',
    diedIn: 'Baghdad, Abbasid Caliphate',
  },
  {
    id: 'imam-bukhori',
    name: 'Abu Abdillah Muhammad bin Ismail Al-Bukhari',
    sex: 'm',
    lifetime: { from: 810, to: 870 },
    bornIn: 'Bukhoro',
    diedIn: 'Khartank',
  },
  {
    id: 'imam-muslim',
    name: 'Abul Husain Muslim bin al-Hajjaj',
    sex: 'm',
    lifetime: { from: 821, to: 875 },
    diedIn: 'Naisaburi.',
  },
];

// ---

export const marriages: Marriage[] = [
  {
    id: 'abdullah-aminah',
    spouse1: 'abdullah',
    spouse2: 'aminah',
    year: 568,
  },
  {
    id: 'muhammad-khadijah',
    spouse1: 'muhammad',
    spouse2: 'khadijah',
    year: 595,
  },
  {
    id: 'muhammad-sawda',
    spouse1: 'muhammad',
    spouse2: "sawda-binti-zam'ah",
    year: 620,
  },
  {
    id: 'muhammad-aisha',
    spouse1: 'muhammad',
    spouse2: 'aisha',
    year: 623,
  },
  {
    id: 'ali-fatimah',
    spouse1: 'ali',
    spouse2: 'fatimah',
    year: 623,
  },
  {
    id: 'muhammad-hafsah',
    spouse1: 'muhammad',
    spouse2: 'hafsah-binti-umar',
    year: 625,
  },
  {
    id: 'muhammad-zaynab-jahsy',
    spouse1: 'muhammad',
    spouse2: 'zaynab-binti-jahsy',
    year: 627,
  },
];
