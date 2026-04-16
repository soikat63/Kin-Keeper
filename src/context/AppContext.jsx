// ============================================================
// AppContext.jsx — Global State via Context API

import { createContext, useContext, useState, useEffect } from "react";
import friendsData from "../data/friends.json";

const AppContext = createContext(null);

export const AppProvider =({ children }) => {
  // --- Friends state: loaded async to show loading spinner ---
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Timeline state: pre-seeded with sample interactions ---
  const [timeline, setTimeline] = useState([
    {
      id: 1,
      type: "Meetup",
      friendId: 2,
      friendName: "Sarah Ahmed",
      date: "2026-03-29T10:00:00Z",
    },
    {
      id: 2,
      type: "Text",
      friendId: 4,
      friendName: "Priya Sharma",
      date: "2026-03-28T14:30:00Z",
    },
    {
      id: 3,
      type: "Meetup",
      friendId: 3,
      friendName: "Mike Torres",
      date: "2026-03-26T09:00:00Z",
    },
    {
      id: 4,
      type: "Video",
      friendId: 1,
      friendName: "Alex Johnson",
      date: "2026-03-23T18:00:00Z",
    },
    {
      id: 5,
      type: "Meetup",
      friendId: 2,
      friendName: "Sarah Ahmed",
      date: "2026-03-21T11:00:00Z",
    },
    {
      id: 6,
      type: "Call",
      friendId: 5,
      friendName: "James Lee",
      date: "2026-03-19T16:00:00Z",
    },
    {
      id: 7,
      type: "Meetup",
      friendId: 4,
      friendName: "Priya Sharma",
      date: "2026-03-17T13:00:00Z",
    },
    {
      id: 8,
      type: "Text",
      friendId: 6,
      friendName: "Nadia Rahman",
      date: "2026-03-13T08:30:00Z",
    },
    {
      id: 9,
      type: "Call",
      friendId: 3,
      friendName: "Mike Torres",
      date: "2026-03-11T15:00:00Z",
    },
    {
      id: 10,
      type: "Video",
      friendId: 7,
      friendName: "Carlos Mendez",
      date: "2026-03-06T20:00:00Z",
    },
  ]);

  // --- Simulate async data fetch (shows loading spinner per Req 10.2) ---
  useEffect(() => {
    const t = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  // --- Add new timeline entry when check-in button is clicked ---
  const addTimelineEntry = (type, friendId, friendName) => {
    setTimeline((prev) => [
      {
        id: Date.now(),
        type,
        friendId,
        friendName,
        date: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  return (
    <AppContext.Provider
      value={{ friends, loading, timeline, addTimelineEntry }}
    >
      {children}
    </AppContext.Provider>
  );
}

// --- Custom hook so any component can easily consume context ---
export function useApp() {
  return useContext(AppContext);
}
