import { Business } from "./business";

export interface Project {

  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
  evidenceUrl: string;
  projectTypeName: string;
  business: Business;

}
