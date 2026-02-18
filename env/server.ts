// https://env.t3.gg/docs/nextjs#create-your-schema
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const serverEnv = createEnv({
  server: {
    // 数据库和认证（必需）
    DATABASE_URL: z.string().min(1),
    REDIS_URL: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(1),

    // 你添加的自定义API（必需）
    CUSTOM_API_KEY: z.string().min(1),

    // AI API Keys（可选，用不到可以留空）
    XAI_API_KEY: z.string().optional(),
    OPENAI_API_KEY: z.string().optional(),
    ANTHROPIC_API_KEY: z.string().optional(),
    GROQ_API_KEY: z.string().optional(),
    GOOGLE_GENERATIVE_AI_API_KEY: z.string().optional(),
    DAYTONA_API_KEY: z.string().optional(),
    VALYU_API_KEY: z.string().optional(),

    // 搜索功能（可选，需要网页搜索才需要填）
    EXA_API_KEY: z.string().optional(),
    TAVILY_API_KEY: z.string().optional(),
    FIRECRAWL_API_KEY: z.string().optional(),
    PARALLEL_API_KEY: z.string().optional(),
    SUPADATA_API_KEY: z.string().optional(),

    // 第三方登录（可选，不需要登录功能可留空）
    GITHUB_CLIENT_ID: z.string().optional(),
    GITHUB_CLIENT_SECRET: z.string().optional(),
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    TWITTER_CLIENT_ID: z.string().optional(),
    TWITTER_CLIENT_SECRET: z.string().optional(),

    // Upstash（可选）
    UPSTASH_REDIS_REST_URL: z.string().optional(),
    UPSTASH_REDIS_REST_TOKEN: z.string().optional(),

    // 其他服务（可选）
    ELEVENLABS_API_KEY: z.string().optional(),
    TMDB_API_KEY: z.string().optional(),
    YT_ENDPOINT: z.string().optional(),
    OPENWEATHER_API_KEY: z.string().optional(),
    GOOGLE_MAPS_API_KEY: z.string().optional(),
    AMADEUS_API_KEY: z.string().optional(),
    AMADEUS_API_SECRET: z.string().optional(),
    CRON_SECRET: z.string().optional(),
    BLOB_READ_WRITE_TOKEN: z.string().optional(),
    SMITHERY_API_KEY: z.string().optional(),
    COINGECKO_API_KEY: z.string().optional(),
    QSTASH_TOKEN: z.string().optional(),
    RESEND_API_KEY: z.string().optional(),
    SUPERMEMORY_API_KEY: z.string().optional(),

    ALLOWED_ORIGINS: z.string().optional().default('http://localhost:3000'),
  },
  experimental__runtimeEnv: process.env,
});
