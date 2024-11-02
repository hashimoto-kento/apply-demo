'use client';

import Index from '../components/Index';
import { LikeButton } from '../components/LikeButton';
import { getImageUrl } from './utils'

export default function Profile() {
  return (
    <Card>
      <Index initialImageUrl="example-url" />
      <LikeButton />
      <Avatar
        size={200}
        person={{name: 'whotao', imageId:'YfeOqp2'}}
      />
      <LikeButton />
      <Avatar
        size={100}
        person='OKS67lh'
      />
      <LikeButton />
      <Avatar
        size={50}
        person='1bX5QH6'
      />
      <LikeButton />
    </Card>
  );
}

type Person = { name: string, imageId: string } | string;

function Avatar({ person, size }: { person: Person, size: number }) {
  // 画像のURLを取得するために、personがオブジェクトか文字列かを確認します
  const imageUrl = typeof person === 'string' ? getImageUrl(person) : getImageUrl(person.imageId);

  return (
    <img
      className="avatar"
      src={imageUrl}
      alt={typeof person === 'string' ? person : person.name}
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