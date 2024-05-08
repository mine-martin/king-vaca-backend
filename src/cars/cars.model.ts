export interface CarDetails {
  name: string;
  price: string;
  photo1: string;
  photo2: string;
  photo3: string;
  rating: string;
  overview: string;
  features: {
    type: string;
    doors: string;
    passengers: string;
    luggage: string;
    drive: string;
  };
  location: {
    location: string;
  };
  reviews: {
    stars: string;
  };
  comments: {
    name: string;
    updateTime: string;
    rating: string;
    photo: string;
    dateLocation: string;
    comment: string;
  };
}

export class Car {
  constructor(
    public id: string,
    public photo: string,
    public title: string,
    public type: string,
    public doors: string,
    public passengers: string,
    public drive: string,
    public details: CarDetails,
  ) {}
}
