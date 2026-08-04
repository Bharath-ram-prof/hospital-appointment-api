import prisma from "./lib/prisma.js";

export async function createDoctor(
  name: string,
  specialty: string,
  email: string
) {
  return prisma.doctor.create({
    data: {
      name,
      specialty,
      email,
    },
  });
}

export async function getDoctor(id: number) {
  return prisma.doctor.findUnique({
    where: { id },
  });
}
