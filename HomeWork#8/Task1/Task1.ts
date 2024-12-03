import { Employee } from "./Employee";
import { PremiumData } from "./PremiumData";

function main(){
  
  const payPerHour = 32;
  const worworkingDays = 14;
  let experienceСoefficients = [1, 1.1, 1.2, 1.3, 1.5];
  let employee = new Employee("Alex Brown", "doctor", 100);
  let premiumData = new PremiumData(true, 1000);

  const salaryInfo = getSalaryInfo(
    employee,
    premiumData,
    payPerHour,
    worworkingDays,
    experienceСoefficients[2]
  );
  console.log(salaryInfo);
}

function getSalaryInfo(
  employeeData: Employee,
  premiumData: PremiumData,
  payPerHour: number,
  worworkingDays: number,
  experienceСoefficients: number
): string {
  let salary;

  if (premiumData.isPremium) {
    salary =
      employeeData.worworkingHoursPerDay *
        payPerHour *
        worworkingDays *
        experienceСoefficients +
      premiumData.premium;
  } else {
    salary =
      employeeData.worworkingHoursPerDay *
      payPerHour *
      worworkingDays *
      experienceСoefficients;
  }

  return `${employeeData.profession} ${employeeData.name} has a salary of ${salary}$ this month`;
}

main();

