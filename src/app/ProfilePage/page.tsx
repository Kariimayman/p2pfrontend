import { getAccessToken } from '@auth0/nextjs-auth0';

export default async function MyPage() {
    const { accessToken } = await getAccessToken();
    return <h1>{accessToken}</h1>;
}