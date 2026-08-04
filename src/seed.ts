import prisma from "./lib/prisma.js";

async function main() {
  const doctor1 = await prisma.doctor.create({
    data: {
      name: "Dr. Smith",
      specialty: "Cardiology",
      email: "smith@hospital.com",
    },
  });

  const doctor2 = await prisma.doctor.create({
    data: {
      name: "Dr. Johnson",
      specialty: "Neurology",
      email: "johnson@hospital.com",
    },
  });

  const patient1 = await prisma.patient.create({
    data: {
      name: "Bharath",
      email: "bharath@gmail.com",
      phone: "9876543210",
      dateOfBirth: new Date("2004-01-01"),
    },
  });

  const patient2 = await prisma.patient.create({
    data: {
      name: "Rahul",
      email: "rahul@gmail.com",
      phone: "9999999999",
      dateOfBirth: new Date("2003-05-10"),
    },
  });

  await prisma.appointment.create({
    data: {
      patientId: patient1.id,
      doctorId: doctor1.id,
      appointmentDate: new Date(),
      status: "scheduled",
    },
  });

  await prisma.appointment.create({
    data: {
      patientId: patient2.id,
      doctorId: doctor2.id,
      appointmentDate: new Date(),
      status: "scheduled",
    },
  });

  console.log("Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });