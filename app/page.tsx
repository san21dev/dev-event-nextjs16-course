import EventCard from '@/components/EventCard';
import ExploreBtn from '@/components/ExploreBtn'
import { events } from '@/lib/constants';

const page = () => {
  return (
    <section>
      <h1 className='text-center'>The hub for every dev <br />event you can't miss </h1>
      <p className='text-center mt-5'>Hackathons, Meetups, and Conference, All in one </p>
      <ExploreBtn/>
      <div className='mt-7 space-y-7'>
        <h3>Feature Event</h3>

        <ul className='events'>
          {events.map((event)=>(
            <li key={event.title}>
            <EventCard {...event}/>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default page