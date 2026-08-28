export type AppointmentType = "Follow-up" | "Consultation" | "Check-up";
export type AppointmentStatusType = "confirmed" | "waiting" | "completed";
export type patientGenderType = "Male" | "Female";
export type lastVisitStatusType = "Stable" | "Follow_up";

export const AppointmentDetails: {
    patientId: string;
    patient: string;
    patientInitials: string;
    age: number;
    gender?: patientGenderType;
    visitingDate?: string;
    visitingTime?: string;
    visitingType: AppointmentType;
    Status: AppointmentStatusType;
    lastVisitDate?: string;
    lastVisitStatus?: lastVisitStatusType;
    avatarColor: "blue" | "green" | "purple" | "red";
    bloodGroup: string;
}[]
    = [
        {
            patientId: "PT-10245",
            patient: "Emily Johnson",
            patientInitials: "EJ",
            age: 32,
            gender: "Female",
            visitingDate: "2026-08-28",
            visitingTime: "09:30 AM",
            visitingType: "Follow-up",
            Status: "confirmed",
            lastVisitDate: "2026-08-26",
            lastVisitStatus: "Stable",
            avatarColor: "blue",
            bloodGroup: "AB+"
        },
        {
            patientId: "PT-10312",
            patient: "Michael Brown",
            patientInitials: "MB",
            age: 45, gender: "Male",
            visitingDate: "2026-08-28",
            visitingTime: "10:30 AM",
            visitingType: "Consultation",
            Status: "waiting",
            lastVisitDate: "2026-08-25",
            lastVisitStatus: "Follow_up",
            avatarColor: "green",
            bloodGroup: "B+"
        },
        {
            patientId: "PT-10198",
            patient: "Olivia Davis",
            patientInitials: "OD",
            age: 28, gender: "Male",
            visitingDate: "2026-08-28",
            visitingTime: "11:15 AM",
            visitingType: "Check-up",
            Status: "confirmed",
            lastVisitDate: "2026-08-24",
            lastVisitStatus: "Stable",
            avatarColor: "purple",
            bloodGroup: "AB-"
        },
        {
            patientId: "PT-10101",
            patient: "James Wilson",
            patientInitials: "JW",
            age: 35, gender: "Female",
            visitingDate: "2026-08-28",
            visitingTime: "11:45 AM",
            visitingType: "Follow-up",
            Status: "completed",
            avatarColor: "red",
            bloodGroup: "O+"
        },
        {
            patientId: "PT-10102",
            patient: "Sarla Joshi",
            patientInitials: "SJ",
            age: 35, gender: "Female",
            visitingDate: "2026-08-25",
            visitingTime: "11:45 AM",
            visitingType: "Check-up",
            Status: "confirmed",
            avatarColor: "green",
            bloodGroup: "A+"
        }
    ];