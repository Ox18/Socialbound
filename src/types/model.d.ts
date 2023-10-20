export type Server = {
  name: string;
  ip: string;
  port: number;
  playersOnline: number;
  maxPlayers: number;
  rank: {
    min: number;
    max: number;
  };
  identifier: number;
}

export type Account = {
  username: string;
  password: string;
}