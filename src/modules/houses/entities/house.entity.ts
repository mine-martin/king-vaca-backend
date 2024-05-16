import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ChildEntity,
  OneToOne,
  JoinColumn,
} from 'typeorm';

class DetailsImages {
  @Column()
  Name: string;

  @Column()
  price: string;

  @Column()
  HouseImg1: string;

  @Column()
  HouseImg2: string;

  @Column()
  HouseImg3: string;

  @Column()
  HouseImg4: string;

  @Column()
  HouseImg5: string;

  @Column()
  HouseImg6: string;

  @Column()
  HouseImg7: string;
}

class OtherDetails {
  @Column()
  Longdescription: string;

  @Column()
  Location: string;

  @Column()
  BasicInfo: string;

  @Column()
  Amenities: string;

  @Column()
  NearBy: string;

  @Column()
  Reviews: string;

  @Column()
  Comments: string;
}

@Entity({ name: 'houses' })
export class HouseDetails {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  HouseDetailsListimage: string;

  @Column()
  HouseName: string;

  @Column()
  Shortdescription: string;

  @Column((type) => DetailsImages)
  detailsImages: DetailsImages;

  @Column((type) => OtherDetails)
  OtherDetails: OtherDetails;
}
