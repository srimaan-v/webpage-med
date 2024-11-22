import { useSearchParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import AppointmentForm from '../components/AppointmentForm';
import { doctors } from '../data/doctors';

export default function Appointment() {
  const [searchParams] = useSearchParams();
  const selectedDoctorId = searchParams.get('doctor') || undefined;

  return (
    <Layout title="Book Appointment">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Book an Appointment</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <AppointmentForm doctors={doctors} selectedDoctorId={selectedDoctorId} />
        </div>
      </div>
    </Layout>
  );
}