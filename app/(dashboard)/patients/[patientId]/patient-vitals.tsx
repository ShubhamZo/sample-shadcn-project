import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PatientVitals() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <VitalsCard title="Blood Pressure" value="120/80" parameter="mmHg" stats="Normal" />
            <VitalsCard title="Heart Rate" value="72" parameter="bpm" stats="Normal" />
            <VitalsCard title="Temperature" value="98.4" parameter="&deg;F" stats="Normal" />
            <VitalsCard title="SpO2" value="98%" parameter="Oxygen" stats="Normal" />
        </div>
    )
}


function VitalsCard({
    title,
    value,
    parameter,
    stats,
}: {
    title: string,
    value: string,
    parameter: string,
    stats: string
}) {
    return (
        <Card className="bg-[#E5F5EA] p-4">
            <CardContent className="p-0">
                <div className="mb-1.5 flex flex-col">
                    <span className="text-xs text-[#3F8056] ">
                        {title}
                    </span>
                    <span className="text-[22px] text-[#253333] font-semibold">
                        {value}
                    </span>
                    <span className="mt-0.5 text-xs text-[#687777]">
                        {parameter}
                    </span>
                    <Badge variant="vitals">
                        {stats}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    )
}