'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface WishlistContextValue {
  savedIds: string[];
  isSaved: (id: string) => boolean;
  toggleSaved: (id: string) => void;
  clearSaved: () => void;
  hydrated: boolean;
}

const STORAGE_KEY = 'aurelia_estates_wishlist_v1';

const WishlistContext = createContext<WishlistContextValue>({
  savedIds: [],
  isSaved: () => false,
  toggleSaved: () => {},
  clearSaved: () => {},
  hydrated: false,
});

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setSavedIds(parsed.filter((item): item is string => typeof item === 'string'));
        }
      }
    } catch {
      // Ignore storage read errors
    } finally {
      setHydrated(true);
    }
  }, []);

  const persist = useCallback((next: string[]) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage write errors
    }
  }, []);

  const toggleSaved = useCallback(
    (id: string) => {
      setSavedIds((prev) => {
        const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const clearSaved = useCallback(() => {
    setSavedIds([]);
    persist([]);
  }, [persist]);

  const isSaved = useCallback((id: string) => savedIds.includes(id), [savedIds]);

  return (
    <WishlistContext.Provider
      value={{ savedIds, isSaved, toggleSaved, clearSaved, hydrated }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
