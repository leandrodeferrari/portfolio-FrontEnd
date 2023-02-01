import { InstituteUniversity } from "./institute-university";

export interface Career {

  id: number;
  name: string;
  startDate: string;
  endDate: string;
  isFinished: boolean;
  approvedSubjects: number;
  totalSubjects: number;
  studyPlanUrl: string;
  description: string;
  instituteUniversity: InstituteUniversity;
  careerTypeName: string;

}
