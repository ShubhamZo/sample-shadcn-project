import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, CalendarCheck, CheckSquare, TriangleAlert, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback } from "@base-ui/react";
import { Avatar, AvatarFallback, AvatarBadge } from "@/components/ui/avatar";

type AppointmentType = "Follow-up" | "Consultation" | "Check-up"
type AppointmentStatusType = "confirmed" | "waiting" | "completed";
type patientGenderType = "Male" | "Female";
type lastVisitStatusType = "Stable" | "Follow-up";

export default function DashboardPage() {

  const AppointmentDetails: {
    patientId: string;
    patient: string;
    patientInitials: string;
    age: number;
    gender?: patientGenderType;
    visitingTime?: string;
    visitingType: AppointmentType;
    Status: AppointmentStatusType;
    lastVisitDate?: string;
    lastVisitStatus?: lastVisitStatusType;
  }[]
    = [
      { patientId: "PT-10245", patient: "Emily Johnson", patientInitials: "EJ", age: 32, gender: "Female", visitingTime: "09:30 AM", visitingType: "Follow-up", Status: "confirmed", lastVisitDate: "Aug 18", lastVisitStatus: "Stable" },
      { patientId: "PT-10312", patient: "Michael Brown", patientInitials: "MB", age: 45, gender: "Male", visitingTime: "10:30 AM", visitingType: "Consultation", Status: "waiting", lastVisitDate: "Aug 31", lastVisitStatus: "Follow-up" },
      { patientId: "PT-10198", patient: "Olivia Davis", patientInitials: "OD", age: 28, gender: "Male", visitingTime: "11:15 AM", visitingType: "Check-up", Status: "confirmed", lastVisitDate: "Dec 17", lastVisitStatus: "Stable" },
      { patientId: "PT-10101", patient: "James Wilson", patientInitials: "JW", age: 35, gender: "Female", visitingTime: "11:45 AM", visitingType: "Follow-up", Status: "completed" },
    ];



  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Good morning, Dr. Sarah</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Here&apos;s your clinical overview for today.
          </p>
        </div>
        <Button className="gap-1.5">
          <Plus className="h-4 w-4" />
          New Patient
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="mb-6 grid grid-cols-4 gap-4">
        <StatsCard
          title="Total Patients"
          value="1,248"
          subtitle="+12 this month"
          icon={<Users className="h-[18px] w-[18px] text-primary" />}
          iconBg="bg-accent"
          subtitleColor="text-primary"
        />
        <StatsCard
          title="Today's Appointments"
          value="24"
          subtitle="8 remaining"
          icon={<CalendarCheck className="h-[18px] w-[18px] text-secondary-foreground" />}
          iconBg="bg-secondary"
          subtitleColor="text-secondary-foreground"
        />
        <StatsCard
          title="Follow-ups"
          value="12"
          subtitle="5 due today"
          icon={<CheckSquare className="h-[18px] w-[18px] text-[#9A83C4]" />}
          iconBg="bg-[#F0EAF8]"
          subtitleColor="text-[#9A83C4]"
        />
        <StatsCard
          title="Critical Alerts"
          value="3"
          subtitle="Requires attention"
          icon={<TriangleAlert className="h-[18px] w-[18px] text-destructive" />}
          iconBg="bg-[#FDE8E7]"
          subtitleColor="text-destructive"
        />
      </div>

      {/* TODO: Interns add the following sections:
          - Today's Appointments table  (shadcn Table + Badge + Avatar)
          - Clinical Alerts card        (Card with pastel backgrounds)
          - Recent Patients table       (shadcn Table + Badge)
      */}

      <div className="flex flex-col">
        {/* ------------------------Today's Appointmetn Table ------------------------------------------------------*/}
        <div className="flex flex-row gap-5">
          <Card className="flex-[7]">
            <CardHeader className="content-center border-b">
              <CardTitle>Today's Appointment</CardTitle>
              <CardAction><Button variant="link">View All</Button></CardAction>
            </CardHeader>
            <CardContent className="font-medium text-muted-foreground p-0">
              <Table>
                <TableHeader className="text-xs">
                  <TableRow>
                    <TableHead className="text-muted-foreground py-[10px] px-[20px]">PATIENT</TableHead>
                    <TableHead className="text-muted-foreground py-[10px] px-[20px]">TIME</TableHead>
                    <TableHead className="text-muted-foreground py-[10px] px-[20px]">TYPE</TableHead>
                    <TableHead className="text-muted-foreground py-[10px] px-[20px]">STATUS</TableHead>
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
                              <AvatarFallback>{appointment.patientInitials}</AvatarFallback>
                            </Avatar>
                            <span className="text-foreground py-[14px] px-[20px]">{appointment.patient}</span>
                          </div>
                        </TableCell>
                        <TableCell className=" py-[14px] px-[20px]">{appointment.visitingTime}</TableCell>
                        <TableCell className=" py-[14px] px-[20px]">{appointment.visitingType}</TableCell>
                        <TableCell className=" py-[14px] px-[20px]"><StatusBadgeType status={appointment.Status} /></TableCell>
                        <TableCell className="text-right"><Button variant="link">View</Button></TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* --------------------------Clinical ALerts----------------------------------------------------------- */}
          <Card className="flex-[3]">
            <CardHeader>
              <CardTitle>Clinical Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <Card className="p-3.5 bg-[#FDE8E7]">
                  <div>
                    <CardHeader className=" p-0">
                      <CardTitle className="flex items-center gap-2 mb-1.5">
                        <Avatar>
                          <AvatarFallback className="text-[#D97973] bg-white">JS</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-semibold text-[#A84F4A]">Jhon Smith</span>
                      </CardTitle>
                    </CardHeader>
                    <CardDescription className="text-[#A84F4A] text-sm">Blood Pressure readings require review</CardDescription>
                    <div className="mt-1.5 text-xs text-destructive">10 minutes remaining</div>
                  </div>
                </Card>
                
                <Card className="p-3.5 bg-[#FFF2D9]">
                  <div>
                    <CardHeader className=" p-0">
                      <CardTitle className="flex items-center gap-2 mb-1.5">
                        <Avatar>
                          <AvatarFallback className="text-[#E7B968] bg-white">MT</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-semibold text-[#8A6A2F]">Maria Thomas</span>
                      </CardTitle>
                    </CardHeader>
                    <CardDescription className="text-[#8A6A2F] text-sm">Follow-up appointment overdue</CardDescription>
                    <div className="mt-1.5 text-xs text-[#E7B968]">2 hours ago</div>
                  </div>
                </Card>

                <Card className="p-3.5 bg-[#E8F6F3]">
                  <div>
                    <CardHeader className=" p-0">
                      <CardTitle className="flex items-center gap-2 mb-1.5">
                        <Avatar>
                          <AvatarFallback className="text-[#5FB8A8] bg-white">RL</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-semibold text-[#3F8056]">Robert Lee</span>
                      </CardTitle>
                    </CardHeader>
                    <CardDescription className="text-[#687777] text-sm">Lab results ready for review</CardDescription>
                    <div className="mt-1.5 text-xs text-[#5FB8A8]">3 hours ago</div>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* --------------------------Recent Patients -------------------------------------------------------------*/}
        <div className="flex-[1] mt-6">
          <Card>
            <CardHeader className="align-middle border-b">
              <CardTitle>Recent Patients</CardTitle>
              <CardAction><Button variant="link">View All</Button></CardAction>
            </CardHeader>
            <CardContent className="font-medium text-muted-foreground p-0">
              <Table>
                <TableHeader className="text-xs pt-0">
                  <TableRow>
                    <TableHead className="text-muted-foreground py-[10px] px-[20px]">PATIENT</TableHead>
                    <TableHead className="text-muted-foreground py-[10px] px-[20px]">ID</TableHead>
                    <TableHead className="text-muted-foreground py-[10px] px-[20px]">AGE/GENDER</TableHead>
                    <TableHead className="text-muted-foreground py-[10px] px-[20px]">LAST VISIT</TableHead>
                    <TableHead className="text-muted-foreground py-[10px] px-[20px]">STATUS</TableHead>
                    <TableHead className="text-right text-muted-foreground py-[10px] px-[20px]">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-sm">
                  {
                    AppointmentDetails.filter((appointment) =>
                      appointment.lastVisitDate != null &&
                      appointment.lastVisitStatus != null)
                      .map((appointment) => (
                        <TableRow key={appointment.patientId}>
                          <TableCell>
                            <div className="flex items-center">
                              <Avatar>
                                <AvatarFallback>{appointment.patientInitials}</AvatarFallback>
                              </Avatar>
                              <span className="text-foreground py-[14px] px-[20px]">{appointment.patient}</span>
                            </div>
                          </TableCell>
                          <TableCell className=" py-[14px] px-[20px]">{appointment.patientId}</TableCell>
                          <TableCell className=" py-[14px] px-[20px]">{appointment.age} - {appointment.gender}</TableCell>
                          <TableCell className=" py-[14px] px-[20px]">{appointment.lastVisitDate}</TableCell>
                          <TableCell className=" py-[14px] px-[20px]"><LastVisitedStatusBadgeType lastVisitedStatus={appointment.lastVisitStatus!} /></TableCell>
                          <TableCell className="text-right"><Button variant="link">View</Button></TableCell>
                        </TableRow>
                      ))
                  }
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ============================================
// REUSABLE COMPONENT — StatsCard
// ============================================
// Study this pattern, then build the remaining sections.

function StatsCard({
  title,
  value,
  subtitle,
  icon,
  iconBg,
  subtitleColor,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  subtitleColor: string;
}) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[13px] font-medium text-muted-foreground">
            {title}
          </span>
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}
          >
            {icon}
          </div>
        </div>
        <div className="text-[28px] font-semibold">{value}</div>
        <div className={`mt-1 text-xs ${subtitleColor}`}>{subtitle}</div>
      </CardContent>
    </Card>
  );
}


{/* Function to return the badge type based on the status - Confirnmed, Waiting and completed*/ }

function StatusBadgeType({ status }: { status: AppointmentStatusType }) {
  if (status === "confirmed")
    return (
      <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
        {status}
      </Badge>
    )

  if (status === "waiting")
    return (
      <Badge className=" bg-[#FFF2D9] text-[#8A6A2F] dark:bg-red-950 dark:text-red-300">
        {status}
      </Badge>
    )

  if (status === "completed")
    return (
      <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
        {status}
      </Badge>
    )
}


{/* Function to return the badge based on the Last Visit Status - Stable and Follow-up */ }
function LastVisitedStatusBadgeType({ lastVisitedStatus }: { lastVisitedStatus: lastVisitStatusType }) {

  if (lastVisitedStatus === "Stable")
    return (
      <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
        {lastVisitedStatus}
      </Badge>
    )

  if (lastVisitedStatus === "Follow-up")
    return (
      <Badge className="bg-[#FFF2D9] text-[#8A6A2F] dark:bg-red-950 dark:text-red-300">
        {lastVisitedStatus}
      </Badge>
    )
}
