type Scientist = {
  id: number;
  name: string;
  imageUrl: string;
  profession: string;
  awards: {
    count: number;
    list: string;
  };
  discovery: string;
};

type ListItemProps = {
  label: string;
  value: string;
};

function ProfileListItem({ label, value }: ListItemProps) {
  return (
      <li>
        <b>{label}: </b>
        {value}
      </li>
  );
}

function Profile({ scientist }: { scientist: Scientist }) {
  return (
      <section className="profile">
        <h2>{scientist.name}</h2>
        <img
            className="avatar"
            src={scientist.imageUrl}
            alt={scientist.name}
            width={70}
            height={70}
        />
        <ul>
          <ProfileListItem key={`profession`} label="Profession" value={scientist.profession} />
          <ProfileListItem key={`awards`} label={`Awards (${scientist.awards.count})`} value={scientist.awards.list} />
          <ProfileListItem key={`discovery`} label="Discovered" value={scientist.discovery} />
        </ul>
      </section>
  );
}

export default function Gallery() {
  const scientists: Scientist[] = [
    {
      id: 0,
      name: "Maria Skłodowska-Curie",
      imageUrl: "https://i.imgur.com/szV5sdGs.jpg",
      profession: "physicist and chemist",
      awards: {
        count: 4,
        list: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
      },
      discovery: "polonium (element)",
    },
    {
      id: 1,
      name: "Katsuko Saruhashi",
      imageUrl: "https://i.imgur.com/YfeOqp2s.jpg",
      profession: "geochemist",
      awards: {
        count: 2,
        list: "Miyake Prize for geochemistry, Tanaka Prize",
      },
      discovery: "a method for measuring carbon dioxide in seawater",
    },
  ];

  return (
      <div>
        <h1>Notable Scientists</h1>
        {scientists.map((scientist) => (
            <Profile key={scientist.id} scientist={scientist} />
        ))}
      </div>
  );
}
