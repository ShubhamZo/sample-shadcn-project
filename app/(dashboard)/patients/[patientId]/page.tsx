import { AppointmentDetails } from "@/data/dashboard-data";
import { notFound } from "next/navigation";
import PatientDetails from "./patientdetails";

type patientDetailsPropType = {
    patientId: string;
}

export default async function PatientsDetailsPage({ params }: { params: Promise<patientDetailsPropType> }) {

    const patientId = (await params).patientId;

    const patient = AppointmentDetails.find((appointment) => appointment.patientId === patientId)

    if(!patient) 
        return notFound();

    return <PatientDetails patient={patient} />
}