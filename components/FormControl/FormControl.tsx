"use client";
import { Input } from "@/components/ui/input";
import { FormControlProps } from "./FormControl.types";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function FormControl(props: FormControlProps) {
    const { item } = props;
    const { label, icon: Icon, type, placeholder } = item;
    const [ inputType, setInputType ] = useState(type)

    const togglePasswordVisibility = () => {
        setInputType((prev) => ( prev === 'password' ? 'text' : 'password' ))
    }

    
    return (
        <div className="flex flex-col gap-4">
            <label htmlFor={label} className="text-gray-100 text-md tracking-wide">{label}</label>
            <div className="relative">
            <Input
                id={label}
                type={inputType}
                placeholder={placeholder}
                className="outline-none pl-7 py-2 pr-7 text-gray-100 bg-secondary-900 border-transparent focus:border-transparent focus:ring-0"
            />
                <Icon className="h-5 w-5 absolute top-2 left-1 text-primary" strokeWidth={1} />
                {type === 'password' && (
                    inputType === "password" ? (
                        <Eye className="h-5 w-5 absolute top-2 right-1 text-primary cursor-pointer" strokeWidth={1} onClick={togglePasswordVisibility} />
                    ) : (
                        <EyeOff className="h-5 w-5 absolute top-2 right-1 text-primary cursor-pointer" strokeWidth={1} onClick={togglePasswordVisibility} />
                    )
                )}
            </div>
        </div>
    );
}
