import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cars' })
export class CarProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column('bytea')
  photo1: Uint8Array;

  @Column('bytea')
  photo2: Uint8Array;

  @Column('bytea')
  photo3: Uint8Array;

  @Column()
  rating: string;

  @Column()
  overview: string;

  @Column({ type: 'jsonb', nullable: true })
  features: {
    type: string;
    doors: string;
    passengers: string;
    luggage: string;
    drive: string;
  };

  @Column({ type: 'jsonb', nullable: true })
  location: {
    location: string;
  };

  @Column({ type: 'jsonb', nullable: true })
  reviews: {
    stars: string;
  };

  @Column({ type: 'jsonb', nullable: true })
  comments: {
    name: string;
    updateTime: string;
    rating: string;
    photo: string;
    dateLocation: string;
    comment: string;
  };
}
