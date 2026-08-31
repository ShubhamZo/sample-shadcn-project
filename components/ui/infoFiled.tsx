type InforFieldProps = {
    label: string;
    value: string;
}

export default function InfoField({ label, value} : InforFieldProps) {
    return (
        <div className="flex flex-col mb-0.5">
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="text-sm">{value}</p>
        </div>
    )
}