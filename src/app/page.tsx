"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  ifEmpty,
  truncateText,
  setLocal,
  getLocal,
  removeLocal,
} from "@shine/helper";
import { useState } from "react";
import useClipboard from "@/hooks/CopyToClipboard/CopyToClipboard";
import { nationalCodeValidator } from "@shine/form";
import { ShineButtonGroup } from "../../packages/core/ButtonGroup";
import { ShineButton } from "../../packages/core/Button";
import { addTranslationSchema, i18nObject } from "@/i18nConfig";
import faTranslations from "../i18n/fa.json";
import { I18nextProvider, useTranslation } from "react-i18next";

export default function Home() {
  const { isCopied, copyToClipboard } = useClipboard();
  const handleCopyToClipboard = () => {
    copyToClipboard("text");
  };
  const {t} = useTranslation()
  addTranslationSchema("fa", faTranslations);
  return (
    <I18nextProvider i18n={i18nObject}>
      sdfsdhfsdf{t('settings')}
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/app/page.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </I18nextProvider>
  );
}
