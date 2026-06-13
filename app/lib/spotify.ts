/**
 * Spotify Now Playing API Client
 *
 * Setup Instructions:
 * 1. Go to https://developer.spotify.com/dashboard and create an app
 * 2. Set redirect URI to: http://localhost:3000/api/spotify/callback
 * 3. Get your CLIENT_ID and CLIENT_SECRET
 * 4. Get a refresh token by following the OAuth flow (see README or use spotify-auth-generator)
 * 5. Add to your .env.local:
 *    SPOTIFY_CLIENT_ID=your_client_id
 *    SPOTIFY_CLIENT_SECRET=your_client_secret
 *    SPOTIFY_REFRESH_TOKEN=your_refresh_token
 */

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

async function getAccessToken(): Promise<string | null> {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) return null;

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  try {
    const res = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: REFRESH_TOKEN,
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.access_token;
  } catch {
    return null;
  }
}

export interface NowPlayingData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

export async function getNowPlaying(): Promise<NowPlayingData> {
  const accessToken = await getAccessToken();
  if (!accessToken) return { isPlaying: false };

  try {
    const res = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    if (res.status === 204 || res.status > 400) return { isPlaying: false };

    const song = await res.json();
    if (!song.item || song.currently_playing_type !== "track") {
      return { isPlaying: false };
    }

    return {
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((a: { name: string }) => a.name).join(", "),
      albumImageUrl: song.item.album.images[0]?.url,
      songUrl: song.item.external_urls.spotify,
    };
  } catch {
    return { isPlaying: false };
  }
}
