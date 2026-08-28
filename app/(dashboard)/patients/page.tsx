"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardHeader, CardTitle, CardAction, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { AppointmentDetails } from "@/data/dashboard-data";

export default function PatientsPage() {

  const router = useRouter();

  return (
    <div>
      <Button variant="link" onClick={() => router.push("/")} className=" hover:no-underline cursor-pointer mb-5">
        <ArrowLeft />
        <span>Back to Dashboard</span>
      </Button>
      <Card className="flex-[7]">
        <CardContent className="font-medium text-muted-foreground p-0">
          <Table>
            <TableHeader className="text-xs">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-muted-foreground py-[10px] px-[20px]">PATIENT</TableHead>
                <TableHead className="text-muted-foreground py-[10px] px-[20px]">AGE/GENDER</TableHead>
                <TableHead className="text-muted-foreground py-[10px] px-[20px]">VISITING DATE</TableHead>
                <TableHead className="text-muted-foreground py-[10px] px-[20px]">LAST VISIT</TableHead>
                <TableHead className="text-right text-muted-foreground py-[10px] px-[20px]">ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-sm">
              {
                AppointmentDetails.map((appointment) => (
                  <TableRow key={appointment.patientId}>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar>
                          <AvatarFallback color={appointment.avatarColor}>{appointment.patientInitials}</AvatarFallback>
                        </Avatar>
                        <span className="text-foreground py-[14px] px-[20px]">{appointment.patient}</span>
                      </div>
                    </TableCell>
                    <TableCell className=" py-[14px] px-[20px]">{appointment.age} - {appointment.gender}</TableCell>
                    <TableCell className=" py-[14px] px-[20px]">{appointment.visitingDate}</TableCell>
                    <TableCell className=" py-[14px] px-[20px]">{appointment.lastVisitDate ? appointment.lastVisitDate : "-"}</TableCell>
                    <TableCell className="text-right"><Button variant="link" onClick={() => router.push(`/patients/${appointment.patientId}`)}>View</Button></TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
