import dotenv from "dotenv";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
//throw error if .env not found
if(envFound.error){
    throw new Error("Could not find .env file");
}

interface ENV {
    PORT: number | undefined;
    CLIENT_URL: string | undefined;
    WEATHER_API_URL: string | undefined;
    DATABASE_URL: string | undefined;
    DATABASE_CONTAINER_URL: string | undefined;
}

interface Config {
    PORT: number;
    CLIENT_URL: string;
    WEATHER_API_URL: string;
    DATABASE_URL: string;
    DATABASE_CONTAINER_URL: string;
}

const getConfig = (): ENV => {
    return {
      PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
      CLIENT_URL: process.env.CLIENT_URL,
      WEATHER_API_URL: process.env.WEATHER_API_URL,
      DATABASE_URL: process.env.DATABASE_URL,
      DATABASE_CONTAINER_URL: process.env.DATABASE_CONTAINER_URL,
    };
  };

//throw error if any field was undefined
const getSanitzedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
      if (value === undefined) {
        throw new Error(`Missing key ${key} in config.env`);
      }
    }
    return config as Config;
  };

const config = getConfig();
const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;