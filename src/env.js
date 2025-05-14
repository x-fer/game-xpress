import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// import packageJson from '../package.json';

// const version = packageJson.version;

export const env = createEnv({
	server: {
		NODE_ENV: z
			.enum(['development', 'test', 'production'])
			.default('development'),
		JWT_SECRET: z.string(),
		// Prisma
		DATABASE_URL: z.string().url(),
		// Cloudflare
		CLOUDFLARE_ACCESS_ID: z.string(),
		CLOUDFLARE_ACCESS_KEY: z.string(),
		CLOUDFLARE_ACCOUNT_ID: z.string(),
		CLOUDFLARE_R2_BUCKET_NAME: z.string(),
		// Nodemailer
		NODEMAILER_HOST: z.string(),
		NODEMAILER_USER: z.string(),
		NODEMAILER_PASSWORD: z.string(),
		// Stripe
		STRIPE_SECRET_KEY: z.string(),
		STRIPE_WEBHOOK_SECRET: z.string()
	},

	client: {
		NEXT_PUBLIC_URL: z.string(),
		NEXT_PUBLIC_DEPLOYMENT: z.enum(['staging', 'production']),
		// Stripe
		NEXT_PUBLIC_STRIPE_URL: z.string()
	},

	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
		JWT_SECRET: process.env.JWT_SECRET,
		// Prisma
		DATABASE_URL: process.env.DATABASE_URL,
		// Cloudflare
		CLOUDFLARE_ACCESS_ID: process.env.CLOUDFLARE_ACCESS_ID,
		CLOUDFLARE_ACCESS_KEY: process.env.CLOUDFLARE_ACCESS_KEY,
		CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
		CLOUDFLARE_R2_BUCKET_NAME: process.env.CLOUDFLARE_R2_BUCKET_NAME,
		// Nodemailer
		NODEMAILER_HOST: process.env.NODEMAILER_HOST,
		NODEMAILER_USER: process.env.NODEMAILER_USER,
		NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD,
		// Stripe
		NEXT_PUBLIC_STRIPE_URL: process.env.NEXT_PUBLIC_STRIPE_URL,
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
		STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
		NEXT_PUBLIC_DEPLOYMENT: process.env.NEXT_PUBLIC_DEPLOYMENT
	},

	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true
});
