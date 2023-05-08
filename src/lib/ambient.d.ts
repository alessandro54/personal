type Experience = {
  _id: string;
  name: string;
  company: Company;
  achievements: string[];
  technologies: Technology[];
  isRemote: boolean;
  startDate: string;
  endDate: string;
}

type Company = {
  name: string;
  description: string;
  location: TLocation;
  logo: string;
}

type TLocation = {
  city: string;
  country: string;
  emoji: string;
}

type Technology = {
  name: string;
  description: string;
  logo: string;
}
