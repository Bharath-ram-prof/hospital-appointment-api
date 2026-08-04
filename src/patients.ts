import prisma from "./lib/prisma.js";

export async function createPatient(
  name: string,
  email: string,
  phone: string,
  dateOfBirth: Date
) {
  return prisma.patient.create({
    data: {
      name,
      email,
      phone,
      dateOfBirth,
    },
  });
}

export async function getPatient(id: number) {
  return prisma.patient.findUnique({
    where: { id },
  });
}

export async function searchPatients(name: string) {
  return prisma.patient.findMany({
    where: {
      name: {
        contains: name,
        mode: "insensitive",
      },
    },
  });
}

export async function updatePatientPhone(
  id: number,
  phone: string
) {
  return prisma.patient.update({
    where: { id },
    data: { phone },
  });
}

export async function deletePatient(id: number) {
  return prisma.patient.delete({
    where: { id },
  });
}