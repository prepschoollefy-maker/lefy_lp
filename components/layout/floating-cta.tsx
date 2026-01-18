'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function FloatingCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-4 left-0 right-0 z-40 mx-auto flex w-[calc(100%-2rem)] max-w-md items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 text-base font-bold text-navy-900 shadow-2xl transition-all hover:bg-orange-600 hover:shadow-orange-500/50 md:bottom-6"
    >
      <MessageCircle className="h-4 w-4" />
      <span>学習カウンセリングに申し込む</span>
    </Link>
  );
}
