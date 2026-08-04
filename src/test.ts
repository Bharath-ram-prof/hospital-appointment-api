import {
  createPatient,
  getPatient,
  searchPatients,
  updatePatientPhone,
} from "./patients.js";

import {
  createDoctor,
  getDoctor,
} from "./doctors.js";

import {
  bookAppointment,
  getAppointmentFull,
  setAppointmentStatus,
} from "./appointments.js";

async function main() {
  const patient = await createPatient(
    "Test User",
    "test@gmail.com",
    "1234567890",
    new Date("2004-01-01")
  );

  console.log("Patient:", patient);

  console.log(
    "Get Patient:",
    await getPatient(patient.id)
  );

  console.log(
    "Search:",
    await searchPatients("Test")
  );

  console.log(
    "Update:",
    await updatePatientPhone(
      patient.id,
      "9999999999"
    )
  );

  const doctor = await createDoctor(
    "Dr. Kumar",
    "Dermatology",
    "kumar@hospital.com"
  );

  console.log(
    "Doctor:",
    await getDoctor(doctor.id)
  );

  const appointment = await bookAppointment(
    patient.id,
    doctor.id,
    new Date(),
    "General Checkup"
  );

  console.log("Appointment:", appointment);

  console.log(
    "Appointment Full:",
    await getAppointmentFull(
      appointment.id
    )
  );

  console.log(
    "Status Updated:",
    await setAppointmentStatus(
      appointment.id,
      "completed"
    )
  );
}

main();