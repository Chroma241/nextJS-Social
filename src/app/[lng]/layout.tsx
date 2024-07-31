'use client';

import React, { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import { dir } from 'i18next';
import "./globals.css";
import { useTranslation } from "../i18n";

const inter = Inter({ subsets: ["latin"] });


const RootLayout: React.FC<{ children: React.ReactNode; params: { lng: string } }> = ({ children, params: { lng } }) => {
  const [metadata, setMetadata] = useState<{ title: string; description: string }>({
    title: '',
    description: '',
  });

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const { t } = await useTranslation(lng, 'metadata');
        setMetadata({
          title: t("title"),
          description: t("description"),
        });
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };
    fetchMetadata();
  }, [lng]);

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-gray-100 w-full">{children}</body>
    </html>
  );
};

export default RootLayout;
