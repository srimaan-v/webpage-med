import { useMemo } from 'react';
import Layout from '../layouts/Layout';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';

export default function Doctors() {
  const specialties = useMemo(() => 
    [...new Set(doctors.map(doctor => doctor.specialty))],
    []
  );

  return (
    <Layout title="Our Doctors">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Medical Specialists</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Browse by Specialty</h2>
          <div className="flex flex-wrap gap-4">
            {specialties.map(specialty => (
              <a
                key={specialty}
                href={`#${specialty.toLowerCase()}`}
                className="px-4 py-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                {specialty}
              </a>
            ))}
          </div>
        </div>

        {specialties.map(specialty => (
          <div key={specialty} id={specialty.toLowerCase()} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{specialty}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors
                .filter(doctor => doctor.specialty === specialty)
                .map(doctor => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}