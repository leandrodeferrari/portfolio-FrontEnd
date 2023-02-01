import { Business } from './business';

export interface Work {

  id: number;
  name: string;
  startDate: string;
  endDate: string;
  isCurrentJob: boolean;
  description: string;
  seniorityName: string;
  jobExperienceTypeName: string;
  business: Business;

}
