"use client";
import FormControl from "@/components/FormControl/FormControl";
import { dataLogin } from "./SignIn.data";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-4">
      {
        dataLogin.map((item) => (
          <FormControl key={item.label} item={item}/>
        ))
      }
    </div>
  )
}
