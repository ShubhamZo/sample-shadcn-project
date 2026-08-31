import InfoField from '@/components/ui/infoFiled';
import type { Patient } from './patientdetails';
import { Separator } from '@/components/ui/separator';

type PaitientInfoPropType = {
    patient: Patient
}

export function PatientInformation({ patient }: PaitientInfoPropType) {

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3.5'>
                <InfoField label='Full Name' value={patient.patient} />
                <InfoField label='Date of Birth' value='17-12-1990' />
                <InfoField label='Gender' value={patient.gender ? patient.gender : "-"} />
                <InfoField label='Blood Group' value={patient.bloodGroup} />
                <InfoField label='Phone' value="1234567890" />
                <InfoField label='Email' value='Patient@details.com' />
                <div className='md:col-span-2'>
                    <InfoField label='Address' value='D-602, Divya Heights, Above Vijay Sales, Rahatani, Pune - 411017' />
                </div>
            </div>
            <div className='mt-4'>
                <Separator />
            </div>
            <p className='mt-4 mb-3 text-sm font-semibold '>Emergency Contact: </p>
            <div className='grid grid-cols-2 grid-rows-2 gap-3.5'>
                <InfoField label='Name' value='Robert Jhonson' />
                <InfoField label='Relationship' value='Spouse' />
                <InfoField label='Phone' value='1234567890' />
            </div>
        </>
    )
}