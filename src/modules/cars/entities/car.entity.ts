import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'car' })
export class CarProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
