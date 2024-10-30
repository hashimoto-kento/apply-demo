import { getImageUrl } from './utils'

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={200}
        person='YfeOqp2'
      />
      <Avatar
        size={100}
        person='OKS67lh'
      />
      <Avatar
        size={50}
        person='1bX5QH6'
      />
    </Card>
  );
}

function Avatar({ person, size }: { person: string, size: number }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person}
      width={size}
      height={size}
    />
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}