"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, Ellipsis } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

import type { patientGenderType, AppointmentStatusType, AppointmentType, lastVisitStatusType } from "@/data/dashboard-data";
import { PatientInformation } from "./patient-info";
import { PatientVitals } from "./patient-vitals";
export type Patient = {
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
}

type PatientDetailsPropType = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsPropType) {

    const router = useRouter();
    return (
        <>
            <Button variant="link" onClick={() => router.push("/patients")} className=" hover:no-underline cursor-pointer mb-5">
                <ArrowLeft />
                <span>Back to Patients</span>
            </Button>
            <Card className="p-6 mb-5">
                <CardContent className="flex justify-between">
                    <div className="flex">
                        <div>
                            <Avatar size="lg">
                                <AvatarFallback color={patient.avatarColor} className="text-xl">{patient.patientInitials}</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex flex-col">
                            <CardTitle>
                                <span className="text-foreground py-[14px] px-[20px] font-semibold text-xl">{patient.patient}</span>
                            </CardTitle>
                            <CardDescription className="flex ml-5 mt-1 text-xs gap-3 align-middle">
                                <span>{patient.patientId}</span>
                                <span>{patient.gender}</span>
                                <span>{patient.age} years</span>
                                <span>Blood Group: {patient.bloodGroup}</span>
                            </CardDescription>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 md:flex-row">
                        <Badge variant={patient.lastVisitStatus === "Stable" ? "stable" : "follow_up"}>
                            {patient.lastVisitStatus}
                        </Badge>
                        <Button>Edit Patient</Button>
                        <Button variant="outline" size="icon" aria-label="Submit">
                            <Ellipsis />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Tabs defaultValue="overview">
                <TabsList variant="line">
                    <TabsTrigger className=" px-[20px]" value="overview">Overview</TabsTrigger>
                    <TabsTrigger className=" px-[20px]" value="medicalHistory">Medical History</TabsTrigger>
                    <TabsTrigger className=" px-[20px]" value="appointments">Appointments</TabsTrigger>
                    <TabsTrigger className=" px-[20px]" value="documents">Documents</TabsTrigger>
                </TabsList>
                <Separator />
                <div className="flex mt-5 mb-5 gap-5 items-stretch">
                    <div className="flex-1">
                        <TabsContent value="overview" className="h-full">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Patient Details</CardTitle>
                                </CardHeader>
                                <CardContent >
                                    <PatientInformation patient={patient} />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="medicalHistory">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Medications</CardTitle>
                                    <CardDescription>
                                        All the medication list
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Never miss a medicine
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="appointments">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Visiting Informations</CardTitle>
                                    <CardDescription>
                                        All the visiting dates
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Never miss a appoinement
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="documents">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Related Documents</CardTitle>
                                    <CardDescription>
                                        All the related documents
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    Never missplace a Document!
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </div>
                    <div className="flex-1">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle> Current Vitals </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <PatientVitals />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Tabs>

        </>
    )
}