import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleScroll = (targetId: string, offset: number = 92) => {
  if (typeof window === "undefined") return;

  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const elementTop =
      targetElement.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementTop - offset,
      behavior: "smooth",
    });
  }
};

export function readTime(content: string) {
  const WORDS_PER_SECOND = 250 / 60;

  let images = 0;
  const regex = /\w+/;

  const words = content?.split(/\s+/).reduce((count, word) => {
    if (word.includes("<img")) {
      images += 1;
    }
    return count + (regex.test(word) ? 1 : 0);
  }, 0);

  const imageAdjustment = images * 4;
  let imageSecs = 0;
  let imageFactor = 12;

  for (let i = 0; i < images; i++) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
  }

  const totalSeconds = (words - imageAdjustment) / WORDS_PER_SECOND + imageSecs;
  const readingTimeMinutes = Math.floor(totalSeconds / 60);
  const readingTimeSeconds = Math.round(totalSeconds % 60);

  return {
    time: `${readingTimeMinutes}:${readingTimeSeconds < 10 ? "0" + readingTimeSeconds : readingTimeSeconds}`,
    minutes: readingTimeMinutes,
    seconds: Math.round(totalSeconds),
  };
}
