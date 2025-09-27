// Step 2: Create an array of 3–5 employee objects

const employee = [
    { name: "John Smith", hourlyRate: 30, hoursWorked: 50},
    { name: "Karen Johnson", hourlyRate: 35, hoursWorked: 40},
    { name: "Josh Watson", hourlyRate: 42, hoursWorked: 45}
];

// Step 3: Write a function calculateBasePay(rate, hours)

function calculateBasePay(rate, hours) {
    let maxHours = 40;
    let otherHours;

    if (hours > maxHours) {
    otherHours = maxHours;
  } else {
    otherHours = hours;
  }
  return rate * otherHours;
};

// Step 4: Write calculateOvertimePay(rate, hours)

function calculateOvertimePay(rate, hours) {
    let maxHours = 40;
  let overtimeHours = 0;

  if (hours > maxHours) {
    overtimeHours = hours - maxHours;
  }

  return (rate * 1.5) * overtimeHours;
};

// Test each step so far in console.log to make sure it works
employee.forEach(individual => {
    const basePay = calculateBasePay(individual.hourlyRate, individual.hoursWorked);
    const overtimePay = calculateOvertimePay(individual.hourlyRate, individual.hoursWorked);
    const totalPay = basePay + overtimePay;

    console.log(`${individual.name}:`);
    console.log(`  Hourly Rate: $${individual.hourlyRate}`);
    console.log(`  Hours Worked: ${individual.hoursWorked}`);
    console.log(`  Base Pay (up to 40h): $${basePay.toFixed(2)}`);
    console.log(`  Overtime Pay: $${overtimePay.toFixed(2)}`);
    console.log(`  Total Pay: $${totalPay.toFixed(2)}`);
    console.log('---'); 
});

// Step 5: Write calculateTaxes(grossPay)

function calculateTaxes(grossPay) {
    let taxRate = 0.15;
    return grossPay * taxRate;
}

// Step 6: Write processPayroll(employee)

function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        taxes: taxes,
        netPay: netPay
    };
}

// Step 7: Loop through your employee array and log the payroll object for each employee.

employee.forEach(individual => {
    const payroll = processPayroll(individual);
    console.log(payroll);
});

