import { InstituteUniversity } from "./institute-university";

export interface Course {

  id: number;
  title: string;
  isApproved: boolean;
  certificateUrl: string;
  startDate: string;
  endDate: string;
  InstituteUniversity: InstituteUniversity;

}
