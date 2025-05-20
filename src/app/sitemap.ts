import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://game-xpress.xfer.hr',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: 'https://game-xpress.xfer.hr/ordinance',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: 'https://game-xpress.xfer.hr/grading-criteria',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: 'https://game-xpress.xfer.hr/register',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9
		}
	];
}
