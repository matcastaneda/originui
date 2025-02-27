import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="border-input bg-background focus-within:border-ring/40 ring-ring/8 dark:ring-ring/12 has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/25 relative rounded-lg border shadow-xs transition-shadow focus-within:ring-[3px] focus-within:outline-hidden has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)_*]:pointer-events-none">
      <label htmlFor={id} className="text-foreground block px-3 pt-2 text-xs font-medium">
        Select with inset label
      </label>
      <Select>
        <SelectTrigger
          id={id}
          className="border-none bg-transparent shadow-none focus:ring-0 focus:ring-offset-0"
        >
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">React</SelectItem>
          <SelectItem value="2">Next.js</SelectItem>
          <SelectItem value="3">Astro</SelectItem>
          <SelectItem value="4">Gatsby</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
