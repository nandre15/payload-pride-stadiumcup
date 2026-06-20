export const PRIDE_COLORS = [
  '#FF0018',
  '#FFA52C',
  '#FFFF41',
  '#008018',
  '#0000F9',
  '#86007D',
] as const;

export const GOOGLE_FORM_URL = 'https://forms.gle/1C9GLjHgpgykdkkp8';

export const TOURNAMENT_DATE = new Date('2026-06-19T17:00:00');

export const REGISTRATION_CLOSE_DATE = new Date('2026-06-10T23:59:59');

export const NAV_LINKS = ['Home', 'Rules', 'Schedule', 'Bracket', 'Participants'] as const;

export const DISCORD_INVITE_URL = 'https://discord.gg/UFkS42E4t2';

export const OAL_TWITCH_URL = 'https://www.twitch.tv/oal_official';

export const TEAM_NAMES = ['Stonewall', 'Alphabet Brigade', 'Valkyrie', 'The First Brick', 'Hyrax'] as const;

export const SUB_ALT_TEAM_NAME = 'Sub/Alt';

export const TBD_TEAM_NAME = 'TBD';

export type GroupStageWinner = typeof TEAM_NAMES[number] | typeof TBD_TEAM_NAME;

export const GROUP_STAGE_ROUNDS = [
  {
    name: 'Round 1',
    matches: [[TEAM_NAMES[0], TEAM_NAMES[4]], [TEAM_NAMES[1], TEAM_NAMES[3]]],
    streamedMatchIndex: 0,
    isLive: false,
    winners: ['Stonewall', 'Alphabet Brigade'] as [GroupStageWinner, GroupStageWinner],
  },
  {

    name: 'Round 2',
    matches: [[TEAM_NAMES[4], TEAM_NAMES[2]], [TEAM_NAMES[0], TEAM_NAMES[3]]],
    streamedMatchIndex: 0,
    isLive: false,
    winners: ['Stonewall' , 'Valkyrie'] as [GroupStageWinner, GroupStageWinner],
  },
  {
    name: 'Round 3',
    matches: [[TEAM_NAMES[3], TEAM_NAMES[1]], [TEAM_NAMES[0], TEAM_NAMES[2]]],
    streamedMatchIndex: 0,
    isLive: false,
    winners: ['Alphabet Brigade', 'Valkyrie'] as [GroupStageWinner, GroupStageWinner],
  },
  {
    name: 'Round 4',
    matches: [[TEAM_NAMES[0], TEAM_NAMES[1]], [TEAM_NAMES[2], TEAM_NAMES[4]]],
    streamedMatchIndex: 0,
    isLive: false,
    winners: ['Stonewall', 'Valkyrie'] as [GroupStageWinner, GroupStageWinner],
  },
  {
    name: 'Round 5',
    matches: [[TEAM_NAMES[4], TEAM_NAMES[3]], [TEAM_NAMES[1], TEAM_NAMES[2]]],
    streamedMatchIndex: 0,
    isLive: false,
    winners: ['Alphabet Brigade', 'The First Brick'] as [GroupStageWinner, GroupStageWinner],
  },
] as const;

export const HERO_IMAGE_BASE_PATH = '/assets/stadium-heros-img';

export const HERO_IMAGE_MAP: Record<string, string> = {
  ana: 'Ana.png',
  ashe: 'Ashe.png',
  brigitte: 'Brigitte.png',
  cassidy: 'Cassidy.png',
  doomfist: 'DoomFist.png',
  dva: 'Dva.png',
  freja: 'Freja.png',
  genji: 'Genji.png',
  hazard: 'Hazard.png',
  jetpackcat: 'Jetpack_Cat.png',
  junkerqueen: 'JunkerQueen.png',
  junkrat: 'Junkrat.png',
  juno: 'Juno.png',
  kiriko: 'Kiriko.png',
  lucio: 'Lucio.png',
  mei: 'Mei.png',
  mercy: 'Mercy.png',
  moira: 'Moira.png',
  orisa: 'Orisa.png',
  pharah: 'Pharah.png',
  ramattra: 'Ramattra.png',
  reaper: 'Reaper.png',
  reinhardt: 'Reinhardt.png',
  sigma: 'Sigma.png',
  sojourn: 'Sojourn.png',
  soldier76: 'Soldier.png',
  torbjorn: 'torbjorn.png',
  tracer: 'Tracer.png',
  vendetta: 'Vendetta.png',
  winston: 'Winston.png',
  wuyang: 'Wuyang.png',
  zarya: 'Zarya.png',
  zenyatta: 'Zenyatta.png',
} as const;
