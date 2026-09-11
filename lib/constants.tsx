export type EventItem = {
    image:string;
    title:string;
    slug : string;
    location: string;
    date : string;
    time : string;
};
export const events:EventItem[]=[
    {
        image: "/images/event1.png",
        title: "React Summit US 2025",
        slug: "react-summit-us-2025",
        location: "San Francisco, CA, USA",
        date: "2025-11-07",
        time: "09:00 AM"
        },
        {
        image: "/images/event2.png",
        title: "Next.js Conf 2025",
        slug: "nextjs-conf-2025",
        location: "New York, NY, USA",
        date: "2025-11-15",
        time: "10:00 AM"
        },
        {
        image: "/images/event3.png",
        title: "JavaScript World 2025",
        slug: "javascript-world-2025",
        location: "Austin, TX, USA",
        date: "2025-12-03",
        time: "08:30 AM"
        },
        {
        image: "/images/event4.png",
        title: "TypeScript Summit 2025",
        slug: "typescript-summit-2025",
        location: "Seattle, WA, USA",
        date: "2025-12-12",
        time: "09:30 AM"
        },
        {
        image: "/images/event5.png",
        title: "Frontend Masters Meetup",
        slug: "frontend-masters-meetup",
        location: "Los Angeles, CA, USA",
        date: "2026-01-18",
        time: "01:00 PM"
        },
        {
        image: "/images/event6.png",
        title: "AI & Web Development Expo",
        slug: "ai-web-development-expo",
        location: "Boston, MA, USA",
        date: "2026-02-05",
        time: "10:30 AM"
        },
]