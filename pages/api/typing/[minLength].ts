import type { NextApiRequest, NextApiResponse } from 'next';

// Disable SSL certificate validation (use for development only)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const headersList: HeadersInit = {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
  };

  try {
    const response = await fetch(
      `https://api.quotable.io/random?minLength=${req.query.minLength.toString()}`,
      {
        method: 'GET',
        headers: headersList,
      },
    );

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: 'Failed to fetch quote' });
    }

    const data = await response.json();
    res.status(200).json({ quote: data.content, author: data.authorSlug });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}
