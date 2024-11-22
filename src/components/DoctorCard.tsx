import type { Doctor } from '../data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
        <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
        <p className="text-gray-600 mb-4">{doctor.description}</p>
        <div className="text-sm text-gray-500">
          <p>Education: {doctor.education}</p>
          <p>Experience: {doctor.experience}</p>
        </div>
        <a
          href={`/appointment?doctor=${doctor.id}`}
          className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
}