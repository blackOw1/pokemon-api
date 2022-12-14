const showTMsResponse = `{
  status: 'success',
  results: 50,
  data: {
    docs: [
      {
        _id: '62f8d181cb1a94396dbd46e8',
        tm: '01',
        name: 'mega punch',
        type: 'normal',
        category: 'physical',
        pp: 20,
        power: 80,
        accuracy: 85,
        effect: 'deals damage with no additional effect.',
        id: '62f8d181cb1a94396dbd46e8',
      },
      {
        _id: '62f8d181cb1a94396dbd46fd',
        tm: '02',
        name: 'razor wind',
        type: 'normal',
        category: 'special',
        pp: 10,
        power: 80,
        accuracy: 100,
        effect: 'charges on first turn, attacks on second. high critical hit ratio.',
        id: '62f8d181cb1a94396dbd46fd',
      },
      {
        _id: '62f8d181cb1a94396dbd4725',
        tm: '03',
        name: 'swords dance',
        type: 'normal',
        category: 'status',
        pp: 20,
        power: null,
        accuracy: null,
        effect: "sharply raises user's attack.",
        id: '62f8d181cb1a94396dbd4725',
      },
      {
        _id: '62f8d181cb1a94396dbd4738',
        tm: '04',
        name: 'whirlwind',
        type: 'normal',
        category: 'status',
        pp: 20,
        power: null,
        accuracy: null,
        effect: 'in battles, the opponent switches. in the wild, the pokémon runs.',
        id: '62f8d181cb1a94396dbd4738',
      },
      {
        _id: '62f8d181cb1a94396dbd46e7',
        tm: '05',
        name: 'mega kick',
        type: 'normal',
        category: 'physical',
        pp: 5,
        power: 120,
        accuracy: 75,
        effect: 'deals damage with no additional effect.',
        id: '62f8d181cb1a94396dbd46e7',
      },
      {
        _id: '62f8d181cb1a94396dbd4730',
        tm: '06',
        name: 'toxic',
        type: 'poison',
        category: 'status',
        pp: 10,
        power: null,
        accuracy: 90,
        effect: 'badly poisons opponent.',
        id: '62f8d181cb1a94396dbd4730',
      },
      {
        _id: '62f8d181cb1a94396dbd46d4',
        tm: '07',
        name: 'horn drill',
        type: 'normal',
        category: 'physical',
        pp: 5,
        power: null,
        accuracy: 30,
        effect: 'one-hit-ko, if it hits.',
        id: '62f8d181cb1a94396dbd46d4',
      },
      {
        _id: '62f8d181cb1a94396dbd46a3',
        tm: '08',
        name: 'body slam',
        type: 'normal',
        category: 'physical',
        pp: 15,
        power: 85,
        accuracy: 100,
        effect: 'may paralyze opponent.',
        id: '62f8d181cb1a94396dbd46a3',
      },
      {
        _id: '62f8d181cb1a94396dbd4728',
        tm: '09',
        name: 'take down',
        type: 'normal',
        category: 'physical',
        pp: 20,
        power: 90,
        accuracy: 85,
        effect: 'user receives recoil damage.',
        id: '62f8d181cb1a94396dbd4728',
      },
      {
        _id: '62f8d181cb1a94396dbd46b8',
        tm: '10',
        name: 'double-edge',
        type: 'normal',
        category: 'physical',
        pp: 15,
        power: 120,
        accuracy: 100,
        effect: 'user receives recoil damage.',
        id: '62f8d181cb1a94396dbd46b8',
      },
      {
        _id: '62f8d181cb1a94396dbd46a7',
        tm: '11',
        name: 'bubble beam',
        type: 'water',
        category: 'special',
        pp: 20,
        power: 65,
        accuracy: 100,
        effect: "may lower opponent's speed.",
        id: '62f8d181cb1a94396dbd46a7',
      },
      {
        _id: '62f8d181cb1a94396dbd4736',
        tm: '12',
        name: 'water gun',
        type: 'water',
        category: 'special',
        pp: 25,
        power: 40,
        accuracy: 100,
        effect: 'deals damage with no additional effect.',
        id: '62f8d181cb1a94396dbd4736',
      },
      {
        _id: '62f8d181cb1a94396dbd46d9',
        tm: '13',
        name: 'ice beam',
        type: 'ice',
        category: 'special',
        pp: 10,
        power: 90,
        accuracy: 100,
        effect: 'may freeze opponent.',
        id: '62f8d181cb1a94396dbd46d9',
      },
      {
        _id: '62f8d181cb1a94396dbd46a2',
        tm: '14',
        name: 'blizzard',
        type: 'ice',
        category: 'special',
        pp: 5,
        power: 110,
        accuracy: 70,
        effect: 'may freeze opponent.',
        id: '62f8d181cb1a94396dbd46a2',
      },
      {
        _id: '62f8d181cb1a94396dbd46d6',
        tm: '15',
        name: 'hyper beam',
        type: 'normal',
        category: 'special',
        pp: 5,
        power: 150,
        accuracy: 90,
        effect: 'user must recharge next turn.',
        id: '62f8d181cb1a94396dbd46d6',
      },
      {
        _id: '62f8d181cb1a94396dbd46ef',
        tm: '16',
        name: 'pay day',
        type: 'normal',
        category: 'physical',
        pp: 20,
        power: 40,
        accuracy: 100,
        effect: 'a small amount of money is gained after the battle resolves.',
        id: '62f8d181cb1a94396dbd46ef',
      },
      {
        _id: '62f8d181cb1a94396dbd471f',
        tm: '17',
        name: 'submission',
        type: 'fighting',
        category: 'physical',
        pp: 20,
        power: 80,
        accuracy: 80,
        effect: 'user receives recoil damage.',
        id: '62f8d181cb1a94396dbd471f',
      },
      {
        _id: '62f8d181cb1a94396dbd46ae',
        tm: '18',
        name: 'counter',
        type: 'fighting',
        category: 'physical',
        pp: 20,
        power: null,
        accuracy: 100,
        effect: 'when hit by a physical attack, user strikes back with 2x power.',
        id: '62f8d181cb1a94396dbd46ae',
      },
      {
        _id: '62f8d181cb1a94396dbd4708',
        tm: '19',
        name: 'seismic toss',
        type: 'fighting',
        category: 'physical',
        pp: 20,
        power: null,
        accuracy: 100,
        effect: "inflicts damage equal to user's level.",
        id: '62f8d181cb1a94396dbd4708',
      },
      {
        _id: '62f8d181cb1a94396dbd46fb',
        tm: '20',
        name: 'rage',
        type: 'normal',
        category: 'physical',
        pp: 20,
        power: 20,
        accuracy: 100,
        effect: "raises user's attack when hit.",
        id: '62f8d181cb1a94396dbd46fb',
      },
      {
        _id: '62f8d181cb1a94396dbd46e6',
        tm: '21',
        name: 'mega drain',
        type: 'grass',
        category: 'special',
        pp: 15,
        power: 40,
        accuracy: 100,
        effect: 'user recovers half the hp inflicted on opponent.',
        id: '62f8d181cb1a94396dbd46e6',
      },
      {
        _id: '62f8d181cb1a94396dbd4715',
        tm: '22',
        name: 'solar beam',
        type: 'grass',
        category: 'special',
        pp: 10,
        power: 120,
        accuracy: 100,
        effect: 'charges on first turn, attacks on second.',
        id: '62f8d181cb1a94396dbd4715',
      },
      {
        _id: '62f8d181cb1a94396dbd46b9',
        tm: '23',
        name: 'dragon rage',
        type: 'dragon',
        category: 'special',
        pp: 10,
        power: null,
        accuracy: 100,
        effect: 'always inflicts 40 hp.',
        id: '62f8d181cb1a94396dbd46b9',
      },
      {
        _id: '62f8d181cb1a94396dbd472f',
        tm: '24',
        name: 'thunderbolt',
        type: 'electric',
        category: 'special',
        pp: 15,
        power: 90,
        accuracy: 100,
        effect: 'may paralyze opponent.',
        id: '62f8d181cb1a94396dbd472f',
      },
      {
        _id: '62f8d181cb1a94396dbd472b',
        tm: '25',
        name: 'thunder',
        type: 'electric',
        category: 'special',
        pp: 10,
        power: 110,
        accuracy: 70,
        effect: 'may paralyze opponent.',
        id: '62f8d181cb1a94396dbd472b',
      },
      {
        _id: '62f8d181cb1a94396dbd46bc',
        tm: '26',
        name: 'earthquake',
        type: 'ground',
        category: 'physical',
        pp: 10,
        power: 100,
        accuracy: 100,
        effect: 'power is doubled if opponent is underground from using dig.',
        id: '62f8d181cb1a94396dbd46bc',
      },
      {
        _id: '62f8d181cb1a94396dbd46c3',
        tm: '27',
        name: 'fissure',
        type: 'ground',
        category: 'physical',
        pp: 5,
        power: null,
        accuracy: 30,
        effect: 'one-hit-ko, if it hits.',
        id: '62f8d181cb1a94396dbd46c3',
      },
      {
        _id: '62f8d181cb1a94396dbd46b2',
        tm: '28',
        name: 'dig',
        type: 'ground',
        category: 'physical',
        pp: 10,
        power: 80,
        accuracy: 100,
        effect:
          'digs underground on first turn, attacks on second. can also escape from caves.',
        id: '62f8d181cb1a94396dbd46b2',
      },
      {
        _id: '62f8d181cb1a94396dbd46f8',
        tm: '29',
        name: 'psychic',
        type: 'psychic',
        category: 'special',
        pp: 10,
        power: 90,
        accuracy: 100,
        effect: "may lower opponent's special defense.",
        id: '62f8d181cb1a94396dbd46f8',
      },
      {
        _id: '62f8d181cb1a94396dbd4729',
        tm: '30',
        name: 'teleport',
        type: 'psychic',
        category: 'status',
        pp: 20,
        power: null,
        accuracy: null,
        effect: 'allows user to flee wild battles; also warps player to last pokécenter.',
        id: '62f8d181cb1a94396dbd4729',
      },
      {
        _id: '62f8d181cb1a94396dbd46ea',
        tm: '31',
        name: 'mimic',
        type: 'normal',
        category: 'status',
        pp: 10,
        power: null,
        accuracy: null,
        effect: "copies the opponent's last move.",
        id: '62f8d181cb1a94396dbd46ea',
      },
      {
        _id: '62f8d181cb1a94396dbd46b7',
        tm: '32',
        name: 'double team',
        type: 'normal',
        category: 'status',
        pp: 15,
        power: null,
        accuracy: null,
        effect: "raises user's evasiveness.",
        id: '62f8d181cb1a94396dbd46b7',
      },
      {
        _id: '62f8d181cb1a94396dbd46ff',
        tm: '33',
        name: 'reflect',
        type: 'psychic',
        category: 'status',
        pp: 20,
        power: null,
        accuracy: null,
        effect: 'halves damage from physical attacks for 5 turns.',
        id: '62f8d181cb1a94396dbd46ff',
      },
      {
        _id: '62f8d181cb1a94396dbd469f',
        tm: '34',
        name: 'bide',
        type: 'normal',
        category: 'physical',
        pp: 10,
        power: null,
        accuracy: null,
        effect: 'user takes damage for two turns then strikes back double.',
        id: '62f8d181cb1a94396dbd469f',
      },
      {
        _id: '62f8d181cb1a94396dbd46e9',
        tm: '35',
        name: 'metronome',
        type: 'normal',
        category: 'status',
        pp: 10,
        power: null,
        accuracy: null,
        effect: 'user performs almost any move in the game at random.',
        id: '62f8d181cb1a94396dbd46e9',
      },
      {
        _id: '62f8d181cb1a94396dbd4709',
        tm: '36',
        name: 'self-destruct',
        type: 'normal',
        category: 'physical',
        pp: 5,
        power: 200,
        accuracy: 100,
        effect: 'user faints.',
        id: '62f8d181cb1a94396dbd4709',
      },
      {
        _id: '62f8d181cb1a94396dbd46bd',
        tm: '37',
        name: 'egg bomb',
        type: 'normal',
        category: 'physical',
        pp: 10,
        power: 100,
        accuracy: 75,
        effect: 'deals damage with no additional effect.',
        id: '62f8d181cb1a94396dbd46bd',
      },
      {
        _id: '62f8d181cb1a94396dbd46c0',
        tm: '38',
        name: 'fire blast',
        type: 'fire',
        category: 'special',
        pp: 5,
        power: 110,
        accuracy: 85,
        effect: 'may burn opponent.',
        id: '62f8d181cb1a94396dbd46c0',
      },
      {
        _id: '62f8d181cb1a94396dbd4724',
        tm: '39',
        name: 'swift',
        type: 'normal',
        category: 'special',
        pp: 20,
        power: 60,
        accuracy: null,
        effect: 'ignores accuracy and evasiveness.',
        id: '62f8d181cb1a94396dbd4724',
      },
      {
        _id: '62f8d181cb1a94396dbd470c',
        tm: '40',
        name: 'skull bash',
        type: 'normal',
        category: 'physical',
        pp: 10,
        power: 130,
        accuracy: 100,
        effect: 'raises defense on first turn, attacks on second.',
        id: '62f8d181cb1a94396dbd470c',
      },
      {
        _id: '62f8d181cb1a94396dbd4714',
        tm: '41',
        name: 'soft-boiled',
        type: 'normal',
        category: 'status',
        pp: 10,
        power: null,
        accuracy: null,
        effect: 'user recovers half its max hp.',
        id: '62f8d181cb1a94396dbd4714',
      },
      {
        _id: '62f8d181cb1a94396dbd46ba',
        tm: '42',
        name: 'dream eater',
        type: 'psychic',
        category: 'special',
        pp: 15,
        power: 100,
        accuracy: 100,
        effect: 'user recovers half the hp inflicted on a sleeping opponent.',
        id: '62f8d181cb1a94396dbd46ba',
      },
      {
        _id: '62f8d181cb1a94396dbd470d',
        tm: '43',
        name: 'sky attack',
        type: 'flying',
        category: 'physical',
        pp: 5,
        power: 140,
        accuracy: 90,
        effect:
          'charges on first turn, attacks on second. may cause flinching. high critical hit ratio.',
        id: '62f8d181cb1a94396dbd470d',
      },
      {
        _id: '62f8d181cb1a94396dbd4700',
        tm: '44',
        name: 'rest',
        type: 'psychic',
        category: 'status',
        pp: 10,
        power: null,
        accuracy: null,
        effect: 'user sleeps for 2 turns, but user is fully healed.',
        id: '62f8d181cb1a94396dbd4700',
      },
      {
        _id: '62f8d181cb1a94396dbd472e',
        tm: '45',
        name: 'thunder wave',
        type: 'electric',
        category: 'status',
        pp: 20,
        power: null,
        accuracy: 90,
        effect: 'paralyzes opponent.',
        id: '62f8d181cb1a94396dbd472e',
      },
      {
        _id: '62f8d181cb1a94396dbd46f9',
        tm: '46',
        name: 'psywave',
        type: 'psychic',
        category: 'special',
        pp: 15,
        power: null,
        accuracy: 100,
        effect: "inflicts damage 50-150% of user's level.",
        id: '62f8d181cb1a94396dbd46f9',
      },
      {
        _id: '62f8d181cb1a94396dbd46bf',
        tm: '47',
        name: 'explosion',
        type: 'normal',
        category: 'physical',
        pp: 5,
        power: 250,
        accuracy: 100,
        effect: 'user faints.',
        id: '62f8d181cb1a94396dbd46bf',
      },
      {
        _id: '62f8d181cb1a94396dbd4702',
        tm: '48',
        name: 'rock slide',
        type: 'rock',
        category: 'physical',
        pp: 10,
        power: 75,
        accuracy: 90,
        effect: 'may cause flinching.',
        id: '62f8d181cb1a94396dbd4702',
      },
      {
        _id: '62f8d181cb1a94396dbd4732',
        tm: '49',
        name: 'tri attack',
        type: 'normal',
        category: 'special',
        pp: 10,
        power: 80,
        accuracy: 100,
        effect: 'may paralyze, burn or freeze opponent.',
        id: '62f8d181cb1a94396dbd4732',
      },
      {
        _id: '62f8d181cb1a94396dbd4720',
        tm: '50',
        name: 'substitute',
        type: 'normal',
        category: 'status',
        pp: 10,
        power: null,
        accuracy: null,
        effect: 'uses hp to creates a decoy that takes hits.',
        id: '62f8d181cb1a94396dbd4720',
      },
    ],
  },
}`;

export default showTMsResponse;
