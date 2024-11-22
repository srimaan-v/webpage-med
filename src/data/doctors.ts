export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  education: string;
  experience: string;
  description: string;
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "/doctors/doctor-1.jpg",
    education: "MD - Harvard Medical School",
    experience: "15 years",
    description: "Dr. Johnson specializes in cardiovascular health and preventive cardiology."
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Pediatrics",
    image: "/doctors/doctor-2.jpg",
    education: "MD - Stanford University",
    experience: "12 years",
    description: "Dr. Chen is dedicated to providing comprehensive care for children of all ages."
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatology",
    image: "/doctors/doctor-3.jpg",
    education: "MD - Yale School of Medicine",
    experience: "10 years",
    description: "Dr. Rodriguez specializes in medical and cosmetic dermatology."
  }
];