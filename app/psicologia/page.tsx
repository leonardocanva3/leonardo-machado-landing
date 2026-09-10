import { permanentRedirect } from "next/navigation";

const psicologiaDestination =
  "https://leonardocanva3.hotmart.host/50-prompts-para-psicologos-33c782e1-e776-40d1-87a9-00162df197af";

export default function PsicologiaPage() {
  permanentRedirect(psicologiaDestination);
}
