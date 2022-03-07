declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      PORT: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_DATABASE: string;
      SECRET_KEY: string;
      LOG_FORMAT: string;
      LOG_DIR: string;
      ORIGIN: string;
      CREDENTIALS: string;
    }
  }
}

export {};
