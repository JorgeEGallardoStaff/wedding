// src/app/api/auth/route.js
import { NextResponse } from 'next/server';
import ImageKit from 'imagekit';

  console.log("PUBLIC_KEY:", process.env.IMAGEKIT_PUBLIC_KEY);
  console.log("PRIVATE_KEY:", process.env.IMAGEKIT_PRIVATE_KEY);
  console.log("URL_ENDPOINT:", process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT);

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || ''
});

export async function GET() {
  
    const result = imagekit.getAuthenticationParameters();
    return NextResponse.json({
        ...result,
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY || ''
    });
}